'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronDown,
  AlignLeft,
  Signpost,
  MessageSquare,
  MapPin,
  Home,
  MessageCircle,
  Bell,
  Search,
  MoreVertical,
  ArrowLeft,
} from 'lucide-react'
import { StatusBar } from './status-bar'

type MenuLesson = {
  title: string
  icon: 'article' | 'checkpoint' | 'community' | 'location'
  href?: string
}

const presentValueLesson: MenuLesson[] = [
  {
    title: 'Present Value: Flipping Compound Interest Backwards',
    icon: 'article',
    href: '/lesson/present-value',
  },
  { title: 'Present Value Over Multiple Years', icon: 'article' },
  { title: 'Planning Ahead with Present Value', icon: 'article' },
  { title: 'Lesson 3 Checkpoint', icon: 'checkpoint' },
  { title: 'Time to Ask Pinecone', icon: 'community' },
  { title: 'Where to Next?', icon: 'location' },
]

function RowIcon({ icon }: { icon: MenuLesson['icon'] }) {
  if (icon === 'checkpoint') {
    return <Signpost className="h-6 w-6 shrink-0 text-teal" strokeWidth={2.5} />
  }
  if (icon === 'community') {
    return (
      <MessageSquare className="h-6 w-6 shrink-0 text-[#1a1a1a]" strokeWidth={2.5} />
    )
  }
  if (icon === 'location') {
    return <MapPin className="h-6 w-6 shrink-0 text-[#1a1a1a]" strokeWidth={2.5} />
  }
  return <AlignLeft className="h-6 w-6 shrink-0 text-[#1a1a1a]" strokeWidth={2.5} />
}

function LessonRow({ lesson }: { lesson: MenuLesson }) {
  const inner = (
    <>
      <RowIcon icon={lesson.icon} />
      <span className="min-w-0 text-[16px] font-medium leading-snug text-[#1a1a1a]">
        {lesson.title}
      </span>
    </>
  )

  if (lesson.href) {
    return (
      <Link
        href={lesson.href}
        className="flex w-full items-center gap-3 rounded-2xl bg-[#f2f7f8] px-2 py-2 text-left ring-1 ring-teal/40 transition hover:bg-[#eaf4f5] active:scale-[0.99]"
      >
        {inner}
      </Link>
    )
  }

  return (
    <div
      aria-disabled="true"
      className="flex w-full cursor-default items-center gap-3 rounded-2xl px-2 py-2 text-left opacity-60"
    >
      {inner}
    </div>
  )
}

function CircleButton({
  children,
  label,
  href,
}: {
  children: React.ReactNode
  label: string
  href?: string
}) {
  const cls =
    'flex h-12 w-12 items-center justify-center rounded-full bg-[#f1f1f1] text-[#1a1a1a] transition active:scale-95'
  if (href) {
    return (
      <Link href={href} aria-label={label} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" aria-label={label} className={cls}>
      {children}
    </button>
  )
}

function NavItem({
  children,
  label,
  active,
  badge,
}: {
  children: React.ReactNode
  label: string
  active?: boolean
  badge?: number
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative flex h-12 w-12 items-center justify-center"
    >
      <span className={active ? 'text-[#1a1a1a]' : 'text-[#3a3a3a]'}>
        {children}
      </span>
      {badge ? (
        <span className="absolute right-1 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-teal text-[11px] font-bold text-white ring-2 ring-white">
          {badge}
        </span>
      ) : null}
    </button>
  )
}

function CollapsibleSection({
  title,
  defaultOpen,
  children,
  disabled,
}: {
  title: string
  defaultOpen?: boolean
  children?: React.ReactNode
  disabled?: boolean
}) {
  const [open, setOpen] = useState(!!defaultOpen)
  const header = (
    <div className="flex w-full items-start gap-2 text-left">
      <ChevronDown
        className={`mt-1 h-6 w-6 shrink-0 text-[#4a5254] ${
          open ? '' : '-rotate-90'
        }`}
      />
      <span className="min-w-0 text-[17px] font-extrabold leading-tight text-[#1a1a1a] text-balance">
        {title}
      </span>
    </div>
  )

  return (
    <section className="border-b border-[#eee] py-3">
      {disabled ? (
        header
      ) : (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start text-left"
          aria-expanded={open}
        >
          {header}
        </button>
      )}
      {open && children ? (
        <div className="mt-2 flex flex-col gap-1">{children}</div>
      ) : null}
    </section>
  )
}

export function CourseMenu() {
  const tabs = ['Course', 'Community', 'Members', 'Discovery']

  return (
    <div className="relative flex min-h-full flex-col bg-white">
      <StatusBar variant="light" />

      {/* Header buttons */}
      <div className="flex items-center justify-between px-5 pt-2">
        <CircleButton label="Back to modules" href="/">
          <ArrowLeft className="h-6 w-6" strokeWidth={2.5} />
        </CircleButton>
        <CircleButton label="More options">
          <MoreVertical className="h-6 w-6" strokeWidth={2.5} />
        </CircleButton>
      </div>

      {/* Title */}
      <div className="flex items-center gap-4 px-5 pb-5 pt-5">
        <img
          src="/course/icon-send.svg"
          alt=""
          aria-hidden="true"
          className="h-14 w-14 shrink-0 rounded-2xl object-contain"
        />
        <h1 className="max-w-[18rem] text-[24px] font-extrabold leading-[1.1] text-[#1a1a1a] text-balance">
          1. Your Journey to Financial Freedom
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((t) => (
          <span
            key={t}
            aria-disabled="true"
            className={`shrink-0 rounded-full px-4 py-2 text-[15px] font-semibold leading-tight ${
              t === 'Course' ? 'bg-[#eceded] text-[#1a1a1a]' : 'text-[#1a1a1a]'
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      <main className="flex-1 px-5 pb-32">
        {/* Sections */}
        <div className="mt-2">
          <CollapsibleSection
            title="Lesson 3: What Money in the Future Is Worth Today"
            defaultOpen
          >
            {presentValueLesson.map((lesson) => (
              <LessonRow key={lesson.title} lesson={lesson} />
            ))}
          </CollapsibleSection>
        </div>
      </main>

      {/* Bottom nav */}
      <div className="pointer-events-none sticky bottom-0 px-4 pb-3">
        <nav className="pointer-events-auto flex items-center justify-around rounded-full bg-white/90 px-4 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur-md">
          <NavItem label="Home" active>
            <Home className="h-7 w-7 fill-current" />
          </NavItem>
          <NavItem label="Messages" badge={1}>
            <MessageCircle className="h-7 w-7" strokeWidth={2} />
          </NavItem>
          <NavItem label="Notifications" badge={1}>
            <Bell className="h-7 w-7" strokeWidth={2} />
          </NavItem>
          <NavItem label="Search">
            <Search className="h-7 w-7" strokeWidth={2} />
          </NavItem>
        </nav>
        <div className="mt-2 flex justify-center">
          <div className="h-[5px] w-32 rounded-full bg-black/80" />
        </div>
      </div>
    </div>
  )
}
