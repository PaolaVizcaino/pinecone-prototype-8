'use client'

import Link from 'next/link'
import { MoreVertical, X } from 'lucide-react'
import { StatusBar } from './status-bar'

function InstructorBlock() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <span className="flex h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full">
        <img src="/host-pinecone.png" alt="Pinecone by Stanford" className="h-full w-full object-cover" />
      </span>
      <div className="min-w-0">
        <p className="text-[17px] font-bold leading-tight text-[#1a1a1a]">Pinecone by Stanford</p>
      </div>
    </div>
  )
}

export function BenefitsLesson() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <StatusBar variant="dark" />
      <header className="flex items-center justify-between px-5 pb-1 pt-1">
        <Link
          href="/module/3"
          aria-label="Close lesson"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_1px_6px_rgba(0,0,0,0.12)]"
        >
          <X className="h-6 w-6" strokeWidth={2.5} />
        </Link>
        <button
          type="button"
          aria-label="More options"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_1px_6px_rgba(0,0,0,0.12)]"
        >
          <MoreVertical className="h-6 w-6" strokeWidth={2.5} />
        </button>
      </header>

      <article className="px-6 pt-4 pb-10 text-[#293141]">
        <h1 className="text-[24px] font-extrabold leading-[1.2] text-balance">
          The Benefits of a High Credit Score
        </h1>
        <InstructorBlock />

        <p className="mt-7 text-[17px] leading-relaxed">
          A high credit score can make a big difference in your personal finances. A stronger score can help you:
        </p>
        <ul className="mt-3 list-none space-y-3 text-[17px] leading-relaxed">
          <li>
            <strong>Get approved more easily.</strong> You may not need to apply to as many lenders, which also
            means fewer hard inquiries on your credit report.
          </li>
          <li>
            <strong>Qualify for lower interest rates.</strong> Lenders see you as lower risk, so they charge you
            less to borrow.
          </li>
          <li>
            <strong>Save a lot of money over time.</strong> Even a small difference in interest rates can add up
            to thousands&mdash;or tens of thousands&mdash;of dollars over the years.
          </li>
        </ul>

        <h2 className="mt-8 text-[21px] font-extrabold">Sam&rsquo;s $20,000 Car Loan</h2>
        <p className="mt-3 text-[17px] leading-relaxed">Remember Sam from the Auto Loan Simulator?</p>
        <p className="mt-4 text-[17px] leading-relaxed">
          Now imagine Sam takes out a <strong>$20,000 car loan</strong>, and his interest rate depends on his
          credit score:
        </p>

        <img
          src="/table-car-loan.png"
          alt="Sam's $20,000 Car Loan: Fair 10.0% APR $425/mo $25,500 total, Good 6.8% APR $394/mo $23,640 total, Very Good 5.3% APR $380/mo $22,800 total"
          className="mt-5 w-full rounded-2xl"
        />

        <p className="mt-6 text-[17px] leading-relaxed">
          <strong>Sam saves $45 per month</strong> with a very good credit score compared to a fair one. Over{' '}
          <strong>5 years (60 payments)</strong>, that adds up to <strong>about $2,700 saved</strong> on the exact
          same car&mdash;money that stays with Sam instead of going to interest.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed">Same car. Same 5-year term. Just a stronger credit score.</p>

        <img
          src="/credit-score-sam-car.jpg"
          alt="Illustration: Sam holding his new car keys and paperwork outside the dealership, with a thought bubble reading Saved $45/month and a note showing 5-year savings of $2,700"
          className="mt-6 w-full rounded-2xl"
        />

        <h2 className="mt-8 text-[21px] font-extrabold">What this means for your wallet</h2>
        <p className="mt-3 text-[17px] leading-relaxed">
          Your credit score quietly shapes many big financial moments&mdash;renting an apartment, buying a car,
          getting good terms on a mortgage, and sometimes even passing certain background checks. Treat it as an
          asset and make it a goal to keep your score as strong as possible.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed">
          Before you move on, take a second to notice what actually motivates you here. For you personally,
          what&rsquo;s the biggest reason to care about having a higher credit score?
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#eef6f6] p-5">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.6 8.6 0 0 1-3.1-.6L3 21l1.7-5.1a8.5 8.5 0 0 1-.7-3.4A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z" />
            </svg>
          </span>
          <p className="text-[16px] font-semibold leading-snug text-[#1a1a1a]">
            Which benefit of a higher credit score motivates you the most right now?
          </p>
        </div>
      </article>

      <footer className="border-t border-[#eee] px-6 pb-6 pt-4">
        <div className="flex justify-center">
          <div className="h-[5px] w-32 rounded-full bg-black/80" />
        </div>
      </footer>
    </div>
  )
}
