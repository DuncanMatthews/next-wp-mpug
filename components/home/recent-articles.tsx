import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, ArrowRight, Newspaper, BookMarked, Sparkles } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Post } from "@/lib/wordpress.d"

interface RecentArticlesProps {
  articles: Post[]
}

export function RecentArticles({ articles }: RecentArticlesProps) {
  return (
    <section className="relative w-full py-20 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-black/5 [mask-image:radial-gradient(white,transparent_85%)] animate-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Newspaper className="h-4 w-4" />
            Latest Updates
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Project Management Insights
            </h2>
            <p className="max-w-[900px] text-lg text-muted-foreground md:text-xl">
              Stay ahead with the latest trends, expert tips, and best practices in project management.
            </p>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {articles.map((article) => (
            <Card key={article.id} className="group relative flex flex-col overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <Image
                    src={article.featured_image_src as string}
                    alt={article.title.rendered}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-black/60 text-white backdrop-blur-sm">
                      Article
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 space-y-4 p-6">
                <div className="space-y-3">
                  <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                    <Link href={`/posts/${article.slug}`}>
                      <div dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    <div dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
                  </CardDescription>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                  <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8 ring-2 ring-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt={article.author_info?.display_name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {article?.author_info?.display_name?.[0] || 'A'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium leading-none">{article.author}</p>
                      <p className="text-muted-foreground text-xs">Author</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full group/button text-white">
                  <Link href={`/posts/${article.slug}`} className="flex items-center justify-center gap-2">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-16">
        <Button variant="outline" size="lg" className="group relative overflow-hidden border-primary text-white">
          <span className="relative z-10 flex items-center gap-2">
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>
      </div>
      </div>
    </section>
  )
}