'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="relative w-full border-t bg-background">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand and Description */}
          <div className="col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://mpug.com/wp-content/uploads/2024/04/MPUG-Logo-01.webp"
                alt="MPUG Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              MPUG is your premier destination for Microsoft Project training,
              certification, and professional development. Join our community of
              project management experts.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://facebook.com" target="_blank">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://youtube.com" target="_blank">
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground">
                Courses
              </Link>
              <Link href="/certifications" className="text-sm text-muted-foreground hover:text-foreground">
                Certifications
              </Link>
              <Link href="/resources" className="text-sm text-muted-foreground hover:text-foreground">
                Resources
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Support</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                FAQs
              </Link>
              <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">
                Help Center
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@mpug.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Project St, Suite 100<br />Seattle, WA 98101</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates, tips, and special offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-[240px]"
              />
              <Button type="submit" className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MPUG. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}