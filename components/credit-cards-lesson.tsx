'use client'

import { LessonShell } from './lesson-shell'
import { Poll } from './poll'

export function CreditCardsLesson() {
  return (
    <LessonShell
      pollBanner="/lesson2/poll-banner.png"
      pollBannerAlt="How do you usually handle your credit card balance?"
      poll={
        <Poll
          question="How do you usually handle your credit card balance?"
          moduleLabel="3. Saving and Borrowing Decisions"
          options={[
            { label: 'I pay the full balance every month', pct: 34 },
            {
              label: 'I usually pay more than the minimum, but not the full balance',
              pct: 22,
            },
            { label: 'I often pay only the minimum', pct: 14 },
            { label: 'It varies a lot from month to month', pct: 20 },
            { label: "I don't use a credit card right now", pct: 10 },
          ]}
        />
      }
    >
      <h1 className="text-[26px] font-extrabold leading-[1.2] text-balance">
        Credit Cards: Convenient but Costly
      </h1>

      <p className="mt-5 text-[17px] leading-relaxed">
        Credit cards are one of the most common forms of credit. They&rsquo;re{' '}
        <span className="font-bold">open-ended (revolving)</span>, meaning you
        aren&rsquo;t required to pay the full balance by a fixed date. Instead, you
        can borrow up to your <span className="font-bold">credit limit</span> and
        must make at least a <span className="font-bold">minimum payment</span> each
        month.
      </p>

      <p className="mt-4 text-[17px] leading-relaxed">
        But here&rsquo;s the catch: credit card debt is a very expensive way to
        borrow because interest rates are high, and interest{' '}
        <span className="font-bold">compounds daily</span>. This matters because it
        can make your credit card balance grow fast.
      </p>

      <img
        src="/lesson2/credit-safety-net.png"
        alt="Line chart comparing daily versus annual compounding, with the daily compounding balance growing faster over 16 months"
        className="mt-6 w-full rounded-2xl"
      />

      {/* Daily Compounding in Action */}
      <h2 className="mt-8 text-[22px] font-extrabold">
        Daily Compounding in Action: Sofia&rsquo;s Credit Card
      </h2>

      <p className="mt-3 text-[17px] leading-relaxed">
        Remember Sofia&rsquo;s recent big expenses? She ends up carrying a{' '}
        <span className="font-bold">$5,000</span> balance on her credit card with a{' '}
        <span className="font-bold">20% APR.</span> To keep the math simple, imagine
        she carries that balance for one year (no new purchases, no fees, no
        payments).
      </p>

      <p className="mt-4 text-[17px] leading-relaxed">
        A balance sheet has three key parts:
      </p>
      <ul className="mt-2 flex list-disc flex-col gap-2 pl-5 text-[17px] leading-relaxed marker:text-[#1f1f1f]">
        <li>
          With <span className="font-bold">daily compounding</span>, she&rsquo;d rack
          up about <span className="font-bold">$1,107</span> in interest over the
          year.
        </li>
        <li>
          If interest compounded only <span className="font-bold">once per year,</span>{' '}
          it would be <span className="font-bold">$1,000.</span>
        </li>
      </ul>

      <p className="mt-4 text-[17px] leading-relaxed">
        That extra <span className="font-bold">$107</span> doesn&rsquo;t look huge at
        first&mdash;but daily compounding adds up fast as balances get bigger or stick
        around longer.
      </p>

      <img
        src="/lesson2/sofia-compounding.png"
        alt="After one year on a $5,000 balance at 20% APR: annual compounding ends at $6,000 while daily compounding ends at $6,107"
        className="mt-6 w-full rounded-2xl"
      />

      <p className="mt-6 text-[17px] leading-relaxed">
        Sofia&rsquo;s numbers are just one example, but your habits matter even more.
      </p>

      <p className="mt-4 text-[17px] leading-relaxed">
        Take a moment to think about how you usually manage your own card.{' '}
        <span className="font-bold">Click below to answer.</span>
      </p>
    </LessonShell>
  )
}
