'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  ArrowRight, 
  BarChart2, 
  Search, 
  Trophy,
  
  Clock,
  Target,
  CheckCircle,
  Clock4,
  GanttChartSquare,
  Scale,
  Users2,
  CreativeCommons,
  CreativeCommonsIcon
} from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const popularSearches = [
    "PMP Exam Prep",
    "MS Project Tips",
    "Agile & Scrum",
    "Risk Analysis"
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0 bg-grid-black/5 [mask-image:radial-gradient(white,transparent_85%)] animate-grid" />
      
      <div className="container relative px-4 md:px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_450px] lg:gap-20 items-center">
          <div className="flex flex-col gap-6 relative">
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm backdrop-blur">
                <Trophy className="h-4 w-4 mr-2" />
                PMI Authorized Training Partner
              </Badge>
              <Badge variant="secondary" className="px-4 py-1.5 text-sm backdrop-blur">
                <CreativeCommons className="h-4 w-4 mr-2" />
                PDU Approved Courses
              </Badge>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Master Modern Project Management
                <span className="block text-primary">Excel in Your PM Career</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Get certified, earn PDUs, and stay ahead with the latest project management tools, frameworks, and best practices.
              </p>
            </div>
            
            {/* Search Section */}
            <div className="mt-4 space-y-4 max-w-2xl">
              <form onSubmit={handleSearch} className="relative group">
                <div className="relative flex gap-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur group-hover:blur-md transition-all" />
                    <Input
                      type="text"
                      placeholder="Search courses, certifications, or topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="relative w-full h-12 px-4 bg-background/80 backdrop-blur border-primary/20 hover:border-primary/30 focus:border-primary placeholder:text-muted-foreground text-base"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="h-12 px-6"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Find Resources
                  </Button>
                </div>
              </form>
              
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-muted-foreground">
                  Popular Topics:
                </span>
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="text-sm px-3 py-1 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* PM-focused Stats */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-primary/10">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Clock4 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">35 PDUs</div>
                    <div className="text-sm text-muted-foreground">Average Earned</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/10">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">94%</div>
                    <div className="text-sm text-muted-foreground">PMP Pass Rate</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/10">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Users2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15K+</div>
                    <div className="text-sm text-muted-foreground">PM Community</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/10">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <GanttChartSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-sm text-muted-foreground">PM Templates</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Course Preview Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-3xl" />
            <Card className="relative border-primary/10">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CreativeCommonsIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">PMP® Certification Path</h3>
                    <p className="text-sm text-muted-foreground">Complete Exam Preparation</p>
                  </div>
                </div>
                
                <div className="space-y-3 border-y py-4">
                  {[
                    'PMBOK® Guide Coverage',
                    'Practice Exams & Quizzes',
                    'Real-world Case Studies',
                    'Expert-led Sessions',
                    'Study Materials & Templates'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Course Completion</span>
                    <span className="font-medium">67%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 w-2/3 rounded-full bg-primary" />
                  </div>
                </div>

                <Button className="w-full gap-2">
                  Continue Learning
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}