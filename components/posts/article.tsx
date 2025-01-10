'use client'

import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Share2, Bookmark, ChevronLeft, Clock, Twitter, Linkedin, Copy, Heart, MessageSquare, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import DOMPurify from 'dompurify'
import { WordPressContent } from "./wordpress-content"

interface WordPressPost {
  title: { 
    rendered: string 
  }
  content: { 
    rendered: string 
  }
  date: string
  excerpt: {
    rendered: string
  }
  yoast_head_json?: {
    twitter_misc: {
      'Est. reading time': string
    }
  }
}

interface Author {
  name: string
  avatar_urls?: { 
    [key: string]: string 
  }
  id: number
  description?: string
  role?: string
}

interface Category {
  name: string
  id: number
}

interface FeaturedMedia {
  source_url: string
  alt_text?: string
}

interface ArticleProps {
  post: WordPressPost
  author: Author
  category: Category
  featuredMedia: FeaturedMedia
}

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="p-6 text-center" role="alert">
      <h2 className="text-lg font-semibold text-destructive">Something went wrong</h2>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
      <Button onClick={resetErrorBoundary} className="mt-4">Try again</Button>
    </div>
  )
}

export function Article({ post, author, category, featuredMedia }: ArticleProps) {
  console.log('post2',post)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    setIsLoading(false)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  const handleShare = async (platform?: string) => {
    const url = window.location.href
    const title = post.title.rendered

    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank', 'noopener,noreferrer')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer')
        break
      default:
        try {
          await navigator.clipboard.writeText(url)
          toast.success("Link copied to clipboard!")
        } catch {
          toast.error("Failed to copy link")
        }
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header with Progress Bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <Progress 
          value={scrollProgress} 
          className="h-1 rounded-none" 
          aria-label="Reading progress"
        />
        <nav className="container flex h-14 items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              <span>Articles</span>
            </Link>
          </Button>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="Like article"
            >
              <Heart className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="Comment on article"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="Share article"
              onClick={() => handleShare()}
            >
              <Share2 className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </nav>
      </header>

      <main className="container max-w-4xl pt-20">
        {/* Featured Image */}
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
          <Image
            src={featuredMedia.source_url}
            alt={featuredMedia.alt_text || ""}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Header */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Badge variant="secondary">{category.name}</Badge>
            <span className="text-muted-foreground" aria-hidden="true">·</span>
            <span className="text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>{post.yoast_head_json?.twitter_misc['Est. reading time'] || '5 min read'}</span>
            </span>
          </div>

          <h1 
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            dangerouslySetInnerHTML={{ 
              __html: DOMPurify.sanitize(post.title.rendered) 
            }}
          />

          <div className="flex items-center gap-4 py-4">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src={author.avatar_urls?.["96"]} alt={`${author.name}'s avatar`} />
              <AvatarFallback>{author.name?.[0]}</AvatarFallback>
            </Avatar>
            <div>
              <Link 
                href={`/authors/${author.id}`}
                className="font-medium hover:text-primary"
              >
                {author.name}
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <time dateTime={post.date}>{date}</time>
                <span aria-hidden="true">·</span>
                <Button variant="link" size="sm" className="h-auto p-0">
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
       
          <WordPressContent content={post.content.rendered} />
   
        {/* Article Footer */}
        <footer className="my-8 space-y-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2" role="list" aria-label="Article tags">
            <Badge variant="outline">Project Management</Badge>
            <Badge variant="outline">Microsoft Project</Badge>
            <Badge variant="outline">Best Practices</Badge>
          </div>

          {/* Engagement */}
          <div className="flex items-center justify-between rounded-lg border bg-card p-4">
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="h-4 w-4" aria-hidden="true" />
                <span>425</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                <span>48</span>
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare('twitter')}
                aria-label="Share on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare('linkedin')}
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare()}
                aria-label="Copy link"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="rounded-lg border bg-card p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2">
                  <AvatarImage src={author.avatar_urls?.["96"]} alt={`${author.name}'s avatar`} />
                  <AvatarFallback>{author.name?.[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{author.name}</h3>
                  <p className="text-sm text-muted-foreground">{author.role || 'Project Management Expert'}</p>
                </div>
              </div>
              <Button>Follow</Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {author.description || 'Microsoft MVP and certified project management professional with over 10 years of experience in digital transformation and agile methodologies.'}
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

