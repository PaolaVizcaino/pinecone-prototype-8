import { NativeLesson } from '@/components/native-lesson'

export default function Page() {
  return (
    <div className="flex min-h-dvh justify-center bg-secondary">
      <div className="relative flex h-dvh w-full max-w-[402px] flex-col overflow-hidden bg-white shadow-xl sm:my-6 sm:h-[calc(100dvh-3rem)] sm:rounded-[40px]">
        <NativeLesson />
      </div>
    </div>
  )
}
