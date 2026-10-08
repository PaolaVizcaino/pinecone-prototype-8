'use client'

import Link from 'next/link'
import { FileText, Headphones, ChevronRight } from 'lucide-react'
import { StatusBar } from './status-bar'

const experiences = [
  {
    href: '/lesson',
    icon: FileText,
    title: 'Written lesson + poll',
    desc: 'Read a lesson and answer the poll.',
  },
  {
    href: '/podcast',
    icon: Headphones,
    title: 'Podcast',
    desc: 'Listen to a lesson episode.',
  },
]

export function LauncherScreen() {
  return (
    <div className="flex min-h-full flex-col bg-[#f4f2ef]">
      <div className="bg-[#8A2338]">
        <StatusBar variant="light" />
        <header className="flex items-center gap-3 px-6 pb-6 pt-2">
          <img src="/brand/pinecone-logo.png" alt="Pinecone" className="h-8 w-auto" />
        </header>
      </div>

      <main className="flex-1 px-5 pb-10 pt-7">
        <h1 className="text-[30px] font-extrabold leading-tight text-[#1a1a1a] text-balance">
          Choose an experience
        </h1>
        <p className="mt-2 text-[18px] text-[#5a5a5a]">Pick a flow to preview.</p>

        <div className="mt-6 flex flex-col gap-4">
          {experiences.map((exp) => {
            const Icon = exp.icon
            return (
              <Link
                key={exp.href}
                href={exp.href}
                className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-[0_2px_14px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition active:scale-[0.99]"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1F7D6B] text-white">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[20px] font-bold leading-tight text-[#1a1a1a]">
                    {exp.title}
                  </span>
                  <span className="mt-0.5 block text-[16px] leading-snug text-[#5a5a5a] text-pretty">
                    {exp.desc}
                  </span>
                </span>
                <ChevronRight className="h-6 w-6 shrink-0 text-[#b5b5b5]" />
              </Link>
            )
          })}
        </div>
      </main>

      <div className="flex justify-center pb-2">
        <div className="h-[5px] w-32 rounded-full bg-black/80" />
      </div>
    </div>
  )
}
