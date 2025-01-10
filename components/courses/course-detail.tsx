'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {
  BookOpen,
  Clock,
  GraduationCap,
  Trophy,
  Users,
  CheckCircle,
  ArrowLeft,
  LockKeyhole,
  AlertCircle
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Separator } from "../ui/separator"

interface CourseDetailProps {
  course: {
    title: { rendered: string }
    content: { rendered: string }
    excerpt: { rendered: string }
    date: string
    link: string
    meta: {
      sensei_course_skill_level?: string
      sensei_course_audience?: string
      _course_prerequisite?: number
      _course_featured?: string
    }
    yoast_head_json?: {
      og_image?: Array<{
        url: string
        width: number
        height: number
      }>
      description?: string
    }
    class_list: string[]
    course_membership_products: any[]
  }
}

export function CourseDetail({ course }: CourseDetailProps) {
  const isRestricted = course.class_list.includes('access-restricted')
  const estimatedTime = "2-3 hours" // You can calculate this based on content length
  const pdus = "3 PDUs" // This could come from course meta

  // Clean HTML content by removing membership messages
  const cleanHtml = (html: string) => {
    return html.split('<div class="woocommerce">')[0]
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/courses" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Courses
            </Link>
          </Button>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Course Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  <Trophy className="mr-2 h-4 w-4" />
                  {pdus}
                </Badge>
                {course.meta.sensei_course_skill_level && (
                  <Badge variant="outline">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    {course.meta.sensei_course_skill_level}
                  </Badge>
                )}
              </div>

              <h1 
                className="text-4xl font-bold tracking-tight"
                dangerouslySetInnerHTML={{ __html: course.title.rendered }}
              />

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{estimatedTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{course.meta.sensei_course_audience || 'All Levels'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Certificate of Completion</span>
                </div>
              </div>
            </div>

            {/* Course Image */}
            {course.yoast_head_json?.og_image?.[0] && (
              <div className="relative aspect-video overflow-hidden rounded-lg border">
                <Image
                  src={course.yoast_head_json.og_image[0].url}
                  alt={course.title.rendered}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Access Alert */}
            {isRestricted && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Membership Required</AlertTitle>
                <AlertDescription>
                  This course requires an active membership to access. Please purchase a membership to continue.
                </AlertDescription>
              </Alert>
            )}

            {/* Course Content */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ 
                __html: cleanHtml(course.content.rendered)
              }} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
                <CardDescription>
                  What youll learn in this course
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {['Project planning fundamentals', 'Resource management', 'Risk assessment', 'Stakeholder communication'].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{estimatedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">PDUs:</span>
                    <span className="font-medium">{pdus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Level:</span>
                    <span className="font-medium">{course.meta.sensei_course_skill_level || 'All Levels'}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {isRestricted ? (
                  <Button className="w-full" asChild>
                    <Link href="/membership">
                      <LockKeyhole className="mr-2 h-4 w-4" />
                      Join to Access
                    </Link>
                  </Button>
                ) : (
                  <Button className="w-full" asChild>
                    <Link href={`${course.link}/lessons`}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Start Learning
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>

            {course.meta._course_prerequisite && (
              <Card>
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Complete these courses first
                  </p>
                  {/* Add prerequisite courses list here */}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}