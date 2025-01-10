"use client"

import * as React from "react"
import Link from "next/link"
import { 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  Library, 
  Users,
  ShoppingCart,
  Search,
  User,
  Newspaper,
  Building2,
  GanttChartSquare,
  Briefcase,
  MessageCircle,
  Mail,
  Store
} from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface ListItemProps {
  title: string
  href: string
  children?: React.ReactNode
  icon?: React.ComponentType<{ className?: string }>
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & ListItemProps
>(({ className, title, href, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4" />}
            <span className="text-sm font-medium">{title}</span>
          </div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function MegaMenu() {
  return (
    <div className="border-b">
      <div className="container flex items-center justify-between h-16 gap-4 max-w-screen-2xl">
        {/* Logo or Brand - Left */}
        <div className="w-[150px]">
          {/* Add your logo here */}
        </div>

        {/* Navigation - Center */}
        <div className="flex-1 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Training</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px]">
                    <ListItem href="/articles" title="Articles" icon={Newspaper} />
                    <ListItem href="/courses" title="Courses" icon={GraduationCap} />
                    <ListItem href="/lessons" title="Lessons" icon={BookOpen} />
                    <ListItem href="/earn-pdus" title="Earn PDU's" icon={GanttChartSquare} />
                    <ListItem href="/events" title="Events" icon={Calendar} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary/90">
                  JOIN NOW
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px]">
                    <ListItem href="/join/individual" title="Individual" icon={User} />
                    <ListItem href="/join/business" title="Business" icon={Building2} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px]">
                    <ListItem href="/advertise" title="Advertise" icon={Store} />
                    <ListItem href="/careers" title="Career Opportunities" icon={Briefcase} />
                    <ListItem href="/forum" title="Discussion Forum" icon={MessageCircle} />
                    <ListItem href="/newsletter" title="Newsletter Sign-Up" icon={Mail} />
                    <ListItem href="/directory" title="Technology Products/Services" icon={Library} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* User Controls - Right */}
        <div className="flex items-center gap-2 w-[150px] justify-end">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Search className="h-5 w-5" />
          </Button>
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}