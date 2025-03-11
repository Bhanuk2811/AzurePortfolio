import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js",
    date: "March 5, 2025",
    readTime: "5 min read",
    category: "Development",
  },
  {
    id: 2,
    title: "Styling with Tailwind CSS",
    description: "A comprehensive guide to using Tailwind CSS in your projects",
    date: "February 28, 2025",
    readTime: "8 min read",
    category: "Design",
  },
  {
    id: 3,
    title: "Building a Portfolio Website",
    description: "Step-by-step guide to creating your own portfolio website",
    date: "February 20, 2025",
    readTime: "10 min read",
    category: "Tutorial",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mt-5">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="transition-transform hover:-translate-y-1">
              <Card className="h-full bg-background border border-gray-800">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.category}</div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <span className="text-sm font-medium text-primary">Read more →</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

