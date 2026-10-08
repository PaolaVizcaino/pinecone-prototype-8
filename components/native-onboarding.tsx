'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Wallet,
  PiggyBank,
  TrendingUp,
  Umbrella,
  Check,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const MAROON = '#8A2338'
const TEAL = '#1F7D6B'

const learnOptions = [
  { id: 'budgeting', label: 'Budgeting', Icon: Wallet },
  { id: 'saving', label: 'Saving & Borrowing', Icon: PiggyBank },
  { id: 'investing', label: 'Investing', Icon: TrendingUp },
  { id: 'retirement', label: 'Planning for Retirement', Icon: Umbrella },
]

const crew = [
  {
    name: 'Grace',
    role: 'Dental Hygienist',
    img: '/crew/grace.png',
    bio: 'Balancing her career with strategic financial planning.',
  },
  {
    name: 'Alex',
    role: 'Gig Worker',
    img: '/crew/alex.png',
    bio: 'Balancing short-term needs with long-term goals.',
  },
  {
    name: 'Jasmine',
    role: 'Public-Sector Employee',
    img: '/crew/jasmine.png',
    bio: 'Eager to plan ahead and build for the future.',
  },
  {
    name: 'Sam',
    role: 'Tech Worker',
    img: '/crew/sam.png',
    bio: 'Making the most of income and employer benefits.',
  },
  {
    name: 'Sofia',
    role: 'Freelance Designer',
    img: '/crew/sofia.png',
    bio: 'Navigating variable income and self-employment.',
  },
]

function StepDots({ total, active }: { total: number; active: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className="h-2 rounded-full transition-all"
          style={{
            width: i === active ? 22 : 8,
            backgroundColor: i === active ? MAROON : '#d8ccce',
          }}
        />
      ))}
    </div>
  )
}

export function NativeOnboarding() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [slide, setSlide] = useState(0)
  const touchX = useRef<number | null>(null)

  const toggle = (id: string) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
    )

  const goNext = () => setStep((s) => Math.min(3, s + 1))
  const goBack = () => setStep((s) => Math.max(0, s - 1))

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (dx < -40) setSlide((s) => Math.min(crew.length - 1, s + 1))
    if (dx > 40) setSlide((s) => Math.max(0, s - 1))
    touchX.current = null
  }

  return (
    <div className="flex min-h-full w-full flex-col bg-white">
      {step === 0 ? (
        <SplashScreen onStart={goNext} />
      ) : (
        <div className="flex min-h-full flex-col">
          {/* Top bar with back */}
          <div className="flex items-center px-5 pb-2 pt-4">
            <button
              type="button"
              onClick={goBack}
              aria-label="Go back"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f0f1] text-[#8A2338] transition active:scale-95"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <span className="ml-3 text-[14px] font-bold uppercase tracking-wide text-[#9a8f91]">
              Step {step} of 3
            </span>
          </div>

          {step === 1 && (
            <LearnStep
              selected={selected}
              toggle={toggle}
              onContinue={goNext}
            />
          )}

          {step === 2 && (
            <CrewStep
              slide={slide}
              setSlide={setSlide}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onContinue={goNext}
            />
          )}

          {step === 3 && (
            <AllSetStep
              onStart={() => router.push('/lesson/native')}
              onOpenModule={() => router.push('/lesson/native')}
            />
          )}
        </div>
      )}
    </div>
  )
}

function SplashScreen({ onStart }: { onStart: () => void }) {
  return (
    <div
      className="relative flex min-h-full flex-col items-center justify-center overflow-hidden px-8"
      style={{
        background: `linear-gradient(160deg, #a12a44 0%, ${MAROON} 55%, #6f1a2c 100%)`,
      }}
    >
      {/* Teal wave near bottom */}
      <svg
        aria-hidden="true"
        viewBox="0 0 390 180"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-44 w-full"
      >
        <path
          d="M0 70 C 90 10, 150 130, 250 80 C 330 40, 360 90, 390 70 L 390 180 L 0 180 Z"
          fill={TEAL}
          opacity="0.9"
        />
        <path
          d="M0 110 C 100 60, 170 150, 260 110 C 330 80, 360 120, 390 105 L 390 180 L 0 180 Z"
          fill={TEAL}
        />
      </svg>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
        <img
          src="/brand/pinecone-logo.png"
          alt="Pinecone"
          className="w-56 max-w-[70%]"
        />
        <p className="mt-3 text-[15px] font-semibold uppercase tracking-[0.35em] text-[#f3d9df]">
          By Stanford
        </p>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-4 pb-10">
        <button
          type="button"
          onClick={onStart}
          className="w-full rounded-full bg-white py-4 text-[18px] font-bold text-[#8A2338] shadow-lg transition active:scale-[0.98]"
        >
          Get Started
        </button>
        <button
          type="button"
          onClick={onStart}
          className="text-[16px] font-semibold text-white/90 underline underline-offset-4"
        >
          I already have an account
        </button>
      </div>
    </div>
  )
}

function LearnStep({
  selected,
  toggle,
  onContinue,
}: {
  selected: string[]
  toggle: (id: string) => void
  onContinue: () => void
}) {
  return (
    <div className="flex flex-1 flex-col px-6 pt-3">
      <h1 className="text-[28px] font-extrabold leading-tight text-[#1a1a1a] text-balance">
        What do you want to learn?
      </h1>
      <p className="mt-2 text-[17px] leading-relaxed text-[#5a5a5a]">
        Pick anything useful &mdash; you can change this later.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        {learnOptions.map(({ id, label, Icon }) => {
          const isOn = selected.includes(id)
          return (
            <button
              key={id}
              type="button"
              onClick={() => toggle(id)}
              aria-pressed={isOn}
              className="flex items-center gap-4 rounded-2xl bg-white p-4 text-left transition active:scale-[0.99]"
              style={{
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                outline: isOn ? `2.5px solid ${TEAL}` : '2.5px solid transparent',
                outlineOffset: -2,
              }}
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: TEAL }}
              >
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <span className="flex-1 text-[19px] font-bold text-[#1a1a1a]">
                {label}
              </span>
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full border-2 transition"
                style={{
                  borderColor: isOn ? TEAL : '#d3cbcd',
                  backgroundColor: isOn ? TEAL : 'transparent',
                }}
              >
                {isOn && <Check className="h-4 w-4 text-white" strokeWidth={3} />}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-auto flex flex-col gap-5 py-6">
        <StepDots total={3} active={0} />
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-full py-4 text-[18px] font-bold text-white transition active:scale-[0.98]"
          style={{ backgroundColor: MAROON }}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

function CrewStep({
  slide,
  setSlide,
  onTouchStart,
  onTouchEnd,
  onContinue,
}: {
  slide: number
  setSlide: (fn: (s: number) => number | number) => void
  onTouchStart: (e: React.TouchEvent) => void
  onTouchEnd: (e: React.TouchEvent) => void
  onContinue: () => void
}) {
  const atStart = slide === 0
  const atEnd = slide === crew.length - 1
  return (
    <div className="flex flex-1 flex-col px-6 pt-3">
      <h1 className="text-[28px] font-extrabold leading-tight text-[#1a1a1a] text-balance">
        Meet your crew
      </h1>
      <p className="mt-2 text-[17px] leading-relaxed text-[#5a5a5a]">
        You&rsquo;ll follow their real-life money journeys.
      </p>

      {/* Gallery */}
      <div className="relative mt-5">
        <div
          className="overflow-hidden rounded-3xl"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {crew.map((c) => (
              <div key={c.name} className="w-full shrink-0 px-0.5">
                <div className="overflow-hidden rounded-3xl bg-[#f4f0f1] ring-1 ring-black/5">
                  <div className="flex items-center justify-center bg-[#efe7e9]">
                    <img
                      src={c.img || '/placeholder.svg'}
                      alt={`Portrait of ${c.name}`}
                      className="max-h-[300px] w-auto object-contain"
                    />
                  </div>
                  <div className="px-5 py-4">
                    <h2 className="text-[22px] font-extrabold leading-tight text-[#1a1a1a]">
                      {c.name}
                    </h2>
                    <p
                      className="text-[15px] font-bold"
                      style={{ color: TEAL }}
                    >
                      {c.role}
                    </p>
                    <p className="mt-1 text-[15px] leading-snug text-[#555] text-pretty">
                      {c.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={() => setSlide((s) => Math.max(0, s - 1))}
          disabled={atStart}
          aria-label="Previous character"
          className="absolute left-2 top-[150px] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#8A2338] shadow-md transition active:scale-95 disabled:opacity-0"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => setSlide((s) => Math.min(crew.length - 1, s + 1))}
          disabled={atEnd}
          aria-label="Next character"
          className="absolute right-2 top-[150px] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#8A2338] shadow-md transition active:scale-95 disabled:opacity-0"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Gallery dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {crew.map((c, i) => (
          <button
            key={c.name}
            type="button"
            aria-label={`Go to ${c.name}`}
            onClick={() => setSlide(() => i)}
            className="h-2 rounded-full transition-all"
            style={{
              width: i === slide ? 22 : 8,
              backgroundColor: i === slide ? TEAL : '#d8ccce',
            }}
          />
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-5 py-6">
        <StepDots total={3} active={1} />
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-full py-4 text-[18px] font-bold text-white transition active:scale-[0.98]"
          style={{ backgroundColor: MAROON }}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

const modules = [
  {
    label: 'Budgeting',
    title: 'Budgeting & Money Management',
    lessons: '4 lessons',
  },
  {
    label: 'Saving & Borrowing',
    title: 'Saving and Borrowing Decisions',
    lessons: '5 lessons',
  },
  {
    label: 'Investing',
    title: 'Investing for the Future',
    lessons: '6 lessons',
  },
  {
    label: 'Retirement',
    title: 'Planning for Retirement',
    lessons: '6 lessons',
  },
]

function AllSetStep({
  onStart,
  onOpenModule,
}: {
  onStart: () => void
  onOpenModule: () => void
}) {
  return (
    <div className="flex flex-1 flex-col px-6 pt-3">
      <h1 className="text-[28px] font-extrabold leading-tight text-[#1a1a1a] text-balance">
        You&rsquo;re all set
      </h1>
      <p className="mt-2 text-[17px] leading-relaxed text-[#5a5a5a]">
        Start with Module 1, then keep going&mdash;scroll to see the whole path.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        {/* Recommended, tappable */}
        <button
          type="button"
          onClick={onOpenModule}
          className="rounded-3xl p-5 text-left text-white transition active:scale-[0.99]"
          style={{
            background: `linear-gradient(150deg, ${TEAL} 0%, #175f52 100%)`,
          }}
        >
          <span className="text-[13px] font-bold uppercase tracking-wide text-white/85">
            Module 1 &middot; Recommended
          </span>
          <h2 className="mt-1 text-[22px] font-extrabold leading-tight text-balance">
            Your Journey to Financial Freedom
          </h2>
          <p className="mt-2 text-[15px] leading-snug text-white/90 text-pretty">
            Start with the foundations &mdash; then we&rsquo;ll check what you
            already know as you go.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-[14px] font-bold text-white">
            Tap to start &rarr;
          </span>
        </button>

        {/* Remaining modules */}
        {modules.map((m, i) => (
          <div key={m.title} className="rounded-3xl bg-[#f4f0f1] p-5">
            <span className="text-[13px] font-bold uppercase tracking-wide text-[#9a8f91]">
              Module {i + 2} &middot; {m.label}
            </span>
            <h2 className="mt-1 text-[20px] font-extrabold leading-tight text-[#3a3436]">
              {m.title}
            </h2>
            <p className="mt-1 text-[14px] font-semibold text-[#9a8f91]">
              {m.lessons}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 py-6">
        <StepDots total={3} active={2} />
        <button
          type="button"
          onClick={onStart}
          className="w-full rounded-full py-4 text-[18px] font-bold text-white transition active:scale-[0.98]"
          style={{ backgroundColor: MAROON }}
        >
          Start Module 1
        </button>
      </div>
    </div>
  )
}
