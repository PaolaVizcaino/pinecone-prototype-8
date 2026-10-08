'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Play, Pause, Volume2, Maximize } from 'lucide-react'
import { StatusBar } from './status-bar'

const DURATION = 214 // 3:34

function formatTime(s: number) {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export function VideoScreen() {
  const [playing, setPlaying] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (playing) {
      timer.current = setInterval(() => {
        setElapsed((e) => (e >= DURATION ? DURATION : e + 1))
      }, 1000)
    }
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [playing])

  useEffect(() => {
    if (elapsed >= DURATION) setPlaying(false)
  }, [elapsed])

  const pct = (elapsed / DURATION) * 100

  return (
    <div className="flex min-h-full flex-col bg-[#0d0d0d] text-white">
      <StatusBar variant="light" />

      {/* Header */}
      <div className="flex items-center gap-3 px-5 pb-2 pt-1">
        <Link
          href="/"
          aria-label="Back to menu"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition active:scale-95"
        >
          <ArrowLeft className="h-6 w-6" strokeWidth={2.5} />
        </Link>
        <span className="text-[15px] font-semibold uppercase tracking-wide text-white/70">
          Video Lesson
        </span>
      </div>

      {/* Player */}
      <div className="relative mt-4 aspect-video w-full overflow-hidden bg-black">
        <img
          src="/media/video-poster.png"
          alt="Video poster"
          className={`h-full w-full object-cover transition ${
            playing ? 'brightness-90' : 'brightness-75'
          }`}
        />

        {/* Center play/pause */}
        <button
          type="button"
          aria-label={playing ? 'Pause' : 'Play'}
          onClick={() => setPlaying((p) => !p)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/55 text-white ring-1 ring-white/30 backdrop-blur-sm transition active:scale-95">
            {playing ? (
              <Pause className="h-8 w-8 fill-current" />
            ) : (
              <Play className="ml-1 h-8 w-8 fill-current" />
            )}
          </span>
        </button>

        {/* Bottom control bar */}
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8">
          <span className="text-[13px] tabular-nums text-white/90">
            {formatTime(elapsed)}
          </span>
          <div className="h-[4px] flex-1 rounded-full bg-white/30">
            <div
              className="h-full rounded-full bg-teal transition-[width] duration-500 ease-linear"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-[13px] tabular-nums text-white/90">
            {formatTime(DURATION)}
          </span>
          <Volume2 className="h-5 w-5 text-white/90" />
          <Maximize className="h-5 w-5 text-white/90" />
        </div>
      </div>

      {/* Info */}
      <main className="flex-1 px-5 pt-6">
        <p className="text-[15px] font-semibold uppercase tracking-wide text-teal">
          Lesson 1 &middot; Module 1
        </p>
        <h1 className="mt-2 text-[24px] font-extrabold leading-tight text-balance">
          You Are Your Own Chief Financial Officer (CFO)
        </h1>
        <p className="mt-3 text-[17px] leading-relaxed text-white/70">
          In this short lesson, Grace explains why treating yourself like the
          CFO of your own life is the first step toward financial confidence&mdash;and
          how small, intentional decisions compound over time.
        </p>

        <div className="mt-5 flex items-center gap-3">
          <img
            src="/crew/grace.png"
            alt=""
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="text-[16px] font-bold">Grace</p>
            <p className="text-[14px] text-white/60">Your Pinecone guide</p>
          </div>
        </div>
      </main>

      <div className="flex justify-center pb-3 pt-8">
        <div className="h-[5px] w-32 rounded-full bg-white/70" />
      </div>
    </div>
  )
}
