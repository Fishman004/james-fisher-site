import ProjectCard from "../../../components/dev/ProjectCard"

export default function Home() {
      const projects = [
      {
          //WeatherNow
          title: "WeatherNow",
          description: "A full-stack weather app with user authentication, personalized preferences, and live forecast data by zipcode.",
          stack: ["Node.js", "Express", "PostgreSQL", "EJS"],
          date: "December, 2024",
          github: "https://github.com/Fishman004/WeatherNow",
          live: "https://weathernow-m2xt.onrender.com/",
          image: "/WeatherNow.png"
      },
      {
          //Personal Site
          title: "James Fisher Site",
          description: "A personal portfolio site built with Next.js and React, featuring a contact form backed by a custom API route and Resend email integration, a live resume viewer, and project showcase. Deployed to a custom domain via Vercel.",
          stack: ["Next.js", "React", "Tailwind", "Vercel"],
          date: "March, 2026",
          github: "https://github.com/Fishman004/james-fisher-site",
          live: "jamesfisher.io",
          image: "/PersonalSite.png"
      },
      {
          //F1 API
          title: "MotorRyx",
          description: "A team-built fullstack F1 data application featuring a Spring Boot REST API backend with OAuth2 authentication and a React frontend. Race and driver data is sourced and aggregated from public F1 statistics.",
          stack: ["Spring Boot", "React", "PostgreSQL"],
          date: "May, 2026",
          github: "null",
          live: "null",
          image: "/MotorRyx.png"
      },
      {
          //Journal App
          title: "FishForThoughts",
          description: "A full-stack journaling web app with user authentication, streak tracking, and a daily prompt dashboard. Built with Next.js and Supabase. Coming soon.",
          stack: ["Next.js","Spring Boot", "PostgreSQL"],
          date: "April, 2026",
          github: "null",
          live: "null",
          image: "/Placeholder.png"
      }

]
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="grid grid-cols-2 gap-6 pl-10 pr-10 max-w-4xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
      </div>
    </main>
  )
}