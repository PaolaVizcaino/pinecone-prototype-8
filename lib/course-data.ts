export type Lesson = {
  title: string
  img?: string
  type: 'play' | 'article' | 'checkpoint'
  active?: boolean
  href?: string
}

export type CourseModule = {
  slug: string
  title: string
  icon: string
  header: 'hero' | 'plain'
  heroImg?: string
  tabs: string[]
  nextUp: {
    label: string
    title: string
    img: string
    showPlay?: boolean
    progress?: number
  }
  sectionSubtitle?: string
  sectionTitle: string
  sectionBoxed?: boolean
  showBottomProgress?: boolean
  lessons: Lesson[]
}

export const courseModules: Record<string, CourseModule> = {
  '1': {
    slug: '1',
    title: '1. Your Journey to Financial Freedom',
    icon: '/course/icon-send.svg',
    header: 'hero',
    heroImg: '/course/hero-skyline.png',
    tabs: ['Course', 'Community', 'Members', 'Events'],
    nextUp: {
      label: 'Next up',
      title: 'You Are Your Own Chief Financial Officer (CFO)',
      img: '/course/lesson-cfo.png',
      showPlay: true,
      progress: 6,
    },
    sectionTitle: 'Lesson 1: Why Personal Finance Matters More than Ever',
    showBottomProgress: true,
    lessons: [
      {
        title: 'You Are Your Own Chief Financial Officer (CFO)',
        img: '/course/lesson-cfo.png',
        type: 'play',
        active: true,
      },
      {
        title: 'Modern Day Financial Pressures',
        img: '/course/lesson-pressures.png',
        type: 'article',
      },
      {
        title: 'Navigating Unpredictable Income',
        img: '/course/lesson-income.png',
        type: 'play',
      },
      {
        title: 'The \u201CStart Early\u201D Factor',
        img: '/course/lesson-startearly.png',
        type: 'play',
      },
      {
        title: 'Podcast: Celebrities Going Bankrupt',
        img: '/course/lesson-podcast.png',
        type: 'article',
      },
    ],
  },

  '2': {
    slug: '2',
    title: '2. Budgeting and Money Management',
    icon: '/modules/mod2-budgeting.png',
    header: 'plain',
    tabs: ['Course', 'Community', 'Members', 'Discovery'],
    nextUp: {
      label: 'Next up',
      title: 'The Balance Sheet: Understanding Your Financial Snapshot',
      img: '/course/m2-next.png',
      progress: 6,
    },
    sectionSubtitle: 'Budgeting and Money Management',
    sectionTitle: 'Lesson 1: The Balance Sheet',
    lessons: [
      {
        title: 'The Balance Sheet: Understanding Your Financial Snapshot',
        img: '/course/m2-balance.png',
        type: 'article',
        active: true,
      },
      {
        title: 'How to Create a Balance Sheet',
        img: '/course/m2-create.png',
        type: 'article',
      },
      {
        title: 'Jasmine\u2019s Balance Sheet',
        img: '/course/m2-jasmine.png',
        type: 'article',
      },
      {
        title: 'Lesson 1 Checkpoint',
        img: '/course/m2-checkpoint.png',
        type: 'checkpoint',
      },
      {
        title: 'Time to Ask Pinecone',
        img: '/course/m2-ask.png',
        type: 'article',
      },
    ],
  },

  '3': {
    slug: '3',
    title: '3. Saving and Borrowing Decisions',
    icon: '/modules/mod3-saving.png',
    header: 'plain',
    tabs: ['Course', 'Community', 'Discovery', 'Events'],
    nextUp: {
      label: 'Next up',
      title: 'The Benefits of a High Credit Score',
      img: '/credit-score-sam-car.jpg',
    },
    sectionSubtitle: 'Saving and Borrowing Decisions',
    sectionTitle: 'Lesson 3: Maximizing Your Credit Score',
    lessons: [
      {
        title: 'Credit Scores: Your Financial Reputation',
        type: 'article',
      },
      {
        title: 'What Goes Into Your Credit Score?',
        type: 'article',
      },
      {
        title: 'Jasmine \u0026 Sophia\u2019s Credit Score Glow-Up',
        type: 'play',
      },
      {
        title: 'The Benefits of a High Credit Score',
        img: '/credit-score-sam-car.jpg',
        type: 'article',
        active: true,
        href: '/lesson/benefits',
      },
      {
        title: 'Habits That Build (and Hurt) Your Credit Score',
        type: 'article',
      },
      {
        title: 'Lesson 3 Checkpoint',
        type: 'checkpoint',
      },
      {
        title: 'Time to Ask Pinecone',
        type: 'article',
      },
      {
        title: 'Where to Next?',
        type: 'article',
      },
    ],
  },

  '4': {
    slug: '4',
    title: '4. Investing for the Future',
    icon: '/modules/mod4-investing.png',
    header: 'plain',
    tabs: ['Course', 'Community', 'Discovery', 'Events'],
    nextUp: {
      label: 'Next up',
      title: 'Introduction to Stocks',
      img: '/course/m4-next.png',
    },
    sectionSubtitle: 'Investing for the Future',
    sectionTitle: 'Lesson 1: Investing Basics',
    lessons: [
      {
        title: 'What Are Your Investment Goals?',
        img: '/course/m4-goals.png',
        type: 'article',
      },
      {
        title: 'Introduction to Stocks',
        img: '/course/m4-stocks.png',
        type: 'article',
        active: true,
      },
      {
        title: 'A Piece of the Pine-Apple Pie',
        img: '/course/m4-pie.png',
        type: 'article',
      },
      {
        title: 'Introduction to Bonds',
        img: '/course/m4-bonds.png',
        type: 'article',
      },
      {
        title: 'The Biggest Bond Issuer: The Government',
        img: '/course/m4-govt.png',
        type: 'article',
      },
    ],
  },

  '5': {
    slug: '5',
    title: '5. Planning For Retirement',
    icon: '/modules/mod5-retirement.png',
    header: 'plain',
    tabs: ['Course', 'Community', 'Discovery', 'Events'],
    nextUp: {
      label: "Let's Get Started!",
      title: 'Planning for Retirement',
      img: '/course/m5-next.png',
    },
    sectionTitle: 'Planning for Retirement',
    sectionBoxed: true,
    lessons: [
      {
        title: 'Retirement Planning \u2014 Stage 1',
        img: '/course/m5-stage1.png',
        type: 'article',
      },
      {
        title: 'Retirement Planning \u2014 Stage 2',
        img: '/course/m5-stage2.png',
        type: 'article',
      },
      {
        title: 'Jasmine\u2019s Transit Map: Risk, Time, and Choice',
        img: '/course/m5-transit.png',
        type: 'article',
      },
      {
        title: 'Jasmine\u2019s Retirement Planning',
        img: '/course/m5-jasmine.png',
        type: 'article',
      },
      {
        title: 'Risk in Retirement Planning',
        type: 'article',
      },
      {
        title: 'Bonus: The Annuity Formula for Retirement Planning',
        img: '/course/m5-bonus.png',
        type: 'article',
      },
    ],
  },
}
