// Interactive logic for The Periodic Table of Gemini

(function () {
  const state = {
    lang: "en",
    activeFilter: "all",
    selectedAtomicNumber: null, // Currently inspected model in drawer
    compareSet: [6, 18, 10, 1], // Default compared models in Reaction Chamber
    tooltipTimer: null
  };

  // Lookup map for all 118 elements by (period, group) and by atomicNumber
  const elementByPos = new Map();
  const elementByAtomic = new Map();

  window.ALL_ELEMENTS.forEach((item) => {
    const [atomicNumber, symbol, enName, zhName, group, period] = item;
    const elObj = { atomicNumber, symbol, enName, zhName, group, period };
    elementByPos.set(`${period}-${group}`, elObj);
    elementByAtomic.set(atomicNumber, elObj);
  });

  // DOM References
  const periodicGridEl = document.getElementById("periodic-grid");
  const filterPillsContainer = document.getElementById("filter-pills-container");
  const activeFilterDescEl = document.getElementById("active-filter-desc");
  const hierarchyGridEl = document.getElementById("hierarchy-cards-grid");

  // Drawer DOM
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const detailDrawer = document.getElementById("detail-drawer");
  const btnCloseDrawer = document.getElementById("btn-close-drawer");
  const btnDrawerToggleCompare = document.getElementById("btn-drawer-toggle-compare");
  const btnDrawerOpenCompare = document.getElementById("btn-drawer-open-compare");

  // Compare Modal DOM
  const btnOpenCompare = document.getElementById("btn-open-compare");
  const compareCountBadge = document.getElementById("compare-count-badge");
  const compareModalBackdrop = document.getElementById("compare-modal-backdrop");
  const btnCloseCompare = document.getElementById("btn-close-compare");
  const compareModelToggles = document.getElementById("compare-model-toggles");
  const compareColumnsContainer = document.getElementById("compare-columns-container");

  // Tooltip DOM
  const tooltipEl = document.getElementById("element-tooltip");

  function t() {
    return window.UI_TEXT[state.lang];
  }

  // Render static/dynamic UI copy for current language
  function renderStaticTexts() {
    const copy = t();
    document.getElementById("ui-brand-subtitle").textContent = copy.brandSubtitle;
    document.getElementById("ui-hero-title").textContent = copy.heroTitle;
    document.getElementById("ui-hero-desc").textContent = copy.heroDesc;
    document.getElementById("ui-myth-title").textContent = copy.mythTitle;
    document.getElementById("ui-myth-text").textContent = copy.mythText;
    document.getElementById("ui-filter-label").textContent = copy.filterLabel;
    document.getElementById("ui-legend-title").textContent = copy.legendTitle;
    document.getElementById("ui-legend-dimmed").textContent = copy.legendDimmed;
    document.getElementById("ui-compare-btn-text").textContent = copy.compareBtn;
    document.getElementById("ui-hierarchy-title").textContent = copy.hierarchyTitle;
    document.getElementById("ui-hierarchy-subtitle").textContent = copy.hierarchySubtitle;

    // Drawer static labels
    document.getElementById("ui-spec-legacy").textContent = copy.legacyEqLabel;
    document.getElementById("ui-spec-context").textContent = copy.contextWindowLabel;
    document.getElementById("ui-spec-thinking").textContent = copy.thinkingModesLabel;
    document.getElementById("ui-spec-modalities").textContent = copy.modalitiesLabel;
    document.getElementById("ui-why-element-title").textContent = copy.whyElementTitle;
    document.getElementById("ui-capability-profile-title").textContent = copy.capabilityProfileTitle;
    document.getElementById("ui-best-for-title").textContent = copy.bestForTitle;
    document.getElementById("ui-pairing-title").textContent = copy.pairingTitle;
    document.getElementById("ui-not-ideal-title").textContent = copy.notIdealTitle;

    // Compare Modal static labels
    document.getElementById("ui-compare-modal-title").textContent = copy.compareModalTitle;
    document.getElementById("ui-compare-modal-subtitle").textContent = copy.compareModalSubtitle;
    document.getElementById("ui-select-models-prompt").textContent = copy.selectModelsPrompt;

    compareCountBadge.textContent = state.compareSet.length;
  }

  // Render workload spotlight filter pills
  function renderFilterPills() {
    const copy = t();
    const filterKeys = ["all", "frontier", "architecture", "production", "fast", "pair"];
    filterPillsContainer.innerHTML = "";

    filterKeys.forEach((key) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `filter-pill ${state.activeFilter === key ? "active" : ""}`;
      btn.textContent = copy.filters[key];
      btn.addEventListener("click", () => {
        state.activeFilter = key;
        renderFilterPills();
        updatePeriodicSpotlight();
      });
      filterPillsContainer.appendChild(btn);
    });

    activeFilterDescEl.textContent = copy.filterDescriptions[state.activeFilter];
  }

  // Determine if an active model matches the current spotlight filter
  function isModelSpotlighted(model) {
    if (state.activeFilter === "all") return false;
    return model.workloads.includes(state.activeFilter);
  }

  function isModelMuted(model) {
    if (state.activeFilter === "all") return false;
    return !model.workloads.includes(state.activeFilter);
  }

  // Render the complete 118-element Periodic Table (Periods 1-7 + Lanthanides 8 & Actinides 9)
  function renderPeriodicTable() {
    periodicGridEl.innerHTML = "";
    const copy = t();

    // Periods 1 to 7 (Main Table)
    for (let period = 1; period <= 7; period++) {
      for (let group = 1; group <= 18; group++) {
        // Lanthanide placeholder at (6, 3) and Actinide placeholder at (7, 3)
        if (period === 6 && group === 3) {
          const ph = document.createElement("div");
          ph.className = "series-placeholder-tile";
          ph.style.gridRow = "6";
          ph.style.gridColumn = "3";
          ph.innerHTML = `<span>57–71</span><strong>La–Lu</strong>`;
          periodicGridEl.appendChild(ph);
          continue;
        }
        if (period === 7 && group === 3) {
          const ph = document.createElement("div");
          ph.className = "series-placeholder-tile";
          ph.style.gridRow = "7";
          ph.style.gridColumn = "3";
          ph.innerHTML = `<span>89–103</span><strong>Ac–Lr</strong>`;
          periodicGridEl.appendChild(ph);
          continue;
        }

        const elData = elementByPos.get(`${period}-${group}`);
        if (elData) {
          const tile = createElementTile(elData, period, group);
          periodicGridEl.appendChild(tile);
        }
      }
    }

    // Spacer row between Main Table and Lanthanides/Actinides (Row 8 is spacer, Row 9 is Lanthanides, Row 10 is Actinides)
    const spacer = document.createElement("div");
    spacer.className = "lanthanide-spacer";
    spacer.style.gridRow = "8";
    periodicGridEl.appendChild(spacer);

    // Row 9: Lanthanides (stored as period=8, group=4..18)
    const lanthLabel = document.createElement("div");
    lanthLabel.className = "series-label-cell";
    lanthLabel.style.gridRow = "9";
    lanthLabel.style.gridColumn = "1 / 4";
    lanthLabel.textContent = copy.lanthanidesLabel;
    periodicGridEl.appendChild(lanthLabel);

    for (let group = 4; group <= 18; group++) {
      const elData = elementByPos.get(`8-${group}`);
      if (elData) {
        const tile = createElementTile(elData, 9, group);
        periodicGridEl.appendChild(tile);
      }
    }

    // Row 10: Actinides (stored as period=9, group=4..18)
    const actLabel = document.createElement("div");
    actLabel.className = "series-label-cell";
    actLabel.style.gridRow = "10";
    actLabel.style.gridColumn = "1 / 4";
    actLabel.textContent = copy.actinidesLabel;
    periodicGridEl.appendChild(actLabel);

    for (let group = 4; group <= 18; group++) {
      const elData = elementByPos.get(`9-${group}`);
      if (elData) {
        const tile = createElementTile(elData, 10, group);
        periodicGridEl.appendChild(tile);
      }
    }
  }

  function createElementTile(elData, gridRow, gridCol) {
    const geminiModel = window.GEMINI_MODELS[elData.atomicNumber];
    const tile = document.createElement("div");
    tile.style.gridRow = String(gridRow);
    tile.style.gridColumn = String(gridCol);
    tile.dataset.atomic = String(elData.atomicNumber);

    const displayName = state.lang === "zh" ? elData.zhName : elData.enName;

    if (geminiModel) {
      const spotlightClass = isModelSpotlighted(geminiModel) ? "spotlighted" : "";
      const mutedClass = isModelMuted(geminiModel) ? "muted-by-filter" : "";
      tile.className = `element-tile active-model theme-${geminiModel.colorTheme} ${spotlightClass} ${mutedClass}`;
      tile.setAttribute("role", "button");
      tile.setAttribute("tabindex", "0");
      tile.setAttribute(
        "aria-label",
        `${geminiModel[state.lang].modelName} (${elData.symbol}, #${elData.atomicNumber})`
      );

      tile.innerHTML = `
        <div class="tile-top">
          <span class="tile-atomic">${elData.atomicNumber}</span>
          <span class="tile-rank-tag">#${geminiModel.capabilityRank}</span>
        </div>
        <div class="tile-symbol">${elData.symbol}</div>
        <div class="tile-name">${displayName}</div>
      `;

      tile.addEventListener("click", () => openModelDrawer(elData.atomicNumber));
      tile.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModelDrawer(elData.atomicNumber);
        }
      });
    } else {
      tile.className = "element-tile dimmed";
      tile.innerHTML = `
        <div class="tile-top">
          <span class="tile-atomic">${elData.atomicNumber}</span>
        </div>
        <div class="tile-symbol">${elData.symbol}</div>
        <div class="tile-name">${displayName}</div>
      `;

      tile.addEventListener("click", () => showUnclaimedTooltip(elData));
    }

    return tile;
  }

  // Update spotlight classes on active model tiles without rebuilding the entire 118-element DOM
  function updatePeriodicSpotlight() {
    const copy = t();
    activeFilterDescEl.textContent = copy.filterDescriptions[state.activeFilter];

    const activeTiles = periodicGridEl.querySelectorAll(".element-tile.active-model");
    activeTiles.forEach((tile) => {
      const atomicNum = Number(tile.dataset.atomic);
      const model = window.GEMINI_MODELS[atomicNum];
      if (!model) return;
      tile.classList.toggle("spotlighted", isModelSpotlighted(model));
      tile.classList.toggle("muted-by-filter", isModelMuted(model));
    });
  }

  // Show subtle toast/tooltip when clicking any of the 114 dimmed unclaimed elements
  function showUnclaimedTooltip(elData) {
    const copy = t();
    const elTitle =
      state.lang === "zh"
        ? `#${elData.atomicNumber} ${elData.zhName} (${elData.enName}) · ${copy.unclaimedBadge}`
        : `#${elData.atomicNumber} ${elData.enName} (${elData.symbol}) · ${copy.unclaimedBadge}`;

    tooltipEl.innerHTML = `
      <div class="tooltip-sym-box">
        <span>${elData.atomicNumber}</span>
        <strong>${elData.symbol}</strong>
      </div>
      <div class="tooltip-text">
        <strong>${elTitle}</strong>
        <span>${copy.unclaimedDesc}</span>
      </div>
    `;
    tooltipEl.classList.remove("hidden");

    if (state.tooltipTimer) clearTimeout(state.tooltipTimer);
    state.tooltipTimer = setTimeout(() => {
      tooltipEl.classList.add("hidden");
    }, 3600);
  }

  // Render the 4 True Capability Hierarchy Cards below the Periodic Table (Ordered: Carbon #6 -> Argon #18 -> Neon #10 -> Hydrogen #1)
  function renderHierarchyCards() {
    hierarchyGridEl.innerHTML = "";
    const copy = t();

    window.CAPABILITY_ORDER.forEach((atomicNum) => {
      const model = window.GEMINI_MODELS[atomicNum];
      const localized = model[state.lang];
      const rankBadge = state.lang === "zh" ? model.rankBadgeZh : model.rankBadge;

      const card = document.createElement("article");
      card.className = `hierarchy-card card-${model.colorTheme}`;
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");

      const thinkingChipsHtml = model.thinkingLevels
        .map((lvl) => `<span class="thinking-chip ${lvl === "xhigh" ? "xhigh" : ""}">${lvl}</span>`)
        .join("");

      card.innerHTML = `
        <div>
          <div class="hcard-top">
            <span class="hcard-rank">${rankBadge}</span>
            <span class="hcard-atomic-pill">${copy.atomicNumberLabel} #${model.atomicNumber}</span>
          </div>
          <div class="hcard-title-row">
            <div class="hcard-symbol-box">${model.symbol}</div>
            <div>
              <h3 class="hcard-model-name">${localized.modelName}</h3>
              <div class="hcard-tier-sub">${localized.tierName}</div>
            </div>
          </div>
        </div>

        <p class="hcard-desc">${localized.shortTagline}</p>

        <div class="hcard-mini-bars">
          <div class="mini-bar-row">
            <span>${copy.metricLabels.reasoning}</span>
            <div class="mini-bar-track">
              <div class="mini-bar-fill" style="width:${model.metrics.reasoning}%; background:${model.accentHex}"></div>
            </div>
          </div>
          <div class="mini-bar-row">
            <span>${copy.metricLabels.speed}</span>
            <div class="mini-bar-track">
              <div class="mini-bar-fill" style="width:${model.metrics.speed}%; background:${model.accentHex}"></div>
            </div>
          </div>
          <div class="mini-bar-row">
            <span>${copy.metricLabels.efficiency}</span>
            <div class="mini-bar-track">
              <div class="mini-bar-fill" style="width:${model.metrics.efficiency}%; background:${model.accentHex}"></div>
            </div>
          </div>
        </div>

        <div class="hcard-footer">
          <div class="hcard-thinking-list">${thinkingChipsHtml}</div>
          <span class="inspect-link">${copy.clickToInspect}</span>
        </div>
      `;

      card.addEventListener("click", () => openModelDrawer(atomicNum));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModelDrawer(atomicNum);
        }
      });

      hierarchyGridEl.appendChild(card);
    });
  }

  // Open the Slide-Over Detail Drawer for a given Gemini model atomic number
  function openModelDrawer(atomicNum) {
    const model = window.GEMINI_MODELS[atomicNum];
    if (!model) return;
    state.selectedAtomicNumber = atomicNum;

    const copy = t();
    const localized = model[state.lang];

    // Header badge
    const badgeEl = document.getElementById("drawer-element-badge");
    badgeEl.className = `drawer-element-tile element-tile active-model theme-${model.colorTheme}`;
    badgeEl.innerHTML = `
      <span class="d-num">#${model.atomicNumber}</span>
      <span class="d-sym">${model.symbol}</span>
    `;

    const rankPillEl = document.getElementById("drawer-rank-pill");
    rankPillEl.textContent = state.lang === "zh" ? model.rankBadgeZh : model.rankBadge;
    rankPillEl.style.color = model.accentHex;

    document.getElementById("drawer-model-name").textContent = localized.modelName;
    document.getElementById("drawer-tier-name").textContent = localized.tierName;
    document.getElementById("drawer-tagline").textContent = localized.shortTagline;

    // Specs
    document.getElementById("drawer-legacy-eq").textContent = localized.legacyEquivalent;
    document.getElementById("drawer-context").textContent = model.contextWindow;

    const thinkingBadgesEl = document.getElementById("drawer-thinking-badges");
    thinkingBadgesEl.innerHTML = model.thinkingLevels
      .map((lvl) => `<span class="thinking-chip ${lvl === "xhigh" ? "xhigh" : ""}">${lvl}</span>`)
      .join("");

    const modalitiesList = state.lang === "zh" ? model.modalitiesZh : model.modalities;
    const modalitiesEl = document.getElementById("drawer-modalities");
    modalitiesEl.innerHTML = modalitiesList
      .map((m) => `<span class="modality-tag">${m}</span>`)
      .join("");

    // Why Element
    document.getElementById("drawer-why-element").textContent = localized.whyElement;

    // 5-Axis Metrics Bars
    const metricsListEl = document.getElementById("drawer-metrics-list");
    const metricKeys = ["reasoning", "coding", "speed", "efficiency", "steerability"];
    metricsListEl.innerHTML = metricKeys
      .map((k) => {
        const val = model.metrics[k];
        return `
          <div class="metric-item">
            <div class="metric-head">
              <span>${copy.metricLabels[k]}</span>
              <span class="metric-score">${val}/100</span>
            </div>
            <div class="metric-bar-bg">
              <div class="metric-bar-fill" style="width:${val}%; background:${model.accentHex}"></div>
            </div>
          </div>
        `;
      })
      .join("");

    // Best For list
    const bestForListEl = document.getElementById("drawer-best-for-list");
    bestForListEl.innerHTML = localized.bestFor.map((item) => `<li>${item}</li>`).join("");

    // Pairing Tip & When to Switch
    document.getElementById("drawer-pairing-tip").textContent = localized.pairingTip;
    document.getElementById("drawer-when-to-switch").textContent = localized.whenToSwitch;

    // Compare button state inside drawer
    updateDrawerCompareButtons();

    drawerBackdrop.classList.remove("hidden");
    detailDrawer.classList.remove("hidden");
  }

  function updateDrawerCompareButtons() {
    if (!state.selectedAtomicNumber) return;
    const copy = t();
    const inCompare = state.compareSet.includes(state.selectedAtomicNumber);
    btnDrawerToggleCompare.textContent = inCompare
      ? `✓ ${copy.removeFromCompare}`
      : `+ ${copy.addToCompare}`;
    btnDrawerOpenCompare.textContent = copy.openCompareModal;
    compareCountBadge.textContent = state.compareSet.length;
  }

  function closeModelDrawer() {
    drawerBackdrop.classList.add("hidden");
    detailDrawer.classList.add("hidden");
    state.selectedAtomicNumber = null;
  }

  // Reaction Chamber: Side-by-Side Comparison Modal
  function openCompareModal() {
    renderCompareModal();
    compareModalBackdrop.classList.remove("hidden");
  }

  function closeCompareModal() {
    compareModalBackdrop.classList.add("hidden");
  }

  function renderCompareModal() {
    const copy = t();
    compareModelToggles.innerHTML = "";

    // Render toggle buttons for all 4 active models in capability rank order
    window.CAPABILITY_ORDER.forEach((atomicNum) => {
      const model = window.GEMINI_MODELS[atomicNum];
      const localized = model[state.lang];
      const isSelected = state.compareSet.includes(atomicNum);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `compare-toggle-btn ${isSelected ? "selected" : ""}`;
      if (isSelected) {
        btn.style.borderColor = model.accentHex;
      }
      btn.innerHTML = `
        <span class="chip-dot" style="background:${model.accentHex}"></span>
        <span>#${model.atomicNumber} ${localized.modelName}</span>
      `;

      btn.addEventListener("click", () => {
        if (state.compareSet.includes(atomicNum)) {
          // Keep at least 1 model selected
          if (state.compareSet.length > 1) {
            state.compareSet = state.compareSet.filter((id) => id !== atomicNum);
          }
        } else {
          state.compareSet.push(atomicNum);
          // Sort by capability order
          state.compareSet.sort(
            (a, b) => window.CAPABILITY_ORDER.indexOf(a) - window.CAPABILITY_ORDER.indexOf(b)
          );
        }
        compareCountBadge.textContent = state.compareSet.length;
        updateDrawerCompareButtons();
        renderCompareModal();
      });

      compareModelToggles.appendChild(btn);
    });

    // Render comparison columns
    compareColumnsContainer.innerHTML = "";
    state.compareSet.forEach((atomicNum) => {
      const model = window.GEMINI_MODELS[atomicNum];
      const localized = model[state.lang];
      const rankBadge = state.lang === "zh" ? model.rankBadgeZh : model.rankBadge;

      const col = document.createElement("div");
      col.className = "compare-col-card";
      col.style.borderTop = `3px solid ${model.accentHex}`;

      const thinkingHtml = model.thinkingLevels
        .map((lvl) => `<span class="thinking-chip ${lvl === "xhigh" ? "xhigh" : ""}">${lvl}</span>`)
        .join("");

      const metricKeys = ["reasoning", "coding", "speed", "efficiency", "steerability"];
      const metricsHtml = metricKeys
        .map(
          (k) => `
          <div class="mini-bar-row">
            <span>${copy.metricLabels[k]}</span>
            <div class="mini-bar-track">
              <div class="mini-bar-fill" style="width:${model.metrics[k]}%; background:${model.accentHex}"></div>
            </div>
          </div>
        `
        )
        .join("");

      col.innerHTML = `
        <div class="compare-col-header">
          <div class="hcard-symbol-box" style="border:1px solid ${model.accentHex}; color:${model.accentHex}; background:rgba(255,255,255,0.04)">
            ${model.symbol}
          </div>
          <div>
            <span class="hcard-rank" style="color:${model.accentHex}">${rankBadge}</span>
            <h3 class="hcard-model-name" style="margin-top:4px">${localized.modelName}</h3>
            <span class="hcard-atomic-pill">${copy.atomicNumberLabel} #${model.atomicNumber}</span>
          </div>
        </div>

        <div class="compare-field">
          <span class="compare-field-label">${copy.tableHeaders.tier}</span>
          <strong class="compare-field-val">${localized.tierName}</strong>
        </div>

        <div class="compare-field">
          <span class="compare-field-label">${copy.tableHeaders.legacy}</span>
          <span class="compare-field-val">${localized.legacyEquivalent}</span>
        </div>

        <div class="compare-field">
          <span class="compare-field-label">${copy.tableHeaders.role}</span>
          <span class="compare-field-val">${localized.primaryRole}</span>
        </div>

        <div class="compare-field">
          <span class="compare-field-label">${copy.tableHeaders.thinking}</span>
          <div class="thinking-badges">${thinkingHtml}</div>
        </div>

        <div class="compare-field">
          <span class="compare-field-label">${copy.tableHeaders.tokenSpend}</span>
          <span class="compare-field-val">${localized.tokenSpend}</span>
        </div>

        <div class="compare-field">
          <span class="compare-field-label">${copy.capabilityProfileTitle}</span>
          <div class="hcard-mini-bars" style="border-top:none; padding-top:4px">
            ${metricsHtml}
          </div>
        </div>

        <div class="compare-field">
          <span class="compare-field-label">${copy.tableHeaders.bestFor}</span>
          <ul class="bullet-list" style="font-size:0.8rem">
            ${localized.bestFor.slice(0, 3).map((b) => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      `;

      compareColumnsContainer.appendChild(col);
    });
  }

  // Wire up Global Event Listeners
  function initEvents() {
    // Drawer events
    btnCloseDrawer.addEventListener("click", closeModelDrawer);
    drawerBackdrop.addEventListener("click", closeModelDrawer);

    btnDrawerToggleCompare.addEventListener("click", () => {
      const atomicNum = state.selectedAtomicNumber;
      if (!atomicNum) return;
      if (state.compareSet.includes(atomicNum)) {
        if (state.compareSet.length > 1) {
          state.compareSet = state.compareSet.filter((id) => id !== atomicNum);
        }
      } else {
        state.compareSet.push(atomicNum);
        state.compareSet.sort(
          (a, b) => window.CAPABILITY_ORDER.indexOf(a) - window.CAPABILITY_ORDER.indexOf(b)
        );
      }
      updateDrawerCompareButtons();
    });

    btnDrawerOpenCompare.addEventListener("click", () => {
      if (
        state.selectedAtomicNumber &&
        !state.compareSet.includes(state.selectedAtomicNumber)
      ) {
        state.compareSet.push(state.selectedAtomicNumber);
        state.compareSet.sort(
          (a, b) => window.CAPABILITY_ORDER.indexOf(a) - window.CAPABILITY_ORDER.indexOf(b)
        );
      }
      closeModelDrawer();
      openCompareModal();
    });

    // Compare Modal events
    btnOpenCompare.addEventListener("click", openCompareModal);
    btnCloseCompare.addEventListener("click", closeCompareModal);
    compareModalBackdrop.addEventListener("click", (e) => {
      if (e.target === compareModalBackdrop) closeCompareModal();
    });

    // Legend chips click to open respective model drawer
    document.querySelectorAll(".legend-chip[data-atomic]").forEach((chip) => {
      chip.addEventListener("click", () => {
        const atomicNum = Number(chip.dataset.atomic);
        if (atomicNum) openModelDrawer(atomicNum);
      });
    });

    // Language Switcher EN / 中文
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const newLang = btn.dataset.lang;
        if (newLang === state.lang) return;
        state.lang = newLang;

        document.querySelectorAll(".lang-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.lang === state.lang);
        });

        renderAll();
        if (state.selectedAtomicNumber) {
          openModelDrawer(state.selectedAtomicNumber);
        }
        if (!compareModalBackdrop.classList.contains("hidden")) {
          renderCompareModal();
        }
      });
    });

    // Escape key closes drawer or modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!compareModalBackdrop.classList.contains("hidden")) {
          closeCompareModal();
        } else if (!detailDrawer.classList.contains("hidden")) {
          closeModelDrawer();
        }
      }
    });
  }

  function renderAll() {
    renderStaticTexts();
    renderFilterPills();
    renderPeriodicTable();
    renderHierarchyCards();
  }

  // Initialize application
  initEvents();
  renderAll();
})();
