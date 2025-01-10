import CompanyLogos from "@/components/home/company-logos";
import { FeaturedCourses } from "@/components/home/featured-courses";
import HeroSection from "@/components/home/hero-section";
import { RecentArticles } from "@/components/home/recent-articles";
import { getAllCourses, getPostsByCategorySlug } from "@/lib/wordpress";

export default async function Home() {
const courses = await getAllCourses();
const articles = await getPostsByCategorySlug('articles');
console.log(articles.slice(0,3))

  return (
    <div className="flex min-h-screen flex-col">
     
      <main className="flex-1">
        <HeroSection />
        <FeaturedCourses courses={courses} />
        <CompanyLogos />
        <RecentArticles articles={articles} />
      </main>
    </div>
  )
}

