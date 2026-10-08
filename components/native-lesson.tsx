'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, Check } from 'lucide-react'
import { Poll } from './poll'

const MAROON = '#8A2338'
const TEAL = '#1F7D6B'

type Section = {
  eyebrow: string
  title: string
  body: React.ReactNode
}

const sections: Section[] = [
  {
    eyebrow: 'The financial selfie',
    title: 'The Balance Sheet: Your Financial Snapshot',
    body: (
      <>
        <p className="text-[18px] leading-relaxed">
          Imagine taking a financial selfie&mdash;a snapshot that shows{' '}
          <span className="font-bold">
            what you own, what you owe, and how much wealth you&rsquo;ve built so
            far.
          </span>{' '}
          That&rsquo;s what a balance sheet does.
        </p>
        <img
          src="/lesson/financial-selfie.png"
          alt="A person holding a sign that reads Financial selfie, illustrating assets, liabilities, and net worth"
          className="mt-6 w-full rounded-2xl"
        />
        <p className="mt-6 text-[18px] leading-relaxed">
          Also called a net worth statement, it gives you a clear picture of your
          financial standing at a specific point in time&mdash;useful whether
          you&rsquo;re planning ahead, applying for a loan, or just getting a
          handle on your money.
        </p>
      </>
    ),
  },
  {
    eyebrow: 'The building blocks',
    title: 'Breaking Down the Balance Sheet',
    body: (
      <>
        <p className="text-[18px] leading-relaxed">A balance sheet has three key parts:</p>
        <div className="mt-4 flex flex-col gap-3">
          {[
            ['1. Assets', 'what you own'],
            ['2. Liabilities', 'what you owe'],
            ['3. Net Worth', 'the difference between the two'],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex items-center gap-3 rounded-2xl bg-[#f4f0f1] px-4 py-4"
            >
              <span className="text-[17px] font-extrabold text-[#1a1a1a]">{k}</span>
              <span className="text-[17px] text-[#5a5a5a]">&rarr; {v}</span>
            </div>
          ))}
        </div>
        <img
          src="/lesson/balance-sheet-table.avif"
          alt="Example Pinecone balance sheet with assets and liabilities columns and a net worth total"
          className="mt-6 w-full rounded-2xl border border-[#eee]"
        />
      </>
    ),
  },
  {
    eyebrow: 'Part 1',
    title: 'Assets: The Things You Own',
    body: (
      <>
        <p className="text-[18px] leading-relaxed">
          Assets are anything of value that you own&mdash;from{' '}
          <span className="font-semibold">liquid assets</span> (easy to access,
          like cash) to <span className="font-semibold">illiquid assets</span>{' '}
          (harder to convert to cash, like real estate).
        </p>
        <img
          src="/lesson/asset-types.avif"
          alt="Four types of assets: liquid assets, investment assets, real estate, and personal possessions"
          className="mt-6 w-full rounded-2xl"
        />
        <p className="mt-6 text-[18px] leading-relaxed">
          Think of assets as the foundation of your financial security. The more
          valuable your assets, the stronger your financial position.
        </p>
      </>
    ),
  },
  {
    eyebrow: 'Part 2',
    title: 'Liabilities: The Money You Owe',
    body: (
      <>
        <p className="text-[18px] leading-relaxed">
          Liabilities are your{' '}
          <span className="font-bold">financial obligations</span>&mdash;from
          short-term debts (typically due within a year) to long-term debts
          payable over longer periods.
        </p>
        <img
          src="/lesson/liabilities-phone.avif"
          alt="A person checking a banking app showing a $4,000 balance"
          className="mt-6 w-full rounded-2xl"
        />
        <p className="mt-6 text-[18px] leading-relaxed">
          Some debt, like a mortgage, can be strategic&mdash;it helps you
          eventually own a home. But if your liabilities grow faster than your
          assets, your net worth shrinks.
        </p>
      </>
    ),
  },
  {
    eyebrow: 'Part 3',
    title: 'Net Worth: The Big Picture',
    body: (
      <>
        <p className="text-[18px] leading-relaxed">
          Your net worth is the ultimate measure of your financial health&mdash;
          simply the difference between assets and liabilities.
        </p>
        <img
          src="/lesson/nw-formula.avif"
          alt="Net Worth equals Total Assets minus Total Liabilities"
          className="mt-5 w-full rounded-xl"
        />
        <p className="mt-6 text-[18px] font-bold">Simple example:</p>
        <p className="mt-2 text-[18px] leading-relaxed">
          You own a used car worth $8,000 and have a $5,000 car loan. If those are
          your only assets and liabilities, your net worth is:
        </p>
        <img
          src="/lesson/nw-example.avif"
          alt="Net Worth equals $8,000 minus $5,000 equals $3,000"
          className="mt-4 w-full rounded-xl"
        />
      </>
    ),
  },
]

// One extra step for the poll at the end.
const totalSteps = sections.length + 1

export function NativeLesson() {
  const router = useRouter()
  const [step, setStep] = useState(0)

  const isPoll = step === sections.length
  const goBack = () => {
    if (step === 0) router.back()
    else setStep((s) => s - 1)
  }
  const goNext = () => setStep((s) => Math.min(sections.length, s + 1))

  return (
    <div className="flex min-h-full flex-col bg-white">
      {/* Header: back + progress bar */}
      <div className="flex items-center gap-3 px-4 pb-3 pt-4">
        <button
          type="button"
          onClick={goBack}
          aria-label="Go back"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f0f1] text-[#8A2338] transition active:scale-95"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex flex-1 items-center gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <span
              key={i}
              className="h-2 flex-1 rounded-full transition-colors"
              style={{ backgroundColor: i <= step ? MAROON : '#e6dcde' }}
            />
          ))}
        </div>
      </div>

      {isPoll ? (
        <PollStep onComplete={() => router.push('/course')} />
      ) : (
        <ContentStep
          key={step}
          section={sections[step]}
          index={step}
          total={sections.length}
          onNext={goNext}
        />
      )}
    </div>
  )
}

function ContentStep({
  section,
  index,
  total,
  onNext,
}: {
  section: Section
  index: number
  total: number
  onNext: () => void
}) {
  const isLast = index === total - 1
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex-1 overflow-y-auto px-6 pb-4 text-[#1a1a1a]">
        <p
          className="text-[13px] font-bold uppercase tracking-wide"
          style={{ color: TEAL }}
        >
          {section.eyebrow}
        </p>
        <h1 className="mt-1 text-[26px] font-extrabold leading-[1.2] text-balance">
          {section.title}
        </h1>
        <div className="mt-5">{section.body}</div>
      </div>

      <div className="px-6 pb-7 pt-3">
        <button
          type="button"
          onClick={onNext}
          className="w-full rounded-full py-4 text-[18px] font-bold text-white transition active:scale-[0.98]"
          style={{ backgroundColor: MAROON }}
        >
          {isLast ? 'Reflect & answer' : 'Next'}
        </button>
      </div>
    </div>
  )
}

function PollStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 pt-1">
          <p
            className="text-[13px] font-bold uppercase tracking-wide"
            style={{ color: TEAL }}
          >
            Your turn
          </p>
          <h1 className="mt-1 text-[24px] font-extrabold leading-[1.2] text-balance text-[#1a1a1a]">
            Before you build your own, where do you stand?
          </h1>
        </div>

        <div className="mt-5">
          <Poll
            question="Have you ever created your own personal balance sheet before?"
            moduleLabel="2. Budgeting and Money Management"
            options={[
              { label: 'Yes, but it needs to be updated', pct: 21 },
              { label: 'Yes, and I update it regularly', pct: 11 },
              { label: 'Not yet, but I plan on creating one soon', pct: 39 },
              { label: "Not yet \u2014 I don't know how, but I want to learn", pct: 29 },
            ]}
          />
        </div>
      </div>

      <div className="border-t border-[#eee] bg-white px-6 pb-7 pt-4">
        <button
          type="button"
          onClick={onComplete}
          className="flex w-full items-center justify-center gap-2 rounded-full py-4 text-[18px] font-bold text-white transition active:scale-[0.98]"
          style={{ backgroundColor: TEAL }}
        >
          <Check className="h-5 w-5" strokeWidth={3} />
          Mark as complete
        </button>
      </div>
    </div>
  )
}
