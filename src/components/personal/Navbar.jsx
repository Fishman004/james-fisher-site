export default function Navbar(){
    return(
        <nav className="sticky top-0 z-50 bg-black px-8 py-4 flex items-center gap-6">
            <a href="/" className="text-white hover:text-yellow-400 transition-colors">James Fisher</a>
            <a href="/about" className="text-white hover:text-yellow-400 transition-colors">About</a>
            <a href="/contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
            <a href="/portfolio" className="text-white hover:text-yellow-400 transition-colors">Portfolio</a>
            <a href="/resume" className="text-white hover:text-yellow-400 transition-colors">Resume</a>
        </nav>
    )
}