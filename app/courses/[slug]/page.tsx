import { getCourseBySlug } from "@/lib/wordpress"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { CourseDetail } from "@/components/courses/course-detail"

interface CoursePageProps {
  params: {
    slug: string
  }
}



export default async function CoursePage({ params }: CoursePageProps) {
  const course = await getCourseBySlug(params.slug)

  if (!course) {
    notFound()
  }

  return <CourseDetail course={course} />
}