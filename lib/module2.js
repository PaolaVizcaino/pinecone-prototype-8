// Module 2 "Budgeting and Money Management" as it appears in the Pinecone app
// (Revised space, Mighty Networks). Lesson 3 is open; only two parts are clickable.

export const module2 = {
  slug: "budgeting",
  number: 2,
  title: "Budgeting and Money Management",
  subtitle: "Track your money",
  lessons: [
    {
      title: "Lesson 1: The Balance Sheet",
      collapsed: true,
      parts: [
        { title: "The Balance Sheet: Understanding Your Financial Snapshot", type: "read" },
        { title: "How to Create a Balance Sheet", type: "read" },
        { title: "Jasmine’s Balance Sheet", type: "video" },
        { title: "Lesson 1 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
      ],
    },
    {
      title: "Lesson 2: The Cash Flow Statement",
      collapsed: true,
      parts: [
        { title: "The Cash Flow Statement: Tracking How Your Money Moves", type: "read" },
        { title: "Breaking Down Cash Inflows and Outflows", type: "read" },
        { title: "A Closer Look at Outflows", type: "read" },
        { title: "Net Cash Flow: The Bottom Line", type: "read" },
        { title: "Calculating Alex's Net Cash Flow", type: "video" },
        { title: "Lesson 2 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
      ],
    },
    {
      title: "Lesson 3: The Budget",
      parts: [
        { title: "Steps to Developing a Budget", type: "read", slug: "steps", thumb: "/thumb-steps.jpg" },
        { title: "Grace Builds a Budget", type: "video", slug: "grace", thumb: "/thumb-grace.jpg" },
        { title: "Podcast: Budget Like a Boss — Without Killing Your Vibe", type: "read", thumb: "/thumb-podcast.jpg" },
        { title: "Alex Builds a Budget", type: "video", thumb: "/thumb-alex.jpg" },
        { title: "Setting a Savings Objective", type: "read", thumb: "/thumb-savings.jpg" },
        { title: "Lesson 3 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
      ],
    },
  ],
};

export const stepsPart = {
  slug: "steps",
  lesson: "Lesson 3: The Budget",
  title: "Steps to Developing a Budget",
  host: "Pinecone by Stanford",
  prev: { title: "Lesson 3: The Budget" },
  next: { title: "Grace Builds a Budget", href: "/app/budgeting/grace" },
  blocks: [
    { type: "p", html: "Now that you understand how money flows in and out, you can create a budget that works for your lifestyle. You can use the following seven steps:" },
    { type: "ol", items: [
      ["Set Your Financial Goals:", "What do you want your budget to achieve? Clear goals make your plan more effective."],
      ["Estimate Your After-Tax Income:", "Include all sources such as salary, side gigs, and investment income."],
      ["Calculate Fixed and Variable Expenses:", "Rent, insurance, and other recurring costs are fixed expenses. Costs like groceries, dining out, and entertainment are variable expenses. Reviewing past spending helps estimate these amounts."],
      ["Debt Payments:", "Auto loans, student loans, credit card balances, and mortgages. These payments are often fixed amounts."],
      ["Make Room for Precautionary Saving:", "Treat building an emergency fund as a mandatory expense."],
      ["Make Room for Further Saving:", "Contribute toward retirement, education, or other long-term goals."],
      ["Review and Revise:", "At the end of each planning period, whether weekly or monthly, check your progress and adjust. Budgets should evolve with your life."],
    ] },
    { type: "h2", text: "What Makes a Budget Successful?" },
    { type: "p", html: "A budget isn't meant to be restrictive; it should be realistic, flexible, and easy to follow." },
    { type: "p", html: "A strong budget is:" },
    { type: "ul", items: [
      ["Well planned:", "It should account for income, expenses, and savings goals."],
      ["Organized:", "Whether through an app, spreadsheet, or notebook, use a system that works for you."],
      ["Adaptable:", "Life changes, and so should your budget. It’s a guide, not a rigid rulebook."],
    ] },
    { type: "p", html: "Some people prefer a simple mental budget, while others like detailed spreadsheets. The best budget is the one you will actually use." },
    { type: "p", html: "Click below to get the <strong>Pinecone Budget Template</strong> and try it yourself." },
    { type: "file", name: "Pinecone Budget Template .xlsx" },
    { type: "h2", text: "Where Can You Cut Back?" },
    { type: "p", html: "If your cash flow is negative or saving feels impossible, look for areas to reduce spending:" },
    { type: "ul", items: [
      ["Housing:", "Consider getting a roommate, refinancing a loan, or negotiating rent."],
      ["Transportation:", "Use public transit, carpool, or shop for lower insurance."],
      ["Shopping:", "Delay purchases, look for sales, and avoid impulse buys."],
      ["Entertainment:", "Cut subscriptions, limit dining out, or try low-cost hobbies."],
    ] },
    { type: "p", html: "Even small adjustments add up, helping you turn negative cash flow positive and freeing up money for savings or debt reduction." },
    { type: "p", html: "Before we move on, tell us how you budget today. Tap below to answer." },
    { type: "poll", banner: "/poll-budget.png", href: "/app/budgeting/poll", question: "What budgeting tool do you currently use?", options: ["A mental budget", "A budgeting app or software", "Paper or spreadsheet", "I don't use one yet but I want to start"], results: [22, 31, 29, 18] },
  ],
};

export const gracePart = {
  slug: "grace",
  lesson: "Lesson 3: The Budget",
  title: "Grace Builds a Budget",
  host: "Pinecone by Stanford",
  prev: { title: "Steps to Developing a Budget" },
  next: null,
  blocks: [
    { type: "p", html: "<strong>Remember Grace?</strong> Grace is a dental hygienist with a steady income. She wants a budget that reflects her real life and moves her toward her financial goals." },
    { type: "p", html: "<strong>Watch the video</strong> as she walks through the <strong>seven steps to build a budget</strong> that works for her." },
    { type: "video", src: "/grace-budget.mp4", poster: "/grace-poster.jpg", alt: "Grace at her kitchen table building her budget" },
    { type: "p", html: "After watching Grace build her budget, reflect on your own finances:" },
    { type: "ul", items: [
      ["", "What financial goals do you have, and what can you realistically set aside regularly to reach your goals?"],
      ["", "Which of your spending habits support your goals? Are there any that may be getting in the way?"],
      ["", "When do you plan to revisit or revise your budget to help ensure it is working for you?"],
    ] },
  ],
};

// The poll post the banner opens, as it lives in the space's Community feed.
export const budgetPoll = {
  title: "What budgeting tool do you currently use?",
  options: ["A mental budget (I keep track in my head)", "A budgeting app or software", "Paper or spreadsheet (I built my own)", "I don’t use one yet, but I want to start"],
  results: [20, 20, 0, 60],
  voters: [["/av-1.png"], ["/av-2.png"], [], ["/av-3.png", "/host-pinecone.png"]],
  back: "/app/budgeting/steps",
};
