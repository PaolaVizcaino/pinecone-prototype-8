import { BenefitsLesson } from '@/components/benefits-lesson'

export default function Page() {
  return (
    <div className="flex min-h-dvh justify-center bg-secondary">
      <div className="relative w-full max-w-[402px] overflow-hidden bg-white shadow-xl sm:my-6 sm:min-h-0 sm:rounded-[40px]">
        <BenefitsLesson />
      </div>
    </div>
  )
}
