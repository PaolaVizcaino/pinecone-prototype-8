import { NativeOnboarding } from '@/components/native-onboarding'

export default function Page() {
  return (
    <div className="flex min-h-dvh justify-center bg-secondary">
      <div className="relative flex w-full max-w-[402px] flex-col overflow-hidden bg-white shadow-xl sm:my-6 sm:min-h-0 sm:rounded-[40px]">
        <NativeOnboarding />
      </div>
    </div>
  )
}
