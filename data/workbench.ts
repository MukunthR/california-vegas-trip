import {
  Activity,
  BarChart3,
  Blocks,
  Brain,
  FileCheck2,
  Globe2,
  Home,
  Megaphone,
  Microscope,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type NavModule = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export type BriefingItem = {
  title: string;
  badge: string;
  body: string;
  color: "blue" | "purple" | "green" | "red";
};

export type Insight = {
  label: string;
  status: string;
  metric: string;
  delta: string;
  deltaPositive: boolean;
  title: string;
  body: string;
  action: string;
  chartColor: string;
  chart: Array<{ label: string; value: number }>;
  kind: "line" | "bar";
};

export type WorkItem = {
  icon: string;
  title: string;
  tags: string[];
  owner: string;
  due: string;
  blocked?: number;
};

export type WorkColumn = {
  title: string;
  items: WorkItem[];
};

export type Signal = {
  title: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  body: string;
  action: string;
  source: string;
  time: string;
};

export type BrandContextDetail = {
  strategicPriorities: string[];
  preferredMetrics: string[];
  brandAspiration: string;
  businessContext: string;
  personalContext: Array<{
    title: string;
    items: string[];
  }>;
  groundingFlow: Array<{
    title: string;
    body: string;
  }>;
};

export const modules: NavModule[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "research", label: "Market Research", icon: Microscope },
  { id: "content", label: "Content Catalyst", icon: Sparkles },
  { id: "review", label: "Content Review", icon: FileCheck2 },
  { id: "geo", label: "GEO", icon: Globe2 },
  { id: "imx", label: "IMx", icon: BarChart3 },
];

export const brands = ["DARZALEX", "RYBREVANT", "ERLEADA", "INLEXZO"];

export const personas = [
  { label: "Director of Marketing", short: "DOM" },
  { label: "Product Manager", short: "PM" },
  { label: "SIA Lead", short: "SIA" },
  { label: "NALT", short: "NALT" },
];

export const dailyBriefing: BriefingItem[] = [
  {
    title: "NTS Performance",
    badge: "W13 - +$4.3MM",
    color: "blue",
    body: "$92.8MM YTD at 104.9% attainment. FASPRO SC driving 1L momentum at Academic centres. Highest NPS in portfolio at +18. Community gap of 18% is the primary H2 opportunity.",
  },
  {
    title: "Biosimilar Defence Window",
    badge: "H1 2027 entry",
    color: "purple",
    body: "Amgen & Pfizer biosimilar approvals projected H1 2027. 12-month window to consolidate SC adoption, deepen community hematologist loyalty, and lock specialty pharmacy preferred status.",
  },
  {
    title: "SC Conversion & KOL",
    badge: "$6MM upside",
    color: "green",
    body: "28% of patients still on IV. SC conversion adds $6MM NTS annually. 18 KOL advocates with NPS >50 identified for Q3 congress programme. Both programmes pending PM approval.",
  },
  {
    title: "Pending Approvals",
    badge: "3 items",
    color: "red",
    body: "PM approval required: DARZALEX SC Conversion HCP brief, KOL congress engagement programme brief, and Midwest community coverage activation plan. Review to unblock before H2 lock.",
  },
];

export const brandContext = [
  "Win 1st Line NSCLC with RYBREVANT",
  "Protect ERLEADA NTS through affordability",
  "Accelerate DARZALEX SC conversion",
];

export const brandContextDetail: BrandContextDetail = {
  strategicPriorities: [
    "Win 1st Line NSCLC with RYBREVANT",
    "Protect ERLEADA NTS through affordability intervention",
  ],
  preferredMetrics: [
    "TRx Volume",
    "NTS ($)",
    "NRx Share",
    "HCP Reach",
    "FEA Rate",
    "Call Quality",
    "Market Share",
    "NPS",
    "Fill Rate",
    "Channel mROI",
  ],
  brandAspiration:
    "Become the undisputed #1 in 1st Line NSCLC by Q4 2026.",
  businessContext:
    "FASPRO launch has accelerated Academic adoption. Key vulnerability: LAZCLUSE call quality and ERLEADA affordability barriers.",
  personalContext: [
    {
      title: "Working Style",
      items: [
        "Prefers executive-level framing",
        "Focuses on NTS variance first",
        "Acts on signal, not just data",
      ],
    },
    {
      title: "Decision Patterns",
      items: [
        "Approves when confidence >85%",
        "Requests field validation first",
        "Prefers phased rollouts",
      ],
    },
    {
      title: "Frequently Asked",
      items: [
        '"What needs my attention today?"',
        '"Show me NTS vs plan by brand"',
        '"What is the ERLEADA recovery path?"',
      ],
    },
  ],
  groundingFlow: [
    {
      title: "Every Interaction",
      body: "Queries, approvals, decisions",
    },
    {
      title: "Personal Context",
      body: "Personalises your AI responses",
    },
    {
      title: "Organisational Knowledge",
      body: "Builds J&J's brand intelligence layer",
    },
  ],
};

export const insightCards: Insight[] = [
  {
    label: "NTS $MM",
    status: "On track",
    metric: "$92.8MM",
    delta: "+$4.3MM vs BP",
    deltaPositive: true,
    title: "NTS at $92.8MM - 104.9% attainment driven by FASPRO 1L adoption",
    body: "DARZALEX outperforming BP by $4.3MM driven by FASPRO subcutaneous launches accelerating 1L starts. New patient initiation is up 12% WoW at Academic centres.",
    action: "View performance drilldown",
    chartColor: "#7c3aed",
    kind: "line",
    chart: [
      { label: "W8", value: 78 },
      { label: "W9", value: 82 },
      { label: "W10", value: 85 },
      { label: "W11", value: 87 },
      { label: "W12", value: 91 },
      { label: "W13", value: 93 },
    ],
  },
  {
    label: "SC Adoption %",
    status: "Opportunity",
    metric: "72%",
    delta: "+17 pts since Q2 24",
    deltaPositive: true,
    title: "SC conversion accelerating - target 85% by Q3 to lock in biosimilar defence",
    body: "FASPRO SC adoption rose from 55% in Q2 2024 to 72% in Q1 2026. Conversion of concentrated IV accounts adds $6MM NTS annually.",
    action: "Launch SC conversion programme",
    chartColor: "#16a34a",
    kind: "line",
    chart: [
      { label: "Q2 24", value: 55 },
      { label: "Q3 24", value: 60 },
      { label: "Q4 24", value: 64 },
      { label: "Q1 25", value: 68 },
      { label: "Q2 25", value: 70 },
      { label: "Q1 26", value: 72 },
    ],
  },
  {
    label: "Uptake Index",
    status: "Needs attention",
    metric: "-18%",
    delta: "vs Academic avg",
    deltaPositive: false,
    title: "Community hematologist gap - 18% lower uptake vs Academic despite same patient pool",
    body: "DARZALEX uptake in community hematology is below Academic average. 340 community accounts in Midwest and Southeast have fewer than two Q1 contacts.",
    action: "Map community coverage gaps",
    chartColor: "#ea580c",
    kind: "bar",
    chart: [
      { label: "NE Community", value: 88 },
      { label: "MW Community", value: 62 },
      { label: "SE Community", value: 72 },
    ],
  },
  {
    label: "KOL NPS Score",
    status: "Opportunity",
    metric: "18 KOLs",
    delta: "NPS >50",
    deltaPositive: true,
    title: "KOL advocacy pipeline - 18 champions with NPS >50 identified for Q3 congresses",
    body: "Q3 has 3 major congress opportunities for abstracts, symposia, and advisory boards. KOL engagement historically drives 8-12% HCP NPS lift.",
    action: "Build KOL programme",
    chartColor: "#8b5cf6",
    kind: "bar",
    chart: [
      { label: "Tier 1A", value: 76 },
      { label: "Tier 1B", value: 70 },
      { label: "Tier 2A", value: 48 },
      { label: "Emerging", value: 34 },
    ],
  },
  {
    label: "Fill Rate %",
    status: "On track",
    metric: "91%",
    delta: "Portfolio best",
    deltaPositive: true,
    title: "91% fill rate - portfolio leader, but biosimilar pressure could erode pull-through",
    body: "Hub services are performing well. Historical oncology biosimilar launches show fill-rate drops of 8-15 pts as specialty pharmacies adjust formulary preference.",
    action: "View access defence plan",
    chartColor: "#0ea5e9",
    kind: "line",
    chart: [
      { label: "Q3 24", value: 86 },
      { label: "Q4 24", value: 88 },
      { label: "Q1 25", value: 90 },
      { label: "Q2 25", value: 91 },
      { label: "W8", value: 90 },
      { label: "W13", value: 91 },
    ],
  },
  {
    label: "Share at Relapse %",
    status: "Needs attention",
    metric: "14% leakage",
    delta: "to isatuximab",
    deltaPositive: false,
    title: "RRMM patient flow leakage - 14% switching to isatuximab at 2nd relapse",
    body: "DARZALEX maintains 42% 1L share but loses patients at 2nd relapse. Field messaging needs sharper OS advantage differentiation in RRMM.",
    action: "Review RRMM strategy",
    chartColor: "#dc2626",
    kind: "bar",
    chart: [
      { label: "1L Start", value: 42 },
      { label: "1st Relapse", value: 36 },
      { label: "2nd Relapse", value: 28 },
      { label: "3rd Relapse", value: 21 },
    ],
  },
];

export const workColumns: WorkColumn[] = [
  {
    title: "Planning",
    items: [
      {
        icon: "chart",
        title: "DARZALEX Biosimilar Defence Playbook",
        tags: ["DARZALEX", "Biosimilar", "Strategic"],
        owner: "Strategy Team",
        due: "Jun 28",
      },
      {
        icon: "campaign",
        title: "DARZALEX KOL Congress Programme - ASH / EHA",
        tags: ["DARZALEX", "Congress", "Q3"],
        owner: "Medical Affairs",
        due: "Jul 1",
      },
    ],
  },
  {
    title: "In Progress",
    items: [
      {
        icon: "campaign",
        title: "DARZALEX SC Conversion Account Programme",
        tags: ["DARZALEX", "SC", "Biosimilar Defence"],
        owner: "Mukunth R.",
        due: "Jun 20",
        blocked: 1,
      },
      {
        icon: "campaign",
        title: "DARZALEX Midwest Community Coverage Activation",
        tags: ["DARZALEX", "Community", "Field Team"],
        owner: "Field Team",
        due: "Jun 25",
      },
    ],
  },
  {
    title: "MLR Review",
    items: [
      {
        icon: "doc",
        title: "DARZALEX SC Conversion HCP Brief",
        tags: ["DARZALEX", "SC"],
        owner: "Diana Prince",
        due: "Jun 12",
      },
      {
        icon: "doc",
        title: "DARZALEX RRMM Detail Aid - Competitive Messaging",
        tags: ["DARZALEX", "RRMM", "Field"],
        owner: "Content Team",
        due: "Jun 16",
      },
    ],
  },
  {
    title: "Approved",
    items: [
      {
        icon: "research",
        title: "DARZALEX RRMM Patient Flow Analysis",
        tags: ["DARZALEX", "RRMM", "Analytics"],
        owner: "Analytics",
        due: "Jun 18",
      },
    ],
  },
  {
    title: "Live",
    items: [
      {
        icon: "campaign",
        title: "DARZALEX Q2 HCP Launch Campaign",
        tags: ["DARZALEX", "Launch"],
        owner: "Sarah Kim",
        due: "Jun 15",
      },
      {
        icon: "chart",
        title: "DARZALEX Community Coverage Plan - Delivered",
        tags: ["DARZALEX", "Analytics"],
        owner: "Ops Team",
        due: "Jun 10",
      },
    ],
  },
];

export const prioritySignals: Signal[] = [
  {
    title: "Biosimilar entry projected H1 2027 - 12-month share consolidation window open now",
    severity: "HIGH",
    body: "Amgen and Pfizer daratumumab biosimilars are projected for FDA approval H1 2027. Historical data shows 25-35% branded share erosion within 18 months of biosimilar launch.",
    action: "Launch biosimilar defence plan",
    source: "Market Intelligence + FDA pipeline",
    time: "1h ago",
  },
  {
    title: "RRMM patient leakage - 14% switching to isatuximab at 2nd relapse",
    severity: "HIGH",
    body: "Isatuximab detailing frequency is 2.3x higher than DARZALEX in the RRMM setting. Each 1% leakage reduction equals $2.1MM annual NTS.",
    action: "Deploy RRMM detail aid",
    source: "Rx Claims + Field Reports + IQVIA",
    time: "2h ago",
  },
  {
    title: "IDN P&T committees meeting in July - 3-week window to influence formulary position",
    severity: "HIGH",
    body: "6 major IDN hematology accounts have P&T committee formulary reviews scheduled in July 2026 and represent 8% of national volume.",
    action: "Prepare P&T economic brief",
    source: "CRM + Formulary Intelligence",
    time: "3h ago",
  },
  {
    title: "SC conversion at 72% - 28% of patients still on 3-hour IV infusion",
    severity: "MEDIUM",
    body: "SC conversion to FASPRO is associated with higher refill rates, better patient satisfaction, and $6MM incremental NTS potential annually.",
    action: "Deploy SC conversion programme",
    source: "Specialty Pharmacy + Patient Hub",
    time: "4h ago",
  },
  {
    title: "Community hematologists under-penetrated - 340 accounts below target call frequency",
    severity: "MEDIUM",
    body: "Community channel represents 38% of total MM prescriptions. Midwest and Southeast coverage gaps are worth roughly $5MM annual NTS.",
    action: "Activate community coverage plan",
    source: "CRM + IQVIA + Field Reports",
    time: "5h ago",
  },
];

export const quickPrompts = [
  "Give me a DARZALEX strategic view: TRx vs plan, segment performance, and investment efficiency.",
  "Generate a recovery campaign for underperforming community accounts and queue for review.",
  "Which decisions require my authority this week on brand strategy or investment mix?",
  "Show me GEO brand presence trends and competitive share of voice.",
];

export const agentChips = [
  { label: "I2I Orchestrator", icon: Brain, color: "text-purple-700 bg-purple-50" },
  { label: "Content Catalyst", icon: Sparkles, color: "text-indigo-700 bg-indigo-50" },
  { label: "Pre-MLR Agent", icon: ShieldCheck, color: "text-red-700 bg-red-50" },
  { label: "IMx Analytics", icon: Activity, color: "text-amber-700 bg-amber-50" },
  { label: "GEO Signals", icon: Blocks, color: "text-emerald-700 bg-emerald-50" },
  { label: "Campaign Ops", icon: Megaphone, color: "text-sky-700 bg-sky-50" },
];
