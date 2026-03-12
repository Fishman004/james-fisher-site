export default function About() {
  const githubLink = "https://github.com/Fishman004"
  const linkedInLink = "https://www.linkedin.com/in/james-fisher-9598ab212/"

  const skills = [
    "React", "Next.js", "JavaScript", "TypeScript",
    "Spring Boot", "Java", "Node.js", "Docker", "Git", "AWS"
  ]

  return (
    <main className="min-h-screen flex flex-col items-center px-8 pt-20">
      <div className="max-w-2xl w-full flex flex-col gap-10">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm James Fisher</h1>
          <p className="text-gray-400 text-lg">Fullstack Software Engineer · CS Student · May 2026</p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-4">
          <a href={githubLink} target="_blank" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition cursor-pointer">
            GitHub
          </a>
          <a href={linkedInLink} target="_blank" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition cursor-pointer">
            LinkedIn
          </a>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-4 text-gray-300 leading-relaxed">
          <p>
            I'm a Computer Science student at Cal State Monterey Bay graduating in May 2026. 
            I focus on fullstack web development: building clean, functional interfaces backed 
            by well-structured APIs. My current stack centers around React and Next.js on the 
            frontend and Spring Boot on the backend.
          </p>
          <p>
            Before pivoting fully into software, I worked at Apple where I developed a strong 
            foundation in technical troubleshooting and customer-facing communication. That 
            experience shaped how I think about building software: with the end user in mind.
          </p>
          <p>
            I'm actively looking for fullstack software engineering roles where I can contribute, 
            learn, and grow alongside a strong team.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="border border-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}