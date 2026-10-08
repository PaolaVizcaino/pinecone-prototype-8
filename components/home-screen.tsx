'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { StatusBar } from './status-bar'

const modules = [
  {
    label: '1. Your Journey to Financial Freedom',
    icon: '/course/icon-send.svg',
    href: '/course',
  },
  {
    label: '2. Budgeting and Money Management',
    icon: '/modules/mod2-budgeting.png',
  },
  {
    label: '3. Saving and Borrowing Decisions',
    icon: '/modules/mod3-saving.png',
    href: '/module/3',
  },
  {
    label: '4. Investing For The Future',
    icon: '/modules/mod4-investing.png',
  },
  {
    label: '5. Planning For Retirement',
    icon: '/modules/mod5-retirement.png',
  },
]

function SectionHeader({
  title,
  open,
  onToggle,
}: {
  title: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center gap-2 py-2 text-left"
      aria-expanded={open}
    >
      <ChevronDown
        className={`h-5 w-5 shrink-0 text-[#4a5254] transition-transform ${
          open ? '' : '-rotate-90'
        }`}
      />
      <span className="text-[19px] font-semibold text-[#1a1a1a]">{title}</span>
    </button>
  )
}

function ListCard({
  icon,
  label,
  href,
  featured,
}: {
  icon: string
  label: string
  href?: string
  featured?: boolean
}) {
  const inner = (
    <div
      className={`flex items-center gap-4 rounded-2xl bg-white p-3 transition active:scale-[0.99] ${
        featured
          ? 'shadow-[0_6px_20px_rgba(45,135,139,0.34)] ring-2 ring-[#2D878B]/35'
          : 'shadow-[0_2px_10px_rgba(45,135,139,0.10)] ring-1 ring-[#2D878B]/10'
      }`}
    >
      <img
        src={icon || '/placeholder.svg'}
        alt=""
        className="h-11 w-11 shrink-0 rounded-xl"
      />
      <span className="min-w-0 text-[17px] font-medium leading-snug text-[#343434]">
        {label}
      </span>
    </div>
  )
  if (href) {
    return (
      <Link href={href} className="block">
        {inner}
      </Link>
    )
  }
  return inner
}

export function HomeScreen() {
  const [startOpen, setStartOpen] = useState(true)
  const [pfOpen, setPfOpen] = useState(true)

  return (
    <div className="flex min-h-full flex-col bg-maroon">
      <StatusBar variant="light" />

      {/* Brand header */}
      <header className="flex items-center gap-3 px-6 pb-8 pt-3">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global_Header_Brand__dark_mode___1_-oxEq0FrqyGvTwuen742qoOmzG2IVPq.avif"
          alt="Pinecone"
          className="h-14 w-auto object-contain"
        />
      </header>

      {/* White sheet */}
      <main className="flex-1 rounded-t-[30px] bg-white px-5 pb-10 pt-5">
        <section>
          <SectionHeader
            title="Start here"
            open={startOpen}
            onToggle={() => setStartOpen((v) => !v)}
          />
          {startOpen && (
            <div className="mt-1">
              <ListCard
                icon="/figma/icon-flag.svg"
                label="Welcome!"
              />
            </div>
          )}
        </section>

        <section className="mt-5">
          <SectionHeader
            title="Personal Finance For You"
            open={pfOpen}
            onToggle={() => setPfOpen((v) => !v)}
          />
          {pfOpen && (
            <div className="mt-1 flex flex-col gap-3">
              {modules.map((m) => (
                <ListCard
                  key={m.label}
                  icon={m.icon}
                  label={m.label}
                  href={m.href}
                  featured={m.label.startsWith('1.')}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Home indicator */}
      <div className="flex justify-center bg-white pb-2">
        <div className="h-[5px] w-32 rounded-full bg-black/80" />
      </div>
    </div>
  )
}
