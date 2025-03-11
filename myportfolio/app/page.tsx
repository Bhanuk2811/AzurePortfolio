import { TechIcons } from "@/components/tech-icons"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-2xl mx-auto mb-16">
        <h1 className="text-3xl font-bold mb-8">About</h1>

        <div className="space-y-6 text-lg">
          <p>
          I’m Bhanu Kaushal, a fourth-year Bachelor of Computer Information Systems student at the University of the Fraser Valley, with a strong interest in data analytics, DevOps, and cloud computing.
          I’m driven to create scalable, user-friendly solutions and continuously expand my technical expertise.
          </p>
          <p>
          My projects demonstrate skills in app development, usability testing, and system design, including a student information management system and a community-focused non-profit website. With a keen focus on cloud technologies, 
          I’m eager to explore new methods of optimizing data and application management.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto mb-16">
        <TechIcons />
      </section>
    </div>
  )
}

