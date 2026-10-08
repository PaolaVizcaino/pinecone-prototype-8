// Module 1 "Your Journey to Financial Freedom" as it appears in the Pinecone
// app (Mighty Networks). Only the first part is clickable in this prototype.

export const module1 = {
  slug: "financial-freedom",
  number: 1,
  title: "Your Journey to Financial Freedom",
  subtitle: "Getting Started",
  lessons: [
    {
      title: "Lesson 1: Why Personal Finance Matters More than Ever",
      parts: [
        { title: "You Are Your Own Chief Financial Officer (CFO)", type: "video", thumb: "/thumb-cfo.jpg", slug: "cfo" },
        { title: "Modern Day Financial Pressures", type: "read", thumb: "/thumb-pressures.jpg" },
        { title: "Navigating Unpredictable Income", type: "video", thumb: "/thumb-income.jpg" },
        { title: "The “Start Early” Factor", type: "video", thumb: "/thumb-early.jpg" },
        { title: "Podcast: Celebrities Going Bankrupt", type: "read", thumb: "/thumb-pressures.jpg" },
        { title: "Lesson 1 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
      ],
    },
    {
      title: "Lesson 2: The Power of Time & Compound Interest",
      parts: [
        { title: "Interest Rates: The Price of Money", type: "read" },
        { title: "The Time Value of Money: Why Now Beats Later", type: "video" },
        { title: "George Washington and the Power of Time", type: "video" },
        { title: "Compound Interest: A Double-Edged Sword", type: "read" },
        { title: "Lesson 2 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
      ],
    },
    {
      title: "Lesson 3: What Money in the Future Is Worth Today",
      parts: [
        { title: "Present Value: Flipping Compound Interest Backwards", type: "read" },
        { title: "Comparing Financial Choices Over Time", type: "read" },
        { title: "Planning Ahead with Present Value", type: "read" },
        { title: "Lesson 3 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
      ],
    },
    {
      title: "Lesson 4: What You Need to Know about Inflation",
      parts: [
        { title: "Why You Should Care about Inflation", type: "read" },
        { title: "Podcast: The Hidden Force Affecting Your Money", type: "read" },
        { title: "How Inflation Affects Values over Time", type: "read" },
        { title: "Lesson 4 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
        { title: "Where to Next?", type: "read" },
      ],
    },
  ],
};

export const cfoPart = {
  lesson: "Lesson 1: Why Personal Finance Matters More than Ever",
  title: "You Are Your Own Chief Financial Officer (CFO)",
  host: "Pinecone by Stanford",
  blocks: [
    { type: "p", html: "Some time ago, the Chief Financial Officer at your firm would take care of decisions about your pension and retirement security. Those days are mostly gone." },
    { type: "p", html: "You are now the <strong>Chief Financial Officer</strong> of your life. Every credit card swipe, every decision about savings or debt, it’s on you." },
    { type: "p", html: "That might sound intimidating, but it also puts you in the driver’s seat of your financial journey." },
    { type: "h2", text: "Meet Jasmine" },
    { type: "p", html: "Jasmine is a public sector worker who discovered she couldn’t rely on anyone else to manage her financial future." },
    { type: "p", html: "<strong>Watch the video below</strong> to see how she embraced the <strong>CFO mindset</strong> and learned to take full control of her money decisions." },
    { type: "video", src: "/cfo-video.jpg", alt: "Jasmine at her desk looking at a pension account screen" },
    { type: "h2", text: "Take Charge as Your Own CFO" },
    { type: "p", html: "Click the question below to choose the one CFO task you already do or want to start next." },
    { type: "pollbutton", label: "What’s one CFO task you’d like to begin adding to your routine?" },
  ],
};

// Sidebar modules in the app (Module Test intentionally excluded)
export const appModules = [
  { number: 1, title: "Your Journey to Financial Freedom", icon: "plane", slug: "financial-freedom" },
  { number: 2, title: "Budgeting and Money Management", icon: "list", slug: "budgeting" },
  { number: 3, title: "Saving and Borrowing Decisions", icon: "bars", slug: "saving-borrowing" },
  { number: 4, title: "Investing for the Future", icon: "chart", slug: "investing" },
  { number: 5, title: "Planning For Retirement", icon: "calendar", slug: "retirement" },
];
