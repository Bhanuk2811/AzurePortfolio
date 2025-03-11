import { SocialLinks } from "./social-links"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 relative z-20">
      <div className="container flex flex-col items-center justify-center gap-4">
        <SocialLinks />
        <p className="text-center text-sm text-muted-foreground">
          Built and maintained by <span className="font-medium">YourName</span>
        </p>
      </div>
    </footer>
  )
}

