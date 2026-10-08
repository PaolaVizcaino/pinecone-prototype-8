// Module 3 "Saving and Borrowing Decisions" as it appears in the Pinecone app
// (Mighty Networks). Lesson 3 is open; only one part is clickable in this
// prototype: "The Benefits of a High Credit Score".
// Content transcribed from the live Mighty lesson post.

export const module3 = {
  slug: "saving-borrowing",
  number: 3,
  title: "Saving and Borrowing Decisions",
  subtitle: "Make the most of your money",
  lessons: [
    {
      title: "Lesson 1: Saving and the Life-Cycle Model",
      collapsed: true,
      parts: [
        { title: "The Life-Cycle Model: Planning for Stability Over Time", type: "read" },
        { title: "Save for Retirement", type: "read" },
        { title: "Life Is Uncertain: Save for the Unexpected", type: "read" },
        { title: "Sam’s Smooth Money Experiment", type: "video" },
        { title: "Lesson 1 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
        { title: "Where to Next?", type: "read" },
      ],
    },
    {
      title: "Lesson 2: Managing Credit",
      collapsed: true,
      parts: [
        { title: "Why People Borrow (and When It Makes Sense)", type: "read" },
        { title: "What Is Credit and How Does It Work?", type: "read" },
        { title: "Credit Cards: Convenient but Costly", type: "read" },
        { title: "Smarter Credit Card Habits", type: "read" },
        { title: "Podcast: The Minimum Payment Trap", type: "read" },
        { title: "Escaping the Credit Jungle: Paying Down Credit Card Debt", type: "read" },
        { title: "Auto Loans and Installment Borrowing", type: "read" },
        { title: "Sam’s Test Drive Simulator: The Auto Loan Edition", type: "video" },
        { title: "Lesson 2 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
        { title: "Where to Next?", type: "read" },
      ],
    },
    {
      title: "Lesson 3: Maximizing Your Credit Score",
      parts: [
        { title: "Credit Scores: Your Financial Reputation", type: "read" },
        { title: "What Goes Into Your Credit Score?", type: "read" },
        { title: "Jasmine & Sophia’s Credit Score Glow-Up", type: "video" },
        { title: "The Benefits of a High Credit Score", type: "read", slug: "benefits" },
        { title: "Habits That Build (and Hurt) Your Credit Score", type: "read" },
        { title: "Lesson 3 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
        { title: "Where to Next?", type: "read" },
      ],
    },
    {
      title: "Lesson 4: Housing and Mortgages",
      collapsed: true,
      parts: [
        { title: "Housing Matters", type: "read" },
        { title: "What Is a Mortgage and How Does It Work?", type: "read" },
        { title: "How Interest Rates and Credit Scores Affect the Cost of a Mortgage", type: "read" },
        { title: "Sam’s Home-Buying Scenario", type: "video" },
        { title: "Lesson 4 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
        { title: "Where to Next?", type: "read" },
      ],
    },
  ],
};

export const benefitsPart = {
  slug: "benefits",
  lesson: "Lesson 3: Maximizing Your Credit Score",
  title: "The Benefits of a High Credit Score",
  host: "Pinecone by Stanford",
  prev: { title: "Credit Scores: Your Financial Reputation" },
  next: null,
  blocks: [
    { type: "p", html: "A high credit score can make a big difference in your personal finances. A stronger score can help you:" },
    { type: "ul", items: [
      ["Get approved more easily.", "You may not need to apply to as many lenders, which also means fewer hard inquiries on your credit report."],
      ["Qualify for lower interest rates.", "Lenders see you as lower risk, so they charge you less to borrow."],
      ["Save a lot of money over time.", "Even a small difference in interest rates can add up to thousands—or tens of thousands—of dollars over the years."],
    ] },
    { type: "h2", text: "Sam’s $20,000 Car Loan" },
    { type: "p", html: "Remember Sam from the Auto Loan Simulator?" },
    { type: "p", html: "Now imagine Sam takes out a <strong>$20,000 car loan</strong>, and his interest rate depends on his credit score:" },
    { type: "image", src: "/table-car-loan.png", alt: "Sam's $20,000 Car Loan: Fair 10.0% APR $425/mo $25,500 total, Good 6.8% APR $394/mo $23,640 total, Very Good 5.3% APR $380/mo $22,800 total", fit: "card" },
    { type: "p", html: "<strong>Sam saves $45 per month</strong> with a very good credit score compared to a fair one. Over <strong>5 years (60 payments)</strong>, that adds up to <strong>about $2,700 saved</strong> on the exact same car—money that stays with Sam instead of going to interest." },
    { type: "p", html: "Same car. Same 5-year term. Just a stronger credit score." },
    { type: "image", src: "/credit-score-sam-car.jpg", alt: "Illustration: Sam holding his new car keys and paperwork outside the dealership, with a thought bubble reading Saved $45/month and a note showing 5-year savings of $2,700", fit: "photo" },
    { type: "h2", text: "What this means for your wallet" },
    { type: "p", html: "Your credit score quietly shapes many big financial moments—renting an apartment, buying a car, getting good terms on a mortgage, and sometimes even passing certain background checks. Treat it as an asset and make it a goal to keep your score as strong as possible." },
    { type: "p", html: "Before you move on, take a second to notice what actually motivates you here. For you personally, what’s the biggest reason to care about having a higher credit score?" },
    { type: "prompt", text: "Which benefit of a higher credit score motivates you the most right now?" },
  ],
};
