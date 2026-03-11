'use client'
import { usePathname } from "next/navigation";

export default function DevNavbar(){
    const pathname = usePathname()
    const pageTitle = pathname.split('/').pop()
    let formatted = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
    if (formatted === "Dev"){
        formatted = "Home"
    }
    return(
        <nav className="sticky top-0 z-50 bg-black px-8 py-4 flex items-center gap-6 border-b border-white">
            <a href="/dev" className="text-white hover:text-yellow-400 transition-colors">James Fisher</a>
            <a href="/dev/about" className="text-white hover:text-yellow-400 transition-colors">About</a>
            <a href="/dev/contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
            <a href="/dev/portfolio" className="text-white hover:text-yellow-400 transition-colors">Portfolio</a>
            <a href="/dev/resume" className="text-white hover:text-yellow-400 transition-colors">Resume</a>
            <span className="absolute left-1/2 -translate-x-1/2 text-white">{formatted}</span>
        </nav>
    )
}