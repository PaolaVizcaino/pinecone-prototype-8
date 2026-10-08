'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronDown,
  Play,
  AlignLeft,
  Signpost,
  MoreVertical,
  ArrowLeft,
  Home,
  MessageCircle,
  Bell,
  Search,
} from 'lucide-react'
import { StatusBar } from './status-bar'
import type { CourseModule, Lesson } from '@/lib/course-data'

function LessonRow({ lesson }: { lesson: Lesson }) {
  const icon =
    lesson.type === 'play' ? (
      lesson.active ? (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal">
          <Play className="h-4 w-4 fill-white text-white" />
        </span>
      ) : (
        <Play className="h-6 w-6 shrink-0 fill-[#1a1a1a] text-[#1a1a1a]" />
      )
    ) : lesson.type === 'checkpoint' ? (
      <Signpost className="h-6 w-6 shrink-0 text-teal" strokeWidth={2.5} />
    ) : lesson.active ? (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal">
        <AlignLeft className="h-4 w-4 text-white" strokeWidth={2.5} />
      </span>
    ) : (
      <AlignLeft className="h-6 w-6 shrink-0 text-[#1a1a1a]" strokeWidth={2.5} />
    )

  const className = `flex w-full items-center gap-4 rounded-2xl px-2 py-2 text-left transition active:scale-[0.99] ${
    lesson.active ? 'bg-[#eceded]' : ''
  }`

  if (lesson.href) {
    return (
      <Link href={lesson.href} className={className}>
        {icon}
        <span className="text-[19px] font-medium leading-snug text-[#1a1a1a] text-pretty">
          {lesson.title}
        </span>
      </Link>
    )
  }

  return (
    <button type="button" className={className} aria-disabled="true">
      {icon}
      <span className="text-[19px] font-medium leading-snug text-[#1a1a1a] text-pretty">
        {lesson.title}
      </span>
    </button>
  )
}

function CircleButton({
  children,
  label,
  href,
  variant,
}: {
  children: React.ReactNode
  label: string
  href?: string
  variant: 'glass' | 'solid'
}) {
  const cls =
    variant === 'glass'
      ? 'flex h-12 w-12 items-center justify-center rounded-full bg-white/50 text-[#1a1a1a] shadow-sm backdrop-blur-md ring-1 ring-white/60 transition active:scale-95'
      : 'flex h-12 w-12 items-center justify-center rounded-full bg-[#f1f1f1] text-[#1a1a1a] transition active:scale-95'
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

export function CourseScreen({ module }: { module: CourseModule }) {
  const [open, setOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('Course')
  const isHero = module.header === 'hero'

  return (
    <div className="relative flex min-h-full flex-col bg-white">
      {/* Header */}
      {isHero ? (
        <div className="relative">
          <img
            src={module.heroImg || '/placeholder.svg'}
            alt="Illustrated city skyline"
            className="h-[300px] w-full object-cover"
          />
          <div className="absolute inset-x-0 top-0">
            <StatusBar variant="dark" />
          </div>
          <div className="absolute inset-x-0 top-12 flex items-center justify-between px-5">
            <CircleButton label="Go back" href="/onboarding" variant="glass">
              <ArrowLeft className="h-6 w-6" strokeWidth={2.5} />
            </CircleButton>
            <CircleButton label="More options" variant="glass">
              <MoreVertical className="h-6 w-6" strokeWidth={2.5} />
            </CircleButton>
          </div>
        </div>
      ) : (
        <div>
          <StatusBar variant="light" />
          <div className="flex items-center justify-between px-5 pt-2">
            <CircleButton label="Go back" href="/onboarding" variant="solid">
              <ArrowLeft className="h-6 w-6" strokeWidth={2.5} />
            </CircleButton>
            <CircleButton label="More options" variant="solid">
              <MoreVertical className="h-6 w-6" strokeWidth={2.5} />
            </CircleButton>
          </div>
        </div>
      )}

      {/* Title */}
      <div className="px-5 pb-5 pt-5">
        <h1 className="truncate text-[30px] font-extrabold leading-[1.1] text-[#1a1a1a]">
          {module.title}
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {module.tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActiveTab(t)}
            className={`shrink-0 rounded-full px-4 py-2 text-[22px] font-semibold transition ${
              activeTab === t ? 'bg-[#eceded] text-[#1a1a1a]' : 'text-[#1a1a1a]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <main className="flex-1 px-5 pb-32">
        {/* Next up */}
        <button
          type="button"
          className="flex w-full items-center gap-4 py-2 text-left"
        >
          {module.nextUp.showPlay ? (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eceded]">
              <Play className="h-5 w-5 fill-[#1a1a1a] text-[#1a1a1a]" />
            </span>
          ) : null}
          <div className="flex-1">
            <p className="text-[17px] text-[#6a6a6a]">{module.nextUp.label}</p>
            <p className="mt-0.5 text-[19px] font-bold leading-snug text-[#1a1a1a] text-pretty">
              {module.nextUp.title}
            </p>
            {typeof module.nextUp.progress === 'number' ? (
              <div className="mt-2 h-[6px] w-full rounded-full bg-[#e6e6e6]">
                <div
                  className="h-full rounded-full bg-teal"
                  style={{ width: `${module.nextUp.progress}%` }}
                />
              </div>
            ) : null}
          </div>
        </button>

        {/* Optional plain subtitle */}
        {module.sectionSubtitle ? (
          <h2 className="mt-6 text-[24px] font-extrabold leading-tight text-[#1a1a1a] text-balance">
            {module.sectionSubtitle}
          </h2>
        ) : null}

        {/* Lesson section */}
        <section className={module.sectionSubtitle ? 'mt-3' : 'mt-6'}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex w-full items-center gap-2 text-left ${
              module.sectionBoxed
                ? 'rounded-2xl bg-[#eceded] px-4 py-4'
                : 'items-start py-2'
            }`}
            aria-expanded={open}
          >
            <ChevronDown
              className={`h-6 w-6 shrink-0 text-[#4a5254] transition-transform ${
                module.sectionBoxed ? '' : 'mt-1'
              } ${open ? '' : '-rotate-90'}`}
            />
            <span className="text-[24px] font-extrabold leading-tight text-[#1a1a1a] text-balance">
              {module.sectionTitle}
            </span>
          </button>

          {open && (
            <div className="mt-2 flex flex-col gap-1">
              {module.lessons.map((l) => (
                <LessonRow key={l.title} lesson={l} />
              ))}

              {module.showBottomProgress ? (
                <div className="mt-3 flex items-center gap-3 px-2">
                  <div className="h-[10px] flex-1 rounded-full bg-[#e6e6e6]">
                    <div className="h-full w-0 rounded-full bg-teal" />
                  </div>
                  <span className="text-[20px] font-bold text-[#1a1a1a]">0%</span>
                </div>
              ) : null}
            </div>
          )}
        </section>
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
