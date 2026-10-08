'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { Play, Pause, Check, X } from 'lucide-react'
import { StatusBar } from './status-bar'

function formatTime(s: number) {
  if (!Number.isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

// Static waveform bar heights (in %) for the scrubber illustration.
const BARS = [
  30, 55, 40, 70, 45, 85, 60, 35, 50, 75, 42, 62, 90, 48, 38, 66, 52, 80, 44,
  58, 34, 72, 46, 88, 54, 40, 68, 50, 78, 42, 60, 36, 82, 48, 64, 52, 74, 44,
  56, 38,
]

export function PodcastScreen() {
  const [playing, setPlaying] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [duration, setDuration] = useState(0)
  const [complete, setComplete] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      void audio.play()
    } else {
      audio.pause()
    }
  }

  const seekToBar = (index: number) => {
    const audio = audioRef.current
    if (!audio || !Number.isFinite(audio.duration)) return
    audio.currentTime = ((index + 0.5) / BARS.length) * audio.duration
  }

  const pct = duration ? (elapsed / duration) * 100 : 0
  const activeBars = Math.round((pct / 100) * BARS.length)

  return (
    <div className="flex min-h-full flex-col bg-white">
      <StatusBar variant="dark" />

      <audio
        ref={(node) => {
          audioRef.current = node
          if (node && Number.isFinite(node.duration) && node.duration > 0) {
            setDuration(node.duration)
          }
        }}
        src="/media/podcast-luna-vega.mp4"
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />


      {/* Header — X close button */}
      <div className="flex items-center px-5 pb-1 pt-1">
        <Link
          href="/"
          aria-label="Close podcast"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f0f0] text-[#1a1a1a] transition active:scale-95"
        >
          <X className="h-6 w-6" strokeWidth={2.5} />
        </Link>
      </div>

      {/* Written intro */}
      <article className="px-6 pt-3 text-[#1f1f1f]">
        <h1 className="text-[26px] font-extrabold leading-[1.2] text-balance">
          Podcast: Budget Like a Boss &mdash; Without Killing Your Vibe
        </h1>

        <p className="mt-6 text-[17px] leading-relaxed">
          Budgets only work if they work in real life. In this episode, host
          Daniel breaks down the budgeting habits of{' '}
          <span className="font-bold">
            Pinecone&rsquo;s fictional pop star Luna Vega
          </span>
          , and hears how she builds a plan that fits her lifestyle while still
          leaving room to save.
        </p>

        <p className="mt-5 text-[17px] leading-relaxed">
          Together they unpack lifestyle creep, knowing your numbers,{' '}
          <span className="font-bold">
            splitting fixed vs. variable expenses, paying yourself first (think
            ~10% auto-save), and using simple rules like 50/30/20
          </span>
          &mdash;plus why reviewing and adjusting beats perfection.
        </p>

        <p className="mt-5 text-[17px] leading-relaxed">
          <span className="font-bold">Ready to dive deeper?</span>
          <br />
          <span className="font-bold">Play</span> the podcast to hear how to keep
          your vibe and still save.
        </p>
      </article>

      {/* Podcast player card */}
      <div className="px-6 pt-7">
        <div className="overflow-hidden rounded-2xl bg-[#0d0d0d] text-white">
          {/* Cover: studio art + maroon banner overlay */}
          <div className="relative">
            <img
              src="/media/podcast-studio.png"
              alt="Illustrated Pinecone podcast recording studio"
              className="aspect-square w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-6 flex items-center gap-3 bg-maroon px-6 py-4 shadow-lg">
              <img
                src="/figma/pinecone-icon.svg"
                alt=""
                aria-hidden="true"
                className="h-11 w-auto shrink-0"
              />
              <div className="leading-none">
                <p className="text-[15px] font-semibold tracking-wide text-white/85">
                  THE
                </p>
                <p className="text-[30px] font-extrabold leading-[0.95] tracking-tight">
                  PINECONE
                </p>
                <p className="text-[15px] font-semibold tracking-[0.2em] text-white/85">
                  PODCAST
                </p>
              </div>
            </div>
          </div>

          {/* Episode title */}
          <div className="px-6 pb-2 pt-5 text-center">
            <h2 className="text-[26px] font-extrabold leading-tight">
              Budget Like a Boss
            </h2>
            <p className="mt-1 text-[14px] text-white/60">
              With host Daniel and Luna Vega
            </p>
          </div>

          {/* Waveform scrubber */}
          <div
            role="group"
            aria-label="Seek episode"
            className="flex w-full items-end gap-[3px] px-6 py-5"
          >
            {BARS.map((h, i) => (
              <button
                key={i}
                type="button"
                onClick={() => seekToBar(i)}
                aria-label={`Seek to ${Math.round(((i + 0.5) / BARS.length) * 100)}%`}
                className={`w-full rounded-full transition-colors ${
                  i < activeBars ? 'bg-teal' : 'bg-white/25'
                }`}
                style={{ height: `${Math.max(12, (h / 100) * 36)}px` }}
              />
            ))}
          </div>

          {/* Episode label bar */}
          <div className="mx-6 mb-6 flex items-center gap-4 rounded-md bg-white/10 px-4 py-3">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? 'Pause episode' : 'Play episode'}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal text-white transition active:scale-95"
            >
              {playing ? (
                <Pause className="h-4 w-4 fill-current" />
              ) : (
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              )}
            </button>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-semibold">
                Budget Like a Boss - Without Killing Your Vibe
              </p>
              <p className="text-[12px] tabular-nums text-white/60">
                {formatTime(elapsed)} / {formatTime(duration)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mark as complete footer */}
      <div className="mt-8 border-t border-[#eee] px-6 pb-6 pt-5">
        <p className="text-center text-[16px] font-bold text-[#1f1f1f]">
          Ready to move on to the next part?
        </p>
        <button
          type="button"
          onClick={() => setComplete((v) => !v)}
          aria-pressed={complete}
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-[19px] font-bold text-white transition active:scale-[0.99] ${
            complete ? 'bg-teal' : 'bg-[#0f7d8c]'
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
