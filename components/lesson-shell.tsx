'use client'

import { useState, type ReactNode } from 'react'
import { ArrowLeft, MoreVertical, Check } from 'lucide-react'
import { StatusBar } from './status-bar'

export function LessonShell({
  children,
  poll,
  pollBanner,
  pollBannerAlt,
  closeHref = '/',
}: {
  children: ReactNode
  poll: ReactNode
  pollBanner: string
  pollBannerAlt: string
  closeHref?: string
}) {
  const [showPoll, setShowPoll] = useState(false)
  const [complete, setComplete] = useState(false)

  // Poll step — opens when the user taps the poll banner at the end of the lesson.
  if (showPoll) {
    return (
      <div className="flex min-h-full flex-col bg-[#3E7B88]">
        <StatusBar variant="light" />

        {/* Header with light-blue circular buttons over teal */}
        <div className="flex items-center justify-between px-5 pb-2 pt-1">
          <button
            type="button"
            onClick={() => setShowPoll(false)}
            aria-label="Back to lesson"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#bfe1e8] text-[#0f3d47] transition active:scale-95"
          >
            <ArrowLeft className="h-6 w-6" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            aria-label="More options"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#bfe1e8] text-[#0f3d47] transition active:scale-95"
          >
            <MoreVertical className="h-6 w-6" strokeWidth={2.5} />
          </button>
        </div>

        {poll}

        {/* Mark as complete */}
        <div className="px-5 pb-6 pt-2">
          <button
            type="button"
            onClick={() => setComplete((v) => !v)}
            aria-pressed={complete}
            className={`flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-[19px] font-bold text-white transition active:scale-[0.99] ${
              complete ? 'bg-teal' : 'bg-[#173a44]'
            }`}
          >
            {complete && <Check className="h-6 w-6" strokeWidth={3} />}
            {complete ? 'Completed' : 'Mark as Complete'}
          </button>
          <div className="mt-4 flex justify-center">
            <div className="h-[5px] w-32 rounded-full bg-white/80" />
          </div>
        </div>
      </div>
    )
  }

  // Lesson step — the written lesson content.
  return (
    <div className="flex min-h-full flex-col bg-white">
      <StatusBar variant="dark" />

      {/* Written lesson */}
      <article className="px-6 pt-2 text-[#1f1f1f]">{children}</article>

      {/* Poll CTA banner — opens the interactive poll */}
      <div className="px-6 pb-2 pt-6">
        <button
          type="button"
          onClick={() => setShowPoll(true)}
          aria-label={`Open poll: ${pollBannerAlt}`}
          className="block w-full overflow-hidden rounded-2xl transition active:scale-[0.99]"
        >
          <img src={pollBanner || '/placeholder.svg'} alt={pollBannerAlt} className="w-full" />
        </button>
      </div>

      {/* Mark as complete footer */}
      <div className="mt-4 border-t border-[#eee] px-6 pb-6 pt-4">
        <p className="text-[15px] text-[#6a6a6a]">
          Ready to move on to the next part?
        </p>
        <button
          type="button"
          onClick={() => setComplete((v) => !v)}
          aria-pressed={complete}
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-[19px] font-bold text-white transition active:scale-[0.99] ${
            complete ? 'bg-teal' : 'bg-[#3E7B88]'
          }`}
        >
          {complete && <Check className="h-6 w-6" strokeWidth={3} />}
          {complete ? 'Completed' : 'Mark as Complete'}
        </button>
        <div className="mt-4 flex justify-center">
          <div className="h-[5px] w-32 rounded-full bg-black/80" />
        </div>
      </div>
    </div>
  )
}
