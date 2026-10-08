import { notFound } from 'next/navigation'
import { CourseScreen } from '@/components/course-screen'
import { courseModules } from '@/lib/course-data'

export function generateStaticParams() {
  return Object.keys(courseModules).map((id) => ({ id }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const module = courseModules[id]
  if (!module) notFound()

  return (
    <div className="flex min-h-dvh justify-center bg-secondary">
      <div className="relative w-full max-w-[402px] overflow-hidden bg-white shadow-xl sm:my-6 sm:min-h-0 sm:rounded-[40px]">
        <CourseScreen module={module} />
      </div>
    </div>
  )
}
