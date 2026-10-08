// Content model for the course-framing prototype.
// Module and lesson structure mirrors the Pinecone Mighty Networks collection
// "Personal Finance For You" (5 modules). The Investing module has the real
// lesson and part titles; the other modules carry placeholder parts.

export const decisions = [
  {
    slug: "first-car",
    title: "Buying your first car",
    blurb: "Loans, leases, and what a monthly payment really costs you.",
    module: "saving-borrowing",
    lesson: "borrowing-basics",
    color: "sun",
    icon: "car",
  },
  {
    slug: "start-investing",
    title: "How to start investing",
    blurb: "Stocks, bonds, funds, and how to spread your risk.",
    module: "investing",
    lesson: "investing-basics",
    color: "teal",
    icon: "chart",
  },
  {
    slug: "student-loans",
    title: "Paying student loans",
    blurb: "Repayment options and how interest works against you.",
    module: "saving-borrowing",
    lesson: "borrowing-basics",
    color: "plum",
    icon: "cap",
  },
  {
    slug: "emergency-fund",
    title: "Building an emergency fund",
    blurb: "How much to keep aside, where to keep it, and how to start.",
    module: "budgeting",
    lesson: "track-your-money",
    color: "moss",
    icon: "shield",
  },
];

const part = (title, type = "read") => ({ title, type });

export const modules = [
  {
    slug: "financial-freedom",
    number: 1,
    minutes: 20,
    lessonCount: 4,
    topic: "Getting started",
    title: "Your Journey to Financial Freedom",
    blurb: "Understand common financial challenges, and learn about how compound interest and inflation change what your money is worth over time.",
    color: "sky",
    icon: "plane",
    lessons: [
      {
        slug: "getting-started",
        title: "Lesson 1: Getting Started",
        parts: [
          part("Your financial selfie"),
          part("The Big Three questions", "quiz"),
          part("Alex: Where am I starting from?", "video"),
          part("Lesson 1 Checkpoint", "quiz"),
        ],
      },
    ],
  },
  {
    slug: "budgeting",
    number: 2,
    minutes: 18,
    lessonCount: 5,
    topic: "Budgeting",
    title: "Budgeting and Money Management",
    blurb: "Track your money, build a budget you will actually keep, and set aside a cushion.",
    color: "moss",
    icon: "list",
    lessons: [
      {
        slug: "track-your-money",
        title: "Lesson 1: Track Your Money",
        parts: [
          part("Where does your money go?"),
          part("Needs, wants, and everything in between"),
          part("Jasmine: The $4,000 credit card statement", "video"),
          part("Building an emergency fund"),
          part("Lesson 1 Checkpoint", "quiz"),
        ],
      },
    ],
  },
  {
    slug: "saving-borrowing",
    number: 3,
    minutes: 25,
    lessonCount: 4,
    topic: "Saving & borrowing",
    title: "Saving and Borrowing Decisions",
    blurb: "Interest, loans, credit, and how to tell a good deal from a costly one.",
    color: "sun",
    icon: "bars",
    lessons: [
      {
        slug: "borrowing-basics",
        title: "Lesson 1: Borrowing Basics",
        parts: [
          part("How interest works"),
          part("Alex: Buying his first car", "video"),
          part("Auto loans vs. leasing"),
          part("Student loan repayment options"),
          part("Lesson 1 Checkpoint", "quiz"),
        ],
      },
    ],
  },
  {
    slug: "investing",
    number: 4,
    minutes: 28,
    lessonCount: 4,
    topic: "Investing",
    title: "Investing for the Future",
    blurb: "Stocks, bonds, funds, and workplace accounts: how to put money to work over time.",
    color: "teal",
    icon: "chart",
    lessons: [
      {
        slug: "investing-basics",
        title: "Lesson 1: Investing Basics",
        parts: [
          part("What Are Your Investment Goals?"),
          part("Introduction to Stocks"),
          part("A Piece of the Pine-Apple Pie"),
          part("Introduction to Bonds"),
          part("The Biggest Bond Issuer: The Government"),
          part("Grace Buys a Corporate Bond"),
          part("Risk Diversification"),
          part("Alex: “Investment Jenga” (Diversification)", "video"),
          part("Sam’s Diversification Strategy"),
          part("Portfolio Allocation I"),
          part("Podcast: Wilderness vs. Wall Street: Surviving Investment", "podcast"),
          part("Lesson 1 Checkpoint", "quiz"),
          part("Where to Next?"),
        ],
      },
      {
        slug: "mutual-funds-etfs",
        title: "Lesson 2: Mutual Funds and ETFs",
        parts: [
          part("What is a Mutual Fund?"),
          part("What is an ETF?"),
          part("Jasmine: Let Your Money Work While You Chill", "video"),
          part("Active vs. Passive Investing"),
          part("Fees Matter More Than You Think"),
          part("Mutual Funds, ETFs, and Diversification"),
          part("Money Market Funds"),
          part("Portfolio Allocation II"),
          part("Lesson 2 Checkpoint", "quiz"),
        ],
      },
      {
        slug: "workplace-investing",
        title: "Lesson 3: Workplace Investing and Tax-Advantaged Saving",
        parts: [
          part("What is a 401(k)?"),
          part("Employer matching"),
          part("Traditional vs. Roth"),
          part("IRAs"),
          part("Vesting and job changes"),
          part("Lesson 3 Checkpoint", "quiz"),
        ],
      },
      {
        slug: "alternative-investments",
        title: "Lesson 4: Alternative Investments",
        parts: [
          part("Real estate"),
          part("Crypto: what you should know first"),
          part("Collectibles and other assets"),
          part("Lesson 4 Checkpoint", "quiz"),
        ],
      },
    ],
  },
  {
    slug: "retirement",
    number: 5,
    minutes: 22,
    lessonCount: 1,
    topic: "Retirement",
    title: "Planning For Retirement",
    blurb: "Why starting early matters more than how much you start with.",
    color: "plum",
    icon: "calendar",
    lessons: [
      {
        slug: "retirement-basics",
        title: "Lesson 1: Retirement Basics",
        parts: [
          part("The power of starting early"),
          part("Social Security in plain terms"),
          part("Sam: Planning 40 years out", "video"),
          part("Lesson 1 Checkpoint", "quiz"),
        ],
      },
    ],
  },
];

export const topics = ["All", ...modules.map((m) => m.topic)];

export function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[‘’'"“”:?()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getModule(slug) {
  return modules.find((m) => m.slug === slug);
}

export function getLesson(moduleSlug, lessonSlug) {
  const m = getModule(moduleSlug);
  return m?.lessons.find((l) => l.slug === lessonSlug);
}

export function moduleStats(m) {
  const parts = m.lessons.reduce((n, l) => n + l.parts.length, 0);
  const quizzes = m.lessons.reduce(
    (n, l) => n + l.parts.filter((p) => p.type === "quiz").length,
    0
  );
  const minutes = m.minutes || Math.round(parts * 4);
  return { lessons: m.lessonCount || m.lessons.length, parts, quizzes, minutes };
}

// Sample lesson body: the real "What is a Mutual Fund?" part, reproduced in
// the same read-only article format the prototype uses for every part.
export const sampleBody = {
  "what-is-a-mutual-fund": [
    { type: "p", html: "A <strong>mutual fund</strong> is an investment fund that collects money from many investors and uses those funds to buy a portfolio of <strong>stocks, bonds, or other assets</strong>. When you buy shares of a mutual fund, you own a <strong>small piece of everything the fund holds</strong>." },
    { type: "figure", caption: "One share of the fund gives you a slice of the whole pie." },
    { type: "h2", text: "Why people use them" },
    { type: "p", html: "Instead of picking individual companies, you get instant diversification: one purchase spreads your money across dozens or hundreds of holdings. A professional manager (or, for index funds, a fixed rule) decides what goes in the basket." },
    { type: "h2", text: "What to look at before you buy" },
    { type: "ul", items: ["What the fund holds (stocks, bonds, a mix)", "The expense ratio, which is the yearly fee taken out of your return", "Whether it is actively managed or tracks an index", "Any minimum investment"] },
    { type: "callout", title: "Key idea", html: "Fees compound just like returns do. A 1% difference in fees can mean a noticeably smaller balance after 30 years." },
  ],
};
