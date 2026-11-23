// Complete 118 Elements of the Periodic Table + Gemini 4 Element Model Catalog (EN & ZH)

window.UI_TEXT = {
  en: {
    brandSubtitle: "GEMINI 4 ELEMENT CATALOG",
    heroTitle: "The Periodic Table of Gemini",
    heroDesc:
      "Google names the Gemini 4 lineup after chemical elements instead of sequential version numbers. Explore the full periodic table below — glowing elements represent active Gemini models. Click any active element to inspect its tier, thinking budgets, and ideal workloads.",
    mythTitle: "Mythbuster: Atomic Number ≠ Model Size",
    mythText:
      "Unlike traditional v1 → v2 numbering, a higher atomic number doesn't mean a larger model. Carbon (#6) is the heaviest frontier model, while Argon (#18) and Neon (#10) optimize for reasoning and production efficiency.",
    filterLabel: "Spotlight by Workload:",
    filters: {
      all: "All Active Models (4)",
      frontier: "Deep Planning & Swarm (#6 C)",
      architecture: "Architecture & Analysis (#18 Ar)",
      production: "Production Engineering (#10 Ne)",
      fast: "Fast Agentic Loops (#1 H)",
      pair: "Planner + Executor Duo (C + H)"
    },
    filterDescriptions: {
      all: "Showing all 4 active Gemini 4 element models lit up across the periodic table.",
      frontier: "Carbon (#6) handles the hardest long-horizon reasoning, multi-agent /swarm coordination, and scientific discovery.",
      architecture: "Argon (#18) delivers frontier-level architectural analysis and low-hallucination knowledge work with higher token efficiency.",
      production: "Neon (#10) sits at the Pareto frontier for production software engineering, analytical reasoning, and steerable workflows.",
      fast: "Hydrogen (#1) is the ultra-fast, flat-rate agentic executor built for rapid tool-calling loops and everyday coding.",
      pair: "Recommended Multi-Agent Pattern: Pair Carbon (#6) as the strategic Planner/Orchestrator with Hydrogen (#1) as the high-speed Executor."
    },
    legendTitle: "Tier Legend:",
    legendDimmed: "Unclaimed Element (114)",
    compareBtn: "Compare Models",
    compareCountSuffix: "selected",
    hierarchyTitle: "True Capability & Tier Hierarchy (Ordered by Raw Reasoning Weight)",
    hierarchySubtitle: "How the 4 active Gemini elements rank from heaviest frontier planner to fastest agentic executor",
    lanthanidesLabel: "57–71 Lanthanides",
    actinidesLabel: "89–103 Actinides",
    unclaimedBadge: "Unclaimed by Gemini",
    unclaimedDesc: "This chemical element has not yet been used as an official Gemini model name. Click any glowing tile (H, C, Ne, Ar) to inspect an active Gemini 4 model.",
    atomicNumberLabel: "Atomic Number",
    tierRankLabel: "Capability Rank",
    legacyEqLabel: "Classic Tier Equivalent",
    contextWindowLabel: "Context Window",
    thinkingModesLabel: "Thinking Budgets",
    modalitiesLabel: "Native Modalities",
    whyElementTitle: "Why This Element Name?",
    capabilityProfileTitle: "Capability Profile",
    bestForTitle: "Best Workloads & Use Cases",
    notIdealTitle: "When to Switch to Another Element",
    pairingTitle: "Multi-Agent Workflow Tip",
    addToCompare: "Add to Compare",
    removeFromCompare: "Remove from Compare",
    openCompareModal: "Compare Side-by-Side",
    closeLabel: "Close",
    compareModalTitle: "Reaction Chamber: Side-by-Side Model Comparison",
    compareModalSubtitle: "Select up to 4 Gemini element models to compare their tiers, thinking budgets, and tradeoff curves.",
    selectModelsPrompt: "Toggle models below to compare:",
    metricLabels: {
      reasoning: "Deep Reasoning & Planning",
      coding: "Agentic Coding & Tool Use",
      speed: "Speed & Low Latency",
      efficiency: "Token & Cost Efficiency",
      steerability: "Steerability & Low Hallucination"
    },
    tableHeaders: {
      element: "Element & Atomic #",
      tier: "Model Tier",
      legacy: "Classic Equivalent",
      thinking: "Thinking Levels",
      context: "Context Window",
      tokenSpend: "Token Consumption",
      role: "Primary Role in Stack",
      bestFor: "Top Strengths"
    },
    clickToInspect: "Click to inspect model →"
  },
  zh: {
    brandSubtitle: "GEMINI 4 元素模型图鉴",
    heroTitle: "Gemini 模型元素周期表",
    heroDesc:
      "Gemini 4 系列采用化学元素而非传统的版本号来命名模型。下方展示了完整的 118 号元素周期表——发光高亮的元素代表已发布的 Gemini 模型。点击任意高亮元素即可查看其能力梯队、思考预算（Thinking Budgets）与最佳适用场景。",
    mythTitle: "核心误区解析：原子序数 ≠ 模型大小",
    mythText:
      "与传统数字编号不同，原子序数更大并不代表模型更强！6 号碳（Carbon）实际上是最强的旗舰推理模型，而 18 号氩（Argon）和 10 号氖（Neon）则针对高效率推理与生产环境做了帕累托最优平衡。",
    filterLabel: "按使用场景高亮：",
    filters: {
      all: "全部已点亮模型 (4)",
      frontier: "长程规划与多智能体 (#6 C)",
      architecture: "架构设计与深度分析 (#18 Ar)",
      production: "主力生产级研发 (#10 Ne)",
      fast: "极速执行与高频调用 (#1 H)",
      pair: "规划 + 执行黄金组合 (C + H)"
    },
    filterDescriptions: {
      all: "在完整元素周期表中高亮显示当前全部 4 款 Gemini 4 元素模型。",
      frontier: "Carbon（6号·碳）专为最复杂的长程推理、多智能体协同（/swarm）以及科学发现与顶层架构设计打造。",
      architecture: "Argon（18号·氩）在保持前沿推理深度的同时比 Carbon 消耗更少 Token，适合日常架构设计与低幻觉知识分析。",
      production: "Neon（10号·氖）处于成本与性能的帕累托前沿，擅长复杂软件工程、数据分析建模与高可控性生产任务。",
      fast: "Hydrogen（1号·氢）是极速、高性价比的智能体执行器（Flash 继任者），支持从 low 到 xhigh 的灵活思考预算。",
      pair: "推荐多智能体范式：由 Carbon（#6 碳）担任顶层规划师（Planner），搭配 Hydrogen（#1 氢）作为高频高速执行器（Executor）。"
    },
    legendTitle: "梯队图例：",
    legendDimmed: "未命名元素 (114)",
    compareBtn: "模型对比",
    compareCountSuffix: "已选",
    hierarchyTitle: "真实能力与梯队排序（按推理量级从高到低）",
    hierarchySubtitle: "直观对比 4 款已点亮元素模型的真实能力定位，不再被原子序数误导",
    lanthanidesLabel: "57–71 镧系元素",
    actinidesLabel: "89–103 锕系元素",
    unclaimedBadge: "暂未用于 Gemini 命名",
    unclaimedDesc: "该化学元素目前尚未被用作 Gemini 正式模型名称。请点击周期表中发光的元素（H 氢、C 碳、Ne 氖、Ar 氩）查看详情。",
    atomicNumberLabel: "原子序数",
    tierRankLabel: "能力量级排序",
    legacyEqLabel: "对应经典梯队",
    contextWindowLabel: "上下文窗口",
    thinkingModesLabel: "支持的思考预算",
    modalitiesLabel: "原生多模态能力",
    whyElementTitle: "为什么选择该元素命名？",
    capabilityProfileTitle: "五维能力画像",
    bestForTitle: "最佳适用场景",
    notIdealTitle: "何时建议切换其他元素模型",
    pairingTitle: "多智能体协同建议",
    addToCompare: "加入对比",
    removeFromCompare: "移出对比",
    openCompareModal: "打开并排对比舱",
    closeLabel: "关闭",
    compareModalTitle: "反应舱：Gemini 元素模型并排对比",
    compareModalSubtitle: "选择 2 至 4 款 Gemini 元素模型，直观对比它们的能力档位、思考预算与速度/成本权衡。",
    selectModelsPrompt: "点击下方按钮切换参与对比的模型：",
    metricLabels: {
      reasoning: "深度推理与长程规划",
      coding: "智能体编程与工具调用",
      speed: "响应速度与低延迟",
      efficiency: "Token 效率与性价比",
      steerability: "指令可控性与低幻觉率"
    },
    tableHeaders: {
      element: "元素与原子序数",
      tier: "模型能力梯队",
      legacy: "对应传统定位",
      thinking: "思考预算档位",
      context: "上下文窗口",
      tokenSpend: "每轮 Token 消耗",
      role: "技术栈核心角色",
      bestFor: "核心擅长领域"
    },
    clickToInspect: "点击查看详情 →"
  }
};

// Active Gemini 4 Element Models keyed by Atomic Number
window.GEMINI_MODELS = {
  6: {
    atomicNumber: 6,
    symbol: "C",
    id: "carbon",
    colorTheme: "gold", // Amber / Gold frontier glow
    accentHex: "#f59e0b",
    capabilityRank: 1,
    rankBadge: "#1 Heaviest / Frontier",
    rankBadgeZh: "#1 最强旗舰 / 顶层推理",
    workloads: ["frontier", "pair"],
    thinkingLevels: ["low", "medium", "high"],
    defaultThinking: "high",
    contextWindow: "1M Tokens",
    modalities: ["Text", "Code", "Images", "Audio", "Video"],
    modalitiesZh: ["文本", "代码", "图像", "音频", "视频"],
    metrics: {
      reasoning: 99,
      coding: 97,
      speed: 64,
      efficiency: 68,
      steerability: 96
    },
    en: {
      modelName: "Gemini 4 Carbon",
      elementName: "Carbon",
      tierName: "Frontier Flagship / Heavy Planner",
      shortTagline: "Maximum intelligence for long-horizon reasoning & multi-agent orchestration",
      legacyEquivalent: "Ultra / Pro-Heavy Tier",
      tokenSpend: "Higher (Deep thorough verification & comprehensive output)",
      primaryRole: "Strategic Planner & Frontier Problem Solver",
      whyElement:
        "In chemistry, Carbon forms the structural backbone of complex organic matter and diamond lattices. In Gemini 4, Carbon (#6) is the foundational heavyweight model upon which lighter variants are distilled—built to hold massive architectural structures together without collapsing.",
      bestFor: [
        "Multi-day software architecture, full-repo refactoring, and deep root-cause debugging",
        "Orchestrating multi-agent swarms (/swarm) as the lead coordinator",
        "Scientific research, mathematical proof verification, and complex security audits",
        "Tasks where getting the design right on the first try outweighs latency or token cost"
      ],
      whenToSwitch:
        "If you need rapid iterative edits, high-volume batch processing, or lower token spend per turn, switch to Argon (#18) for daily deep work, Neon (#10) for lean production coding, or Hydrogen (#1) for fast execution loops.",
      pairingTip:
        "Pair Carbon (#6) as the 'Architect/Planner' with Hydrogen (#1) as the 'Executor'. Let Carbon design the specification and verify edge cases while Hydrogen executes parallel file edits and test runs."
    },
    zh: {
      modelName: "Gemini 4 Carbon",
      elementName: "碳 (Carbon)",
      tierName: "前沿旗舰 / 顶层规划模型",
      shortTagline: "最高智力上限，专为长程复杂推理、多智能体协同与顶层架构而生",
      legacyEquivalent: "Ultra / 重装 Pro 旗舰级",
      tokenSpend: "较高（深度验证与完整推理链）",
      primaryRole: "顶层架构规划师 & 极限难题攻坚者",
      whyElement:
        "在化学中，碳（Carbon）构成了复杂有机生命与金刚石晶格的核心骨架。在 Gemini 4 家族中，6 号元素 Carbon 是整个模型体系的旗舰母体（其他轻量模型亦由其蒸馏/适配而来），尽管原子序数只有 6，却是名副其实的智力天花板。",
      bestFor: [
        "跨模块大型软件架构设计、全仓级代码重构与深层疑难 Bug 排查",
        "在多智能体集群（/swarm）中担任主协调员（Coordinator / Planner）",
        "前沿科学研究、数学形式化验证与高复杂度安全审计",
        "对首次成功率要求极高、推理深度优先于延迟的攻坚任务"
      ],
      whenToSwitch:
        "如果你需要更快的单轮响应或更精简的输出 Token 消耗，日常深度设计可切换至 Argon（#18 氩），生产级高效研发可切换至 Neon（#10 氖），高频脚本与工具调用请使用 Hydrogen（#1 氢）。",
      pairingTip:
        "黄金组合：让 Carbon（#6 碳）担任「总架构师 / 规划者」，拆解任务并审查边界条件；再交由 Hydrogen（#1 氢）并行执行代码修改与测试循环。"
    }
  },
  18: {
    atomicNumber: 18,
    symbol: "Ar",
    id: "argon",
    colorTheme: "violet", // Electric Violet glow
    accentHex: "#a855f7",
    capabilityRank: 2,
    rankBadge: "#2 Efficient Frontier",
    rankBadgeZh: "#2 高效前沿推理",
    workloads: ["architecture"],
    thinkingLevels: ["medium", "high"],
    defaultThinking: "high",
    contextWindow: "1M Tokens",
    modalities: ["Text", "Code", "Images", "Audio", "Video"],
    modalitiesZh: ["文本", "代码", "图像", "音频", "视频"],
    metrics: {
      reasoning: 94,
      coding: 93,
      speed: 78,
      efficiency: 85,
      steerability: 95
    },
    en: {
      modelName: "Gemini 4 Argon",
      elementName: "Argon",
      tierName: "Efficient Frontier Reasoning",
      shortTagline: "Deep domain analysis & architectural reasoning with disciplined token economy",
      legacyEquivalent: "Pro (High-Reasoning) Tier",
      tokenSpend: "Moderate (Spends significantly fewer tokens than Carbon)",
      primaryRole: "Daily Lead Engineer & Knowledge Analyst",
      whyElement:
        "Argon is an inert noble gas widely used as a protective shielding atmosphere in precision welding and high-temperature crystal growth. Gemini 4 Argon (#18) provides a stable, low-hallucination reasoning environment for complex daily engineering without the heavy compute overhead of Carbon.",
      bestFor: [
        "Daily system architecture, code review, and full-stack feature implementation",
        "Low-hallucination domain analysis across large 1M-token document repositories",
        "Complex multi-step problem solving with adjustable medium/high thinking budgets",
        "Developers who want near-Carbon intelligence at a sustainable everyday token cost"
      ],
      whenToSwitch:
        "Move up to Carbon (#6) only for extreme multi-day orchestration or novel scientific problems; step across to Neon (#10) for faster end-to-end production turns or Hydrogen (#1) for high-frequency tool loops.",
      pairingTip:
        "Argon (#18) works great as your default primary coding & research model in IDE sessions, delegating repetitive search or test runs to Hydrogen (#1) subagents."
    },
    zh: {
      modelName: "Gemini 4 Argon",
      elementName: "氩 (Argon)",
      tierName: "高效前沿推理模型",
      shortTagline: "兼具深度架构推理与优秀的 Token 经济性，适合全天候深度工作",
      legacyEquivalent: "Pro（深度推理增强版）梯队",
      tokenSpend: "适中（相比 Carbon 显著降低 Token 消耗）",
      primaryRole: "全天候主力架构师 & 深度知识分析师",
      whyElement:
        "氩气（Argon）是大气中含量最丰富的惰性保护气，常用于精密焊接与半导体晶体生长中的稳定保护层。Gemini 4 Argon（#18）正如其名，为复杂的日常研发与知识工作提供了稳定、低幻觉的高水准推理环境，同时避免了 Carbon 的高昂开销。",
      bestFor: [
        "日常系统架构设计、深度代码审查（Code Review）与核心功能开发",
        "基于 100 万 Token 超长上下文的低幻觉专业文献与代码库分析",
        "通过 medium / high 思考预算灵活调节推理深度与响应时间",
        "追求接近 Carbon 的推理质量、同时希望控制日常 Token 成本的主力开发者"
      ],
      whenToSwitch:
        "遇到极高难度的跨天级大型规划时可升级至 Carbon（#6 碳）；若追求更紧凑的输出与更快的端到端完成速度，可尝试同为惰性气体家族的 Neon（#10 氖）。",
      pairingTip:
        "Argon（#18 氩）非常适合作为 IDE 中的默认主模型（如 Gemini 4 Argon High），在主会话中把控方向，同时将批量检索或测试任务派发给 Hydrogen（#1 氢）子智能体。"
    }
  },
  10: {
    atomicNumber: 10,
    symbol: "Ne",
    id: "neon",
    colorTheme: "emerald", // Vibrant Emerald / Teal-Green glow
    accentHex: "#10b981",
    capabilityRank: 3,
    rankBadge: "#3 Pareto Production",
    rankBadgeZh: "#3 生产级帕累托最优",
    workloads: ["production"],
    thinkingLevels: ["low", "medium", "high"],
    defaultThinking: "medium",
    contextWindow: "1M Tokens",
    modalities: ["Text", "Code", "Images", "Audio", "Video"],
    modalitiesZh: ["文本", "代码", "图像", "音频", "视频"],
    metrics: {
      reasoning: 90,
      coding: 94,
      speed: 86,
      efficiency: 92,
      steerability: 96
    },
    en: {
      modelName: "Gemini 4 Neon",
      elementName: "Neon",
      tierName: "High-Efficiency Production / Pareto Model",
      shortTagline: "Adapted from Carbon for fast, concise, steerable software engineering & analysis",
      legacyEquivalent: "Pro / Balanced Production Tier",
      tokenSpend: "Lean (Concise output tokens per turn for faster end-to-end completion)",
      primaryRole: "Production Workhorse & Analytical Specialist",
      whyElement:
        "Neon is a lighter noble gas famous for producing crisp, immediate luminosity when energized. Adapted directly from Carbon, Gemini 4 Neon (#10) sits right at the Pareto frontier—delivering sharp coding and analytical accuracy while emitting fewer redundant tokens.",
      bestFor: [
        "Production software engineering where fast end-to-end task completion matters",
        "Financial modeling, spreadsheet automation, and structured legal/enterprise research",
        "Interactive workflows requiring high steerability and mid-task user course corrections",
        "Applications needing low fabrication rates and concise, actionable responses"
      ],
      whenToSwitch:
        "Switch to Argon (#18) or Carbon (#6) when you need exhaustive architectural exploration, or drop to Hydrogen (#1) for high-parallelism background tasks and free-tier prototyping.",
      pairingTip:
        "Use Neon (#10) for interactive user-facing coding assistants and enterprise pipelines where both response precision and wall-clock turnaround time are critical."
    },
    zh: {
      modelName: "Gemini 4 Neon",
      elementName: "氖 (Neon)",
      tierName: "高能效生产级 / 帕累托主力模型",
      shortTagline: "由 Carbon 针对高效率适配而来，输出精炼、指令可控性极强的生产级主力",
      legacyEquivalent: "Pro（高能效生产级）梯队",
      tokenSpend: "精简（每轮输出更紧凑，端到端完成速度更快）",
      primaryRole: "企业级生产主力 & 结构化分析专家",
      whyElement:
        "氖气（Neon）是轻质惰性气体，通电即能发出清晰、高穿透力的光芒。Gemini 4 Neon（#10）由旗舰 Carbon 针对效率优化而来，处在「成本-速度-智力」的帕累托最优前沿——以更少的冗余输出 Token 快速点亮复杂工程与分析任务。",
      bestFor: [
        "追求端到端交付效率的复杂软件工程与生产环境业务开发",
        "财务建模、电子表格处理、法律检索与结构化企业数据分析",
        "需要高可控性（Steerability）、支持中途随时纠偏的交互式工作流",
        "要求低编造率（Low Fabrication）且回答干净利落的生产级应用"
      ],
      whenToSwitch:
        "需要极深度的发散性架构推演时可切换至 Argon（#18）或 Carbon（#6）；需要大规模并发执行低成本简单工具循环时可切换至 Hydrogen（#1）。",
      pairingTip:
        "Neon（#10 氖）是构建面向用户的交互式编程助手或企业自动化流水线时的性价比首选，兼具高准确率与干脆的响应节奏。"
    }
  },
  1: {
    atomicNumber: 1,
    symbol: "H",
    id: "hydrogen",
    colorTheme: "cyan", // Electric Cyan / Blue glow
    accentHex: "#06b6d4",
    capabilityRank: 4,
    rankBadge: "#4 Fast Agentic Executor",
    rankBadgeZh: "#4 极速智能体执行器",
    workloads: ["fast", "pair"],
    thinkingLevels: ["low", "medium", "high", "xhigh"],
    defaultThinking: "low",
    contextWindow: "1M Tokens (Flat-Rate)",
    modalities: ["Text", "Code", "Images", "Audio", "Video"],
    modalitiesZh: ["文本", "代码", "图像", "音频", "视频"],
    metrics: {
      reasoning: 82,
      coding: 89,
      speed: 99,
      efficiency: 98,
      steerability: 91
    },
    en: {
      modelName: "Gemini 4 Hydrogen",
      elementName: "Hydrogen",
      tierName: "Fast, Cost-Efficient Agentic Executor",
      shortTagline: "Distilled from Carbon for high-velocity execution loops, tool calling, and scale",
      legacyEquivalent: "Flash / Flash-Lite Successor",
      tokenSpend: "Ultra-Low Cost (Flat-rate pricing across the entire 1M context window)",
      primaryRole: "High-Speed Agentic Executor & Subagent Worker",
      whyElement:
        "Hydrogen (#1) is the lightest, fastest-moving, and most abundant element in the universe—and high-energy rocket fuel. Distilled from Carbon, Gemini 4 Hydrogen powers rapid execution loops, background workers, and high-frequency coding edits, while offering an exclusive 'xhigh' thinking mode when extra punch is needed.",
      bestFor: [
        "Rapid agentic tool-calling loops: editing files, running tests, and grepping codebases",
        "Parallel subagent fan-out tasks where dozens of workers run simultaneously",
        "Everyday coding, UI prototyping, summarization, and free-tier API workloads",
        "Scale-up reasoning on demand using its 4 thinking levels (low, medium, high, and exclusive xhigh)"
      ],
      whenToSwitch:
        "When a task requires holistic system redesign or subtle multi-file architectural trade-offs, escalate to Carbon (#6) or Argon (#18) instead of burning excessive retries.",
      pairingTip:
        "The ultimate Executor: spawn multiple Hydrogen (#1) workers under a Carbon (#6) or Argon (#18) coordinator to parallelize codebase exploration and test fixing at minimal cost."
    },
    zh: {
      modelName: "Gemini 4 Hydrogen",
      elementName: "氢 (Hydrogen)",
      tierName: "极速高性价比智能体执行模型",
      shortTagline: "由 Carbon 蒸馏而来的极速推进燃料，专为高频工具调用与并发执行循环打造",
      legacyEquivalent: "Flash / 高速智能体梯队（Flash 继任者）",
      tokenSpend: "极低成本（100 万上下文窗口内采用平坦化定价）",
      primaryRole: "高速智能体执行器（Executor）& 并发子智能体",
      whyElement:
        "氢（Hydrogen，#1）是宇宙中最轻、运动最快、含量最丰富的元素，也是高能火箭推进燃料。由 Carbon 蒸馏而来的 Gemini 4 Hydrogen 专为高速执行循环而生，不仅在 low 模式下响应如闪电，还独占了 xhigh 四档思考预算，必要时可爆发超强单点突破力。",
      bestFor: [
        "高频智能体工具调用循环：批量读写代码、运行终端测试、全文检索",
        "大规模并发子智能体（Subagents / Workflows）扇出任务",
        "日常敏捷编程、前端原型构建、文档摘要及免费/高并发 API 场景",
        "通过 low / medium / high / 独占 xhigh 四档思考预算按需弹性缩放算力"
      ],
      whenToSwitch:
        "当任务涉及复杂的全局架构权衡或多模块长链条推演时，请交由 Carbon（#6 碳）或 Argon（#18 氩）先行规划，避免在执行层反复试错。",
      pairingTip:
        "最佳执行拍档：在 Carbon（#6）或 Argon（#18）主控下并发启动多个 Hydrogen（#1）子智能体，以极低成本和超高并发完成代码探索与自动化修复。"
    }
  }
};

// Capability rank order (Heaviest reasoning -> Fastest executor)
window.CAPABILITY_ORDER = [6, 18, 10, 1];

// Compact 118 Elements definition: [atomicNumber, symbol, enName, zhName, group(1-18), period(1-7, or 8 for Lanthanides row, 9 for Actinides row)]
window.ALL_ELEMENTS = [
  [1, "H", "Hydrogen", "氢", 1, 1],
  [2, "He", "Helium", "氦", 18, 1],
  [3, "Li", "Lithium", "锂", 1, 2],
  [4, "Be", "Beryllium", "铍", 2, 2],
  [5, "B", "Boron", "硼", 13, 2],
  [6, "C", "Carbon", "碳", 14, 2],
  [7, "N", "Nitrogen", "氮", 15, 2],
  [8, "O", "Oxygen", "氧", 16, 2],
  [9, "F", "Fluorine", "氟", 17, 2],
  [10, "Ne", "Neon", "氖", 18, 2],
  [11, "Na", "Sodium", "钠", 1, 3],
  [12, "Mg", "Magnesium", "镁", 2, 3],
  [13, "Al", "Aluminium", "铝", 13, 3],
  [14, "Si", "Silicon", "硅", 14, 3],
  [15, "P", "Phosphorus", "磷", 15, 3],
  [16, "S", "Sulfur", "硫", 16, 3],
  [17, "Cl", "Chlorine", "氯", 17, 3],
  [18, "Ar", "Argon", "氩", 18, 3],
  [19, "K", "Potassium", "钾", 1, 4],
  [20, "Ca", "Calcium", "钙", 2, 4],
  [21, "Sc", "Scandium", "钪", 3, 4],
  [22, "Ti", "Titanium", "钛", 4, 4],
  [23, "V", "Vanadium", "钒", 5, 4],
  [24, "Cr", "Chromium", "铬", 6, 4],
  [25, "Mn", "Manganese", "锰", 7, 4],
  [26, "Fe", "Iron", "铁", 8, 4],
  [27, "Co", "Cobalt", "钴", 9, 4],
  [28, "Ni", "Nickel", "镍", 10, 4],
  [29, "Cu", "Copper", "铜", 11, 4],
  [30, "Zn", "Zinc", "锌", 12, 4],
  [31, "Ga", "Gallium", "镓", 13, 4],
  [32, "Ge", "Germanium", "锗", 14, 4],
  [33, "As", "Arsenic", "砷", 15, 4],
  [34, "Se", "Selenium", "硒", 16, 4],
  [35, "Br", "Bromine", "溴", 17, 4],
  [36, "Kr", "Krypton", "氪", 18, 4],
  [37, "Rb", "Rubidium", "铷", 1, 5],
  [38, "Sr", "Strontium", "锶", 2, 5],
  [39, "Y", "Yttrium", "钇", 3, 5],
  [40, "Zr", "Zirconium", "锆", 4, 5],
  [41, "Nb", "Niobium", "铌", 5, 5],
  [42, "Mo", "Molybdenum", "钼", 6, 5],
  [43, "Tc", "Technetium", "锝", 7, 5],
  [44, "Ru", "Ruthenium", "钌", 8, 5],
  [45, "Rh", "Rhodium", "铑", 9, 5],
  [46, "Pd", "Palladium", "钯", 10, 5],
  [47, "Ag", "Silver", "银", 11, 5],
  [48, "Cd", "Cadmium", "镉", 12, 5],
  [49, "In", "Indium", "铟", 13, 5],
  [50, "Sn", "Tin", "锡", 14, 5],
  [51, "Sb", "Antimony", "锑", 15, 5],
  [52, "Te", "Tellurium", "碲", 16, 5],
  [53, "I", "Iodine", "碘", 17, 5],
  [54, "Xe", "Xenon", "氙", 18, 5],
  [55, "Cs", "Caesium", "铯", 1, 6],
  [56, "Ba", "Barium", "钡", 2, 6],
  // 57-71 placed in Lanthanide row (period 8, cols 4-18)
  [57, "La", "Lanthanum", "镧", 4, 8],
  [58, "Ce", "Cerium", "铈", 5, 8],
  [59, "Pr", "Praseodymium", "镨", 6, 8],
  [60, "Nd", "Neodymium", "钕", 7, 8],
  [61, "Pm", "Promethium", "钷", 8, 8],
  [62, "Sm", "Samarium", "钐", 9, 8],
  [63, "Eu", "Europium", "铕", 10, 8],
  [64, "Gd", "Gadolinium", "钆", 11, 8],
  [65, "Tb", "Terbium", "铽", 12, 8],
  [66, "Dy", "Dysprosium", "镝", 13, 8],
  [67, "Ho", "Holmium", "钬", 14, 8],
  [68, "Er", "Erbium", "铒", 15, 8],
  [69, "Tm", "Thulium", "铥", 16, 8],
  [70, "Yb", "Ytterbium", "镱", 17, 8],
  [71, "Lu", "Lutetium", "镥", 18, 8],
  [72, "Hf", "Hafnium", "铪", 4, 6],
  [73, "Ta", "Tantalum", "钽", 5, 6],
  [74, "W", "Tungsten", "钨", 6, 6],
  [75, "Re", "Rhenium", "铼", 7, 6],
  [76, "Os", "Osmium", "锇", 8, 6],
  [77, "Ir", "Iridium", "铱", 9, 6],
  [78, "Pt", "Platinum", "铂", 10, 6],
  [79, "Au", "Gold", "金", 11, 6],
  [80, "Hg", "Mercury", "汞", 12, 6],
  [81, "Tl", "Thallium", "铊", 13, 6],
  [82, "Pb", "Lead", "铅", 14, 6],
  [83, "Bi", "Bismuth", "铋", 15, 6],
  [84, "Po", "Polonium", "钋", 16, 6],
  [85, "At", "Astatine", "砹", 17, 6],
  [86, "Rn", "Radon", "氡", 18, 6],
  [87, "Fr", "Francium", "钫", 1, 7],
  [88, "Ra", "Radium", "镭", 2, 7],
  // 89-103 placed in Actinide row (period 9, cols 4-18)
  [89, "Ac", "Actinium", "锕", 4, 9],
  [90, "Th", "Thorium", "钍", 5, 9],
  [91, "Pa", "Protactinium", "镤", 6, 9],
  [92, "U", "Uranium", "铀", 7, 9],
  [93, "Np", "Neptunium", "镎", 8, 9],
  [94, "Pu", "Plutonium", "钚", 9, 9],
  [95, "Am", "Americium", "镅", 10, 9],
  [96, "Cm", "Curium", "锔", 11, 9],
  [97, "Bk", "Berkelium", "锫", 12, 9],
  [98, "Cf", "Californium", "锎", 13, 9],
  [99, "Es", "Einsteinium", "锿", 14, 9],
  [100, "Fm", "Fermium", "镄", 15, 9],
  [101, "Md", "Mendelevium", "钔", 16, 9],
  [102, "No", "Nobelium", "锘", 17, 9],
  [103, "Lr", "Lawrencium", "铹", 18, 9],
  [104, "Rf", "Rutherfordium", "𬬻", 4, 7],
  [105, "Db", "Dubnium", "𬭊", 5, 7],
  [106, "Sg", "Seaborgium", "𬭳", 6, 7],
  [107, "Bh", "Bohrium", "𬭛", 7, 7],
  [108, "Hs", "Hassium", "𬭶", 8, 7],
  [109, "Mt", "Meitnerium", "鿏", 9, 7],
  [110, "Ds", "Darmstadtium", "𫟼", 10, 7],
  [111, "Rg", "Roentgenium", "𬬭", 11, 7],
  [112, "Cn", "Copernicium", "鿔", 12, 7],
  [113, "Nh", "Nihonium", "鿭", 13, 7],
  [114, "Fl", "Flerovium", "𫓧", 14, 7],
  [115, "Mc", "Moscovium", "镆", 15, 7],
  [116, "Lv", "Livermorium", "𫟷", 16, 7],
  [117, "Ts", "Tennessine", "鿬", 17, 7],
  [118, "Og", "Oganesson", "鿫", 18, 7]
];
