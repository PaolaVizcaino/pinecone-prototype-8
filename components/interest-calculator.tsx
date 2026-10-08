'use client'

import { useMemo, useState } from 'react'
import { Sun, Moon, ChevronDown } from 'lucide-react'

type Mode = 'saving' | 'borrowing'

const SAVE = '#0d6e78'
const SAVE_HL = '#2f9e8f'
const BORROW = '#a5155f'

const FREQUENCIES: { label: string; periodsPerYear: number }[] = [
  { label: 'Daily', periodsPerYear: 365 },
  { label: 'Weekly', periodsPerYear: 52 },
  { label: 'Bi-weekly', periodsPerYear: 26 },
  { label: 'Monthly', periodsPerYear: 12 },
  { label: 'Quarterly', periodsPerYear: 4 },
  { label: 'Semi-annually', periodsPerYear: 2 },
  { label: 'Annually', periodsPerYear: 1 },
]

const usd = (n: number) =>
  n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

function formatWithCommas(raw: string) {
  const cleaned = raw.replace(/[^0-9.]/g, '')
  const [intPart, ...rest] = cleaned.split('.')
  const decPart = rest.join('')
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return cleaned.includes('.') ? `${withCommas}.${decPart}` : withCommas
}

export function InterestCalculator() {
  const [dark, setDark] = useState(false)
  const [mode, setMode] = useState<Mode>('saving')
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('')
  const [periods, setPeriods] = useState('')
  const [frequency, setFrequency] = useState('Annually')

  const accent = mode === 'saving' ? SAVE : BORROW

  const result = useMemo(() => {
    const C = parseFloat(amount.replace(/,/g, ''))
    const r = parseFloat(rate)
    const n = parseFloat(periods)
    const ppy =
      FREQUENCIES.find((f) => f.label === frequency)?.periodsPerYear ?? 1
    if (
      !Number.isFinite(C) ||
      !Number.isFinite(r) ||
      !Number.isFinite(n) ||
      C <= 0
    ) {
      return null
    }
    const ratePerPeriod = r / 100 / ppy
    const fv = C * Math.pow(1 + ratePerPeriod, n)
    return { initial: C, interest: fv - C, final: fv }
  }, [amount, rate, periods, frequency])

  const reset = () => {
    setMode('saving')
    setAmount('')
    setRate('')
    setPeriods('')
    setFrequency('Annually')
  }

  // theme-scoped tokens
  const cardBg = dark ? '#1f2430' : '#ffffff'
  const panelBg = dark ? '#141821' : '#ffffff'
  const fieldBg = dark ? '#141821' : '#ffffff'
  const fieldBorder = dark ? '#3a4150' : '#d8dbe0'
  const textMain = dark ? '#f2f4f8' : '#1a1a1a'
  const textMuted = dark ? '#a7adba' : '#5a5f68'
  const rowBg = dark ? '#141821' : '#eef0f2'

  return (
    <div
      className="mt-6 rounded-3xl p-4 shadow-[0_1px_10px_rgba(0,0,0,0.08)]"
      style={{ backgroundColor: cardBg, border: `1px solid ${fieldBorder}` }}
    >
      {/* Theme toggle */}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          aria-label="Light mode"
          aria-pressed={!dark}
          onClick={() => setDark(false)}
          className="flex h-9 w-11 items-center justify-center rounded-lg transition"
          style={{
            backgroundColor: !dark ? SAVE : 'transparent',
            color: !dark ? '#fff' : textMuted,
            border: `1px solid ${!dark ? SAVE : fieldBorder}`,
          }}
        >
          <Sun className="h-[18px] w-[18px]" strokeWidth={2.5} />
        </button>
        <button
          type="button"
          aria-label="Dark mode"
          aria-pressed={dark}
          onClick={() => setDark(true)}
          className="flex h-9 w-11 items-center justify-center rounded-lg transition"
          style={{
            backgroundColor: dark ? SAVE : 'transparent',
            color: dark ? '#fff' : textMuted,
            border: `1px solid ${dark ? SAVE : fieldBorder}`,
          }}
        >
          <Moon className="h-[18px] w-[18px]" strokeWidth={2.5} />
        </button>
      </div>

      {/* I am: */}
      <h3 className="mt-1 text-[20px] font-extrabold" style={{ color: textMain }}>
        I am:
      </h3>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setMode('saving')}
          aria-pressed={mode === 'saving'}
          className="rounded-2xl py-4 text-[17px] font-bold transition active:scale-[0.98]"
          style={
            mode === 'saving'
              ? { backgroundColor: SAVE, color: '#fff', border: `2px solid ${SAVE}` }
              : {
                  backgroundColor: 'transparent',
                  color: textMain,
                  border: `2px solid ${fieldBorder}`,
                }
          }
        >
          Saving
        </button>
        <button
          type="button"
          onClick={() => setMode('borrowing')}
          aria-pressed={mode === 'borrowing'}
          className="rounded-2xl py-4 text-[17px] font-bold transition active:scale-[0.98]"
          style={
            mode === 'borrowing'
              ? { backgroundColor: BORROW, color: '#fff', border: `2px solid ${BORROW}` }
              : {
                  backgroundColor: 'transparent',
                  color: textMain,
                  border: `2px solid ${fieldBorder}`,
                }
          }
        >
          Borrowing
        </button>
      </div>

      {/* Initial amount */}
      <label className="mt-5 block text-[15px] font-semibold" style={{ color: textMain }}>
        Initial amount
      </label>
      <div
        className="mt-2 flex items-center rounded-xl px-3"
        style={{ backgroundColor: fieldBg, border: `1px solid ${fieldBorder}` }}
      >
        <span className="text-[17px]" style={{ color: textMuted }}>
          $
        </span>
        <input
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(formatWithCommas(e.target.value))}
          placeholder="Enter amount"
          aria-label="Initial amount"
          className="w-full bg-transparent py-3 pl-2 text-[17px] outline-none placeholder:text-[#9aa0a8]"
          style={{ color: textMain }}
        />
      </div>

      {/* Annual interest rate */}
      <label className="mt-4 block text-[15px] font-semibold" style={{ color: textMain }}>
        Annual interest rate
      </label>
      <div
        className="mt-2 flex items-center rounded-xl px-3"
        style={{ backgroundColor: fieldBg, border: `1px solid ${fieldBorder}` }}
      >
        <input
          inputMode="decimal"
          value={rate}
          onChange={(e) => setRate(e.target.value.replace(/[^0-9.]/g, ''))}
          placeholder="Enter rate"
          aria-label="Annual interest rate"
          className="w-full bg-transparent py-3 text-[17px] outline-none placeholder:text-[#9aa0a8]"
          style={{ color: textMain }}
        />
        <span className="text-[17px]" style={{ color: textMuted }}>
          %
        </span>
      </div>

      {/* Number of compounding periods */}
      <label className="mt-4 block text-[15px] font-semibold" style={{ color: textMain }}>
        Number of compounding periods
      </label>
      <div
        className="mt-2 rounded-xl px-3"
        style={{ backgroundColor: fieldBg, border: `1px solid ${fieldBorder}` }}
      >
        <input
          inputMode="numeric"
          value={periods}
          onChange={(e) => setPeriods(e.target.value.replace(/[^0-9.]/g, ''))}
          placeholder="Enter periods"
          aria-label="Number of compounding periods"
          className="w-full bg-transparent py-3 text-[17px] outline-none placeholder:text-[#9aa0a8]"
          style={{ color: textMain }}
        />
      </div>

      {/* Compounding frequency */}
      <label className="mt-4 block text-[15px] font-semibold" style={{ color: textMain }}>
        Compounding frequency
      </label>
      <div
        className="relative mt-2 rounded-xl"
        style={{ backgroundColor: fieldBg, border: `1px solid ${fieldBorder}` }}
      >
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          aria-label="Compounding frequency"
          className="w-full appearance-none bg-transparent px-3 py-3 text-[17px] outline-none"
          style={{ color: textMain }}
        >
          {FREQUENCIES.map((f) => (
            <option key={f.label} value={f.label}>
              {f.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2"
          style={{ color: textMuted }}
          strokeWidth={2.5}
        />
      </div>

      {/* Reset */}
      <button
        type="button"
        onClick={reset}
        className="mt-5 rounded-xl px-5 py-2.5 text-[15px] font-bold text-white transition active:scale-[0.98]"
        style={{ backgroundColor: '#0e3b4f' }}
      >
        Reset
      </button>

      {/* Results */}
      <div
        className="mt-5 rounded-2xl p-4"
        style={{ backgroundColor: panelBg, border: `1px solid ${fieldBorder}` }}
      >
        <h3 className="text-[19px] font-extrabold" style={{ color: textMain }}>
          {mode === 'saving' ? "What you'll have" : "What you'd owe"}
        </h3>

        <div className="mt-3 flex flex-col gap-2">
          <div
            className="flex items-center justify-between rounded-xl px-4 py-3"
            style={{ backgroundColor: rowBg }}
          >
            <span className="text-[15px] font-bold" style={{ color: textMain }}>
              Initial amount:
            </span>
            <span className="text-[16px] font-bold" style={{ color: textMain }}>
              {result ? usd(result.initial) : '-'}
            </span>
          </div>

          <div
            className="flex items-center justify-between rounded-xl px-4 py-3"
            style={{ backgroundColor: mode === 'saving' ? SAVE_HL : BORROW }}
          >
            <span className="text-[15px] font-bold text-white">
              {mode === 'saving' ? 'Interest earned:' : 'Interest paid:'}
            </span>
            <span className="text-[16px] font-bold text-white">
              {result ? usd(result.interest) : '-'}
            </span>
          </div>

          <div
            className="flex items-center justify-between rounded-xl px-4 py-3"
            style={{ backgroundColor: rowBg }}
          >
            <span className="text-[15px] font-bold" style={{ color: textMain }}>
              Final amount:
            </span>
            <span className="text-[16px] font-bold" style={{ color: textMain }}>
              {result ? usd(result.final) : '-'}
            </span>
          </div>
        </div>

        <h4
          className="mt-4 text-[16px] font-extrabold"
          style={{ color: accent }}
        >
          {mode === 'saving' ? 'When you save:' : 'When you borrow:'}
        </h4>
        <p className="mt-1 text-[15px] leading-relaxed" style={{ color: textMuted }}>
          {mode === 'saving'
            ? 'You are essentially a lender, and you get interest from those using your money.'
            : "You are paying interest for the privilege of using someone else's money. This shows how the balance grows if left unpaid."}
        </p>
      </div>
    </div>
  )
}
