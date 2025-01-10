'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock, 
  Users, 
  BookOpen,
  Target,
  GraduationCap,
  ArrowRight,
  Trophy,
  Bookmark,
  ChevronRight
} from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Course } from "@/lib/wordpress.d"

interface FeaturedCoursesProps {
  courses: Course[]
}

export function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  // Helper function to clean HTML content
  const cleanHtml = (html: string) => {
    return html.split('<div class="woocommerce">')[0]
  }

  // Helper to get estimated reading time
  const getEstimatedTime = (audience?: string) => {
    if (!audience) return "2-3 hours"
    const words = audience.split(" ").length
    const minutes = Math.ceil(words / 200)
    return `${minutes} hours`
  }

  return (
    <section className="relative w-full py-20">
      <div className="absolute inset-0 bg-grid-black/5 [mask-image:radial-gradient(white,transparent_85%)] animate-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="container relative px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Trophy className="h-4 w-4" />
            MPUG Training Courses
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Level Up Your PM Skills
          </h2>
          <p className="max-w-[800px] text-lg text-muted-foreground">
            Expert-led training courses designed for project managers at every level.
            Earn PDUs while mastering Microsoft Project and PM best practices.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card 
              key={course.id}
              className="group relative flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <Link href={`/courses/${course.slug}`} className="absolute inset-0 z-10" aria-label={course.title.rendered}>
                <span className="sr-only">View course details</span>
              </Link>

              {/* Course Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                {course.yoast_head_json?.og_image?.[0]?.url ? (
                  <>
                    <Image
                      src={course.yoast_head_json.og_image[0].url}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </>
                ) : (
                  <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-primary/40" />
                  </div>
                )}
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                  {course.meta.sensei_course_skill_level && (
                    <Badge className="bg-black/60 backdrop-blur-sm border-none">
                      <Target className="mr-1 h-3 w-3" />
                      {course.meta.sensei_course_skill_level}
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-primary text-primary-foreground border-none">
                    <Trophy className="mr-1 h-3 w-3" />
                    3 PDUs
                  </Badge>
                </div>
              </div>

              <CardContent className="flex flex-col flex-1 p-6">
                {/* Title & Description */}
                <div className="space-y-2 mb-4">
                  <CardTitle 
                    className="text-xl font-semibold leading-tight"
                    dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                  />
                  <CardDescription className="line-clamp-2">
                    {course.yoast_head_json?.description || cleanHtml(course.excerpt.rendered)}
                  </CardDescription>
                </div>

                {/* Course Meta Info */}
                <div className="mt-auto space-y-4">
                  <div className="grid grid-cols-2 gap-4 py-4 border-t">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {getEstimatedTime(course.meta.sensei_course_audience)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Certificate</span>
                    </div>
                  </div>

                  <Button asChild className="w-full relative z-20">
                    <Link 
                      href={`/courses/${course.slug}`}
                      className="flex items-center justify-center gap-2"
                    >
                      View Course
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
  <Button 
    variant="outline" 
    size="lg"
    className="group text-primary hover:bg-primary hover:text-white border-primary/20"
    asChild
  >
    <Link href="/courses" className="flex items-center gap-2">
      View All Courses
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  </Button>
</div>
      </div>
    </section>
  )
}