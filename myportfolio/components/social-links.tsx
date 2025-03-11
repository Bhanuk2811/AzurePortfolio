import Link from "next/link"

export function SocialLinks() {
  const links = [
    { name: "X", href: "https://twitter.com/yourusername" },
    { name: "GitHub", href: "https://github.com/yourusername" },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { name: "Instagram", href: "https://instagram.com/yourusername" },
    { name: "Mail", href: "mailto:your.email@example.com" },
  ]

  return (
    <div className="flex flex-wrap gap-4 justify-center text-sm">
      {links.map((link, index) => (
        <div key={link.name} className="flex items-center">
          {index > 0 && <span className="mx-2 text-gray-500">•</span>}
          <Link
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

