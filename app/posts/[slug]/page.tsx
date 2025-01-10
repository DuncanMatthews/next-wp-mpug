import { Article } from "@/components/posts/article";
import {
  getPostBySlug,
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress"
import { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered,
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt.rendered,
      type: 'article',
      publishedTime: post.date,
      authors: post.author_info ? [post.author_info.display_name] : [], // Ensure authors is an array of strings
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Fetch all data concurrently
  const post = await getPostBySlug(params.slug)
  const [featuredMedia, author, category] = await Promise.all([
    getFeaturedMediaById(post.featured_media),
    getAuthorById(post.author),
    getCategoryById(post.categories[0])
  ])

  return (
    <Article
      post={post}
      author={author}
      category={category}
      featuredMedia={featuredMedia}
    />
  )
}