'use client'

import { useState } from 'react'
import { ShieldCheck, Star, SmilePlus, MessageSquare, Bookmark, Plus } from 'lucide-react'

export type PollOption = {
  label: string
  pct: number
}

// Real young Gen Z headshots used for the voter avatars.
const avatarPhotos = [
  '/avatars/person-1.png',
  '/avatars/person-2.png',
  '/avatars/person-3.png',
  '/avatars/person-4.png',
  '/avatars/person-5.png',
  '/avatars/person-6.png',
  '/avatars/person-7.png',
  '/avatars/person-8.png',
]

// Deterministic pick so avatars look random but stay stable across renders.
function avatarPhoto(optionIndex: number, avatarIndex: number) {
  const seed = optionIndex * 7 + avatarIndex * 3 + 5
  return avatarPhotos[(seed * 31) % avatarPhotos.length]
}

export function Poll({
  question,
  options,
  moduleLabel,
}: {
  question: string
  options: PollOption[]
  moduleLabel: string
}) {
  const [voted, setVoted] = useState<number | null>(null)
  const hasVoted = voted !== null

  return (
    <section className="bg-[#3E7B88] px-5 pb-8 pt-6 text-white">
      {/* Author header */}
      <div className="flex items-center gap-3">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-maroon">
          <img
            src="/figma/pinecone-icon.svg"
            alt=""
            className="h-8 w-auto"
            aria-hidden="true"
          />
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[19px] font-bold leading-tight">
              Pinecone by Stanford
            </span>
            <ShieldCheck className="h-5 w-5 fill-[#5b7cc4] text-white" />
            <Star className="h-5 w-5 fill-[#f2c14e] text-[#f2c14e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#57d67d]" />
          </div>
          <p className="text-[15px] text-white/70">Posted 4mos ago</p>
        </div>
      </div>

      {/* Question */}
      <p className="mt-6 text-center text-[15px] font-medium uppercase tracking-wide text-white/85">
        Responses are public
      </p>
      <h2 className="mt-1 text-center text-[26px] font-bold leading-tight text-balance">
        {question}
      </h2>

      {/* Options */}
      <div className="mt-5 flex flex-col gap-3">
        {options.map((opt, i) => {
          const selected = voted === i
          return (
            <button
              key={opt.label}
              type="button"
              disabled={hasVoted}
              onClick={() => setVoted(i)}
              aria-pressed={selected}
              className={`relative min-h-[80px] w-full overflow-hidden rounded-2xl bg-[#173a44]/55 px-5 py-4 text-left transition active:scale-[0.99] ${
                selected ? 'ring-2 ring-white' : 'ring-1 ring-white/10'
              } ${hasVoted ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {/* Result fill bar */}
              {hasVoted && (
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 bg-[#5f9aa6] transition-[width] duration-700 ease-out"
                  style={{ width: `${opt.pct}%` }}
                />
              )}
              <span className="relative flex items-start justify-between gap-3">
                <span className="flex min-h-[48px] items-center text-[19px] font-medium leading-snug text-pretty">
                  {opt.label}
                </span>
                {hasVoted && (
                  <span className="flex shrink-0 flex-col items-end gap-1.5">
                    <span className="text-[18px] font-bold tabular-nums">
                      {opt.pct}%
                    </span>
                    <span className="flex -space-x-2">
                      {Array.from({
                        length: Math.max(1, Math.round(opt.pct / 20)),
                      }).map((_, a) => (
                        <img
                          key={a}
                          src={avatarPhoto(i, a) || '/placeholder.svg'}
                          alt=""
                          aria-hidden="true"
                          className="h-6 w-6 rounded-full object-cover ring-2 ring-[#3E7B88]"
                        />
                      ))}
                    </span>
                  </span>
                )}
              </span>
            </button>
          )
        })}
      </div>

      {/* Module label */}
      <p className="mt-6 text-[19px] text-white/80">{moduleLabel}</p>

      {/* Reactions row */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1a1a1a]">
            <SmilePlus className="h-6 w-6" strokeWidth={2} />
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1a1a1a]">
            <MessageSquare className="h-6 w-6" strokeWidth={2} />
          </span>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1a1a1a]">
          <Bookmark className="h-6 w-6" strokeWidth={2} />
        </span>
      </div>

      {/* Comment bar */}
      <div className="mt-6 flex items-center gap-3 rounded-full bg-white/25 px-4 py-3">
        <Plus className="h-6 w-6 shrink-0 text-white" strokeWidth={2.5} />
        <span className="text-[19px] text-white/70">Write a comment&hellip;</span>
      </div>
    </section>
  )
}
