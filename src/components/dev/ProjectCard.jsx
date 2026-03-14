export default function ProjectCard({ project }){
    return (
        <div className="flex flex-col justify-center text-center pl-5 pr-5 border border-white pb-5 pt-5">
            <h1 className="text-2xl font-bold"> {project.title}</h1>
            <p> Created: {project.date}</p>
            <p className="h-24 overflow-hidden"> {project.description}</p>
            <div className="flex flex-wrap justify-center gap-2">
            {project.stack.map((tech) => (
                <span key={tech} className="border border-gray-500 px-2 py-1 rounded-full text-sm">{tech}</span>
            ))}
            </div>
            <img src= {project.image} alt={project.title} className="pt-5 pb-5"/>
            <div className="flex-grow" /> {/* this pushes buttons to bottom */}
            <a href={project.github} target="_blank" className="border border-white rounded hover:bg-white hover:text-black cursor-pointer transition"> Github </a>
            <a href={project.live} target="_blank" className="border border-white rounded hover:bg-white hover:text-black cursor-pointer transition"> Live Demo </a>
        </div>
    )
}