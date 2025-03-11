import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock projects data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Stripe",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 3,
    title: "Personal Blog",
    description: "A blog built with Next.js and MDX for content management",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    link: "#",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="bg-background border border-gray-800">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={project.link} className="text-sm font-medium text-primary hover:underline">
                  View Project →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

