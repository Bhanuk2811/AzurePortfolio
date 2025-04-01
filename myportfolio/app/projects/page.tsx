import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Updated Project Data with Correct Image Paths
const projects = [
  {
    id: 1,
    title: "Online Image Editor",
    description: "A full-featured Image Editor platform built with JavaScript.",
    image: "/images/img-editor.png", // Ensure it's inside the 'public/images' folder
    tags: ["React.js", "JavaScript", "Tailwind CSS"],
    link: "https://online-image.vercel.app/",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects.",
    image: "/images/task-manager-ui.png",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "https://your-task-app.com",
  },
  {
    id: 3,
    title: "Personal Blog",
    description: "A blog built with Next.js and MDX for content management.",
    image: "/images/blog-preview.jpg",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    link: "https://your-blog.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          My Projects
        </h1>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border border-gray-800 shadow-lg rounded-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative h-60 w-full rounded-t-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={800}
                  className="object-cover rounded-lg"
                />
              </div>
              <CardHeader className="p-6">
                <CardTitle className="text-2xl font-semibold">{project.title}</CardTitle>
                <CardDescription className="text-lg">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6">
                <Link
                  href={project.link}
                  className="text-lg font-medium text-primary hover:underline"
                >
                  View Project →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
