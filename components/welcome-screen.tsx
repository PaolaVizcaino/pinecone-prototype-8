'use client'

import Link from 'next/link'
import { StatusBar } from './status-bar'

const crew = [
  {
    name: 'Grace',
    img: '/crew/grace.png',
    desc: 'A dental hygienist balancing her career with strategic financial planning.',
  },
  {
    name: 'Alex',
    img: '/crew/alex.png',
    desc: 'A gig worker balancing short-term needs with future goals.',
  },
  {
    name: 'Jasmine',
    img: '/crew/jasmine.png',
    desc: 'A public-sector employee eager to plan for the future.',
  },
  {
    name: 'Sam',
    img: '/crew/sam.png',
    desc: 'A tech worker learning to make the most of income and employer benefits.',
  },
  {
    name: 'Sofia',
    img: '/crew/sofia.png',
    desc: 'A freelance designer navigating variable income and self-employment complexities.',
  },
]

const toolkit = [
  {
    icon: '/toolkit/video.png',
    title: 'Videos',
    desc: 'Short, story-driven lessons that make each idea click.',
  },
  {
    icon: '/toolkit/podcast.png',
    title: 'Podcasts',
    desc: 'Fictional money stories that bring each concept to life.',
  },
  {
    icon: '/toolkit/calculator.png',
    title: 'Calculators',
    desc: 'Run real numbers on interest, inflation, and savings.',
  },
  {
    icon: '/toolkit/document.png',
    title: 'Templates',
    desc: 'Templates to build your own balance sheet, budget, and cash flow.',
  },
]

export function WelcomeScreen() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <StatusBar variant="dark" />

      {/* Header row */}
      <div className="flex items-center gap-4 px-5 pb-2 pt-1">
        <Link href="/onboarding" aria-label="Go back">
          <img src="/figma/btn-back.svg" alt="" className="h-11 w-11" />
        </Link>
      </div>
      <div className="flex items-center gap-4 px-5 pb-4 pt-2">
        <img src="/figma/icon-flag-lg.svg" alt="" className="h-14 w-14 rounded-xl" />
        <h1 className="text-[26px] font-bold text-[#1a1a1a]">Welcome!</h1>
      </div>

      <main className="flex-1 px-5 pb-6">
        {/* Intro */}
        <section className="mt-4">
          <h2 className="text-[20px] font-semibold text-[#1a1a1a]">
            Welcome to Pinecone !
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-[#1a1a1a]">
            Let&rsquo;s face it&mdash;managing money can be intimidating,
            especially when you&rsquo;re just starting out in your career.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-[#1a1a1a]">
            That&rsquo;s why we created Personal Finance for You, a program that
            takes you from &ldquo;What is a 401(k)?&rdquo; to confidently saying,
            &ldquo;I&rsquo;ve got this!&rdquo; when it comes to your finances.
          </p>
        </section>

        {/* Meet the Crew */}
        <section className="mt-8">
          <h2 className="text-[20px] font-semibold text-[#1a1a1a]">
            Meet the Crew
          </h2>
          <p className="mt-2 text-[17px] leading-relaxed text-[#1a1a1a]">
            As you use Pinecone, you&rsquo;ll follow the journey of young
            professionals facing real-life financial challenges. Meet Grace,
            Sofia, Alex, Sam, and Jasmine.
          </p>

          <div className="mt-4 flex flex-col gap-3">
            {crew.map((c) => (
              <div
                key={c.name}
                className="flex gap-4 rounded-2xl bg-[#f6f6f6] p-3"
              >
                <img
                  src={c.img || '/placeholder.svg'}
                  alt={`Portrait of ${c.name}`}
                  className="h-[104px] w-[92px] shrink-0 rounded-xl object-cover"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-[22px] font-bold leading-tight text-[#1a1a1a]">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-[16px] leading-snug text-[#444444] text-pretty">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What to Expect */}
        <section className="mt-8">
          <h2 className="text-[20px] font-semibold text-[#1a1a1a]">
            What to Expect
          </h2>
          <p className="mt-2 text-[17px] leading-relaxed text-[#1a1a1a]">
            Pinecone is more than lessons. As you learn, you&rsquo;ll have a
            whole toolkit to put it into practice:
          </p>

          <div className="mt-4 flex flex-col gap-3">
            {toolkit.map((t) => (
              <div
                key={t.title}
                className="flex items-center gap-4 rounded-2xl bg-[#f6f6f6] p-3"
              >
                <img
                  src={t.icon || '/placeholder.svg'}
                  alt=""
                  className="h-14 w-14 shrink-0 rounded-xl"
                />
                <div>
                  <h3 className="text-[19px] font-bold text-[#1a1a1a]">
                    {t.title}
                  </h3>
                  <p className="mt-0.5 text-[16px] leading-snug text-[#444444] text-pretty">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[17px] leading-relaxed text-[#1a1a1a]">
            Find them all anytime in your{' '}
            <span className="font-bold underline">Resources Hub.</span>
          </p>
        </section>
      </main>

      {/* Ready to start CTA */}
      <div className="sticky bottom-0 rounded-t-3xl bg-[#f6f6f6] px-5 pb-6 pt-4">
        <h2 className="text-center text-[20px] font-bold text-[#1a1a1a]">
          Ready to start?
        </h2>
        <Link
          href="/course"
          className="mt-3 block w-full rounded-2xl bg-teal-alt px-6 py-4 text-center text-white shadow-[0_4px_14px_rgba(0,124,146,0.35)] transition active:scale-[0.99]"
        >
          <span className="block text-[18px] font-bold">Start Module 1</span>
          <span className="block text-[16px] font-semibold">
            Your Journey to Financial Freedom
          </span>
        </Link>
        <div className="mt-3 flex justify-center">
          <div className="h-[5px] w-32 rounded-full bg-black/80" />
        </div>
      </div>
    </div>
  )
}
