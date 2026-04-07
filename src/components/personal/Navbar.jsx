export default function Navbar(){
    return(
        <nav className="sticky top-0 z-50 bg-black px-8 py-4 flex items-center gap-6">
            <a href="/personal" className="text-white hover:text-yellow-400 transition-colors">James Fisher</a>
            <a href="/personal/about" className="text-white hover:text-yellow-400 transition-colors">About</a>
            <a href="/personal/contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
            <a href="/personal/portfolio" className="text-white hover:text-yellow-400 transition-colors">Portfolio</a>
            <a href="/personal/resume" className="text-white hover:text-yellow-400 transition-colors">Resume</a>
        </nav>
    )
}