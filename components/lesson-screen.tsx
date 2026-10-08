'use client'

import { X, MoreVertical } from 'lucide-react'
import { StatusBar } from './status-bar'
import { InterestCalculator } from './interest-calculator'

const MAROON = '#8A2338'

function InstructorBlock() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <span className="flex h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly_Gemini%20Flash_headshot%20of%20a%20economic%20professor%20woman%20in%20her%2050s%20from%20stanford%20business%20school%20her%20n%20915480-6s1g0W0tH3xBAcFJP9WL7NoFR3bJIj.png"
          alt="Dr. Eleanor Moss, Professor of Economics at Stanford"
          className="h-full w-full object-cover"
        />
      </span>
      <div className="min-w-0">
        <p className="text-[17px] font-bold leading-tight text-[#1a1a1a]">
          Reviewed by Dr. Eleanor Moss, Professor of Economics at Stanford
        </p>
      </div>
    </div>
  )
}

export function LessonScreen({ closeHref = '/' }: { closeHref?: string }) {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <StatusBar variant="dark" />

      {/* Header — X close (left) + more options (right) */}
      <div className="flex items-center justify-between px-5 pb-1 pt-1">
        <div
          aria-label="Close lesson"
          aria-disabled="true"
          className="flex h-11 w-11 cursor-default items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_1px_6px_rgba(0,0,0,0.12)]"
        >
          <X className="h-6 w-6" strokeWidth={2.5} />
        </div>
        <button
          type="button"
          aria-label="More options"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_1px_6px_rgba(0,0,0,0.12)] transition active:scale-95"
        >
          <MoreVertical className="h-6 w-6" strokeWidth={2.5} />
        </button>
      </div>

      {/* Written lesson */}
      <article className="px-6 pt-3 text-[#1f1f1f]">
        <h1 className="text-[26px] font-extrabold leading-[1.2] text-balance">
          The Time Value of Money: Why Now Beats Later
        </h1>

        <InstructorBlock />

        <p className="mt-6 text-[17px] leading-relaxed">
          <span className="font-bold">The Time Value of Money:</span> A dollar today
          is worth more than a dollar next month or next year because today&rsquo;s
          dollar can earn interest.
        </p>

        <p className="mt-5 text-[17px] leading-relaxed">
          If you have $100 now, you can grow it to more than $100 in the future.
          Assume, for simplicity, that the annual interest rate is 10%. If this were
          the case, your money would grow to $110 in a year.{' '}
          <span className="font-bold">
            Your money grows because of the interest you can earn.
          </span>
        </p>

        <img
          src="/lesson2/tvm-chart-compound.avif"
          alt="Bar chart showing $100 today growing to $110 in one year"
          className="mt-6 w-full rounded-2xl"
        />

        <p className="mt-6 text-[17px] leading-relaxed">
          Now, if you let your money grow for a second year, that&rsquo;s where the
          magic happens:{' '}
          <span className="font-bold">interest compounds on interest!</span>
        </p>

        <img
          src="/lesson2/tvm-chart-year1.avif"
          alt="Bar chart showing $100 today, $100 plus $10 in one year, and $110 plus $11 in two years"
          className="mt-6 w-full rounded-2xl"
        />

        <p className="mt-6 text-[17px] leading-relaxed">
          Over time, this effect persists: you earn more interest in each successive
          year. <span className="font-bold">Your money grows exponentially!</span>
        </p>

        <p className="mt-5 text-[17px] leading-relaxed">
          Now, let&rsquo;s take a deeper look at the workings of interest
          compounding.
        </p>

        {/* How Time Makes Money Grow */}
        <h2 className="mt-8 text-[22px] font-extrabold">How Time Makes Money Grow</h2>

        <p className="mt-3 text-[17px] leading-relaxed">
          <span className="font-bold">Remember:</span> Compound interest is when
          interest is calculated not only on the original amount but also on the
          interest that has already accumulated.
        </p>

        <p className="mt-5 text-[17px] leading-relaxed">
          The picture below shows the power of compound interest. The longer your
          money stays invested, the more interest it earns, and the faster it grows.
        </p>

        {/* Coin-stacks image */}
        <img
          src="/lesson2/tvm-coin-stacks.png"
          alt="Gold coin stacks growing taller from Today to 10, 20, and 30 years, with a rising arrow. Caption: The longer your money stays invested, the more interest it earns, and the faster it grows."
          className="mt-6 w-full rounded-2xl"
        />

        <p className="mt-6 text-[17px] leading-relaxed">
          Now, let&rsquo;s look at the formula behind it.
        </p>

        <img
          src="/lesson2/tvm-formula.avif"
          alt="Future value equals cash flow times one plus r, raised to the power of T"
          className="mt-4 w-full rounded-2xl"
        />

        <p className="mt-6 text-[17px] leading-relaxed">
          We can call this the <span className="font-bold italic">wealth equation</span>: a
          simple way to show how your money grows over time.
        </p>

        <p className="mt-5 text-[17px] leading-relaxed">
          The path to wealth consists of three key components:
        </p>
        <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[17px] leading-relaxed marker:text-[#1f1f1f]">
          <li>
            Your initial savings (<span className="italic">C</span>, for cash flow)
          </li>
          <li>
            The interest rate (<span className="italic">r</span>)
          </li>
          <li>
            Time (<span className="italic">T</span>)
          </li>
        </ul>

        <p className="mt-5 text-[17px] leading-relaxed">
          Each component plays a role in building wealth:{' '}
          <span className="font-bold">
            the larger your initial savings, the higher the interest rate you can
            earn, and the sooner you start, the more you can grow your wealth.
          </span>{' '}
          People often think that you need a lot of saving to build large amounts of
          wealth, but other factors play a role in accumulating wealth. Time matters,
          and time is on your side.
        </p>

        <p className="mt-5 text-[17px] leading-relaxed">
          Now that you understand compound interest, you can earn it! Interest
          compounding is a powerful force.
        </p>

        {/* Try It Yourself */}
        <h2 className="mt-8 text-[26px] font-extrabold">Try It Yourself</h2>

        <p className="mt-4 text-[17px] leading-relaxed">
          We just saw the impact of starting early. Now, it&rsquo;s your turn. Use the{' '}
          <span className="font-bold">Interest Calculator</span> below to see how
          money grows over time.
        </p>

        <p className="mt-5 text-[17px] leading-relaxed">
          Adjust the{' '}
          <span className="font-bold">
            initial amount, interest rate, and number of periods
          </span>{' '}
          to compare what happens if you begin saving earlier versus later.
        </p>

        <p className="mt-5 text-[17px] leading-relaxed">
          Even small differences can make a big impact. That&rsquo;s the power of
          compound interest in action.
        </p>

        <p className="mt-5 text-[17px] leading-relaxed">
          <span className="font-bold">Try this example:</span> Let&rsquo;s assume you
          are able to save $1,200 this year. How much will you have in 10 years, if
          you can invest at an interest rate of 7% per year?
        </p>

        {/* Interest calculator */}
        <InterestCalculator />
      </article>

      {/* Footer */}
      <div className="mt-8 border-t border-[#eee] px-6 pb-6 pt-4">
        <div className="flex justify-center">
          <div className="h-[5px] w-32 rounded-full bg-black/80" />
        </div>
      </div>
    </div>
  )
}
