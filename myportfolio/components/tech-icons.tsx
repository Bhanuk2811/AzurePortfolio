import Link from "next/link"

export function TechIcons() {
  const technologies = [
    { name: "Python", href: "https://python.org" },
    { name: "Node.js", href: "https://nodejs.org" },
    { name: "React", href: "https://reactjs.org" },
    { name: "Git", href: "https://git-scm.com" },
    { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "AWS", href: "https://aws.amazon.com" },
    { name: "C++", href: "https://isocpp.org" },
    { name: "R", href: "https://www.r-project.org" },
  ]

  return (
    <div className="flex flex-wrap gap-4 justify-center text-sm opacity-70">
      {technologies.map((tech, index) => (
        <div key={tech.name} className="flex items-center">
          {index > 0 && <span className="mx-2 text-gray-500">•</span>}
          <Link
            href={tech.href}
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {tech.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

