import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col animate-in fade-in-50 duration-500">
      {/* Top Navigation */}
      <div className="container py-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/blog" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Hero Section with Featured Image */}
      <div className="relative w-full">
        <Skeleton className="h-[50vh] min-h-[400px] w-full" />
        
        <div className="container relative -mt-32 z-10">
          <div className="mx-auto max-w-3xl bg-background/80 backdrop-blur-sm p-8 rounded-lg">
            {/* Category */}
            <Skeleton className="h-6 w-24 mb-6" />
            
            {/* Title */}
            <div className="space-y-4 mb-8">
              <Skeleton className="h-12 w-[90%]" />
              <Skeleton className="h-12 w-[75%]" />
            </div>

            {/* Author and Meta Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-10 w-10 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Content Blocks */}
          <div className="space-y-4">
            <Skeleton className="h-8 w-[85%]" />
            <div className="space-y-3">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-[95%]" />
              <Skeleton className="h-6 w-[90%]" />
            </div>
          </div>

          {/* Image Block */}
          <Skeleton className="h-[400px] w-full rounded-lg" />

          {/* More Content Blocks */}
          <div className="space-y-4">
            <Skeleton className="h-8 w-[75%]" />
            <div className="space-y-3">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-[92%]" />
              <Skeleton className="h-6 w-[88%]" />
            </div>
          </div>

          <Separator className="my-12" />

          {/* Share Section */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-72" />
                <div className="flex flex-wrap gap-2 pt-2">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}