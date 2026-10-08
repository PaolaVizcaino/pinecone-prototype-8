'use client'

import { MoreVertical, X } from 'lucide-react'
import { StatusBar } from './status-bar'

const calculatorUrl = 'https://su-sws.github.io/ifdm_learning_apps_staging/interactives/present-value-calculator-v2/'
const lessonImages = {
  formula: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/formula-EVces1VA4yvzjz5XCIfYE9jKlZrZD7.avif',
  formulaOneYear: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OwpHK9SdPOd05tRjUs6IEQdSMc1VLv.png',
  oneYearExample: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p62tbrbc6wBissec2BySVhqYcqNGra.png',
  formulaMultipleYears: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KfqpW9uvyKRmor2HfPYmTrVFOx772e.png',
  formulaTwo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZOjjzgu1atHduBymdICJrkSbWOrhRX.png',
  threeYearExample: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-224e6YpMH9SZrvdJ6oBCewBaVu0N4G.png',
}

function InstructorBlock() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <span className="flex h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20icon%20pinecone-6NWJdIKBRO2ZaiDPQoHT8ChQiyR4ok.jpg"
          alt="Pinecone by Stanford"
          className="h-full w-full object-cover"
        />
      </span>
      <div className="min-w-0">
        <p className="text-[17px] font-bold leading-tight text-[#1a1a1a]">
          Pinecone by Stanford
        </p>
      </div>
    </div>
  )
}

export function PresentValueLesson() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <StatusBar variant="dark" />
      <header className="flex items-center justify-between px-5 pb-1 pt-1">
        <div aria-label="Close lesson" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_1px_6px_rgba(0,0,0,0.12)]">
          <X className="h-6 w-6" strokeWidth={2.5} />
        </div>
        <button type="button" aria-label="More options" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_1px_6px_rgba(0,0,0,0.12)]">
          <MoreVertical className="h-6 w-6" strokeWidth={2.5} />
        </button>
      </header>

      <article className="px-6 pt-4 text-[#293141]">
        <h1 className="text-[24px] font-extrabold leading-[1.2] text-balance">Present Value: Flipping Compound Interest Backwards</h1>
        <InstructorBlock />
        <p className="mt-8 text-[17px] leading-relaxed">Compound interest grows your money over time. <strong>Present value does the reverse:</strong> it tells you how much a future amount is worth <em>today</em>.</p>
        <h2 className="mt-8 text-[21px] font-extrabold">Here is an example:</h2>
        <p className="mt-2 text-[17px] leading-relaxed">Let’s say someone offers you $1,000 next year. Is that worth the same as $1,000 in your pocket today?</p>
        <p className="mt-6 text-[17px] leading-relaxed">Nope. Why? Because today’s money could be earning interest in the meantime.</p>
        <p className="mt-8 text-[17px] font-extrabold leading-relaxed">Here&apos;s the formula for calculating the <strong>present value</strong> when we know the value one year from now.</p>
        <p className="mt-4 text-[17px] leading-relaxed">For example, you can ask yourself how much you should save today if you want to buy a laptop that costs $1,000 a year from now.</p>
        <img src={lessonImages.formulaOneYear} alt="Present value formula for a one-year timeframe" className="mx-auto mt-6 block w-[54%] object-contain" />
        <h2 className="mt-8 text-[21px] font-extrabold">Here’s what each part means:</h2>
        <ul className="mt-4 list-none space-y-3 text-[17px] leading-relaxed">
          <li><strong>PV:</strong> The present value (what you have to save today)</li>
          <li><strong>FV:</strong> The future value (the price of the laptop in a year)</li>
          <li><strong>r:</strong> The interest rate</li>
        </ul>
        <p className="mt-7 text-[17px] leading-relaxed">Suppose the interest rate is 10%. Then, the present value of $1,000 a year from now is $1,000/(1+0.10) = $909.</p>
        <img src={lessonImages.formulaTwo} alt="Present value calculation: 1,000 dollars divided by 1 plus 0.10 equals 909 dollars" className="mx-auto mt-6 block w-[70%] object-contain" />
        <p className="mt-7 text-[17px] leading-relaxed">Indeed, if you save $909 today at a 10% interest rate, you will have $1,000 a year from now to buy the laptop.</p>
        <img src={lessonImages.oneYearExample} alt="One-year present value example showing 909 dollars growing to 1,000 dollars at 10 percent" className="mx-auto mt-6 block w-[60%] rounded-2xl object-contain" />
        <h2 className="mt-10 text-[24px] font-extrabold">Present Value over Multiple Years</h2>
        <p className="mt-5 text-[17px] leading-relaxed">We can calculate the <strong>present value of a sum of money many years into the future.</strong> The formula looks nearly identical to the one-period case, but we need to consider the <strong>number of years (T).</strong></p>
        <img src={lessonImages.formulaMultipleYears} alt="Present value formula: future value divided by one plus the interest rate raised to the number of years" className="mx-auto mt-6 block w-[62%] object-contain" />
        <p className="mt-7 text-[17px] leading-relaxed">If you plan to buy the $1,000 laptop three years from now, and the interest rate is 10%, then you need to save $751.31 today.</p>
        <img src={lessonImages.threeYearExample} alt="Present value calculation showing 1,000 dollars discounted over three years at 10 percent equals 751.31 dollars" className="mx-auto mt-6 block w-[78%] object-contain" />
        <p className="mt-7 text-[17px] leading-relaxed">The longer the timeframe (T), the smaller the starting sum (PV).</p>
        <p className="mt-4 text-[17px] leading-relaxed">For example, if you are currently 25, and you want to have $50,000 at age 50, you have to save $4,615 today to reach your goal, assuming a 10% interest rate.</p>
        <p className="mt-4 text-[17px] leading-relaxed">If you were to wait until you were 30 to start saving for that goal, you would have to save much more: $7,432.</p>
        <p className="mt-4 text-[17px] leading-relaxed">Time is on your side, make use of it!</p>
        <h2 className="mt-10 text-[24px] font-extrabold">Try It Yourself</h2>
        <p className="mt-4 text-[17px] leading-relaxed">Use the <strong>Present Value Calculator</strong> to see how today&apos;s money compares with its future value. Adjust the interest rate, number of periods, and amount to explore different scenarios.</p>
        <ul className="mt-5 list-disc space-y-3 pl-7 text-[17px] leading-relaxed">
          <li><strong>Future Value:</strong> Enter the sum of money in the future</li>
          <li><strong>Annual Interest Rate:</strong> Set the interest rate</li>
          <li><strong>Number of compounding periods:</strong> Enter the number of periods your calculating for.</li>
        </ul>
        <p className="mt-6 border-l-2 border-[#bfd2d8] pl-4 text-[17px] leading-relaxed text-[#68727d]"><strong>Tip:</strong> The &apos;number of compounding periods&apos; field depends on the &apos;compounding frequency&apos; field. If compounding frequency is set to annual, then the number of compounding periods you enter is equivalent to a number of years.</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#bfd2d8] bg-[#f4f7f8] shadow-sm">
          <iframe
            title="Present Value Calculator"
            src={calculatorUrl}
            className="block h-[760px] w-full border-0 bg-white"
            loading="lazy"
          />

        </div>
        <p className="mt-8 pb-2 text-[17px] leading-relaxed">
          Now that you&apos;ve seen how present value works, think about your own finances. <strong>If you have a financial goal for the future, what do you have to save today to achieve it?</strong>
        </p>
      </article>
      <footer className="mt-8 border-t border-[#eee] px-6 pb-6 pt-4"><div className="flex justify-center"><div className="h-[5px] w-32 rounded-full bg-black/80" /></div></footer>
    </div>
  )
}


