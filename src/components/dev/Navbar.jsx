'use client'
import { usePathname } from "next/navigation";

export default function DevNavbar(){

    const links = [
        { href: '/dev', label: 'Home' },
        { href: '/dev/about', label: 'About'},
        { href: '/dev/contact', label: 'Contact'},
        { href: '/dev/portfolio', label: 'Portfolio'},
        { href: '/dev/resume', label: 'Resume'}

    ]
    const pathname = usePathname()
    return(
        <nav className="sticky top-0 z-50 bg-black px-4 py-3 flex items-center gap-2 border-b border-white md:px-8 md:py-6 md:gap-6">
            {links.map((link) => (
                <a key={link.href} href={link.href} className={`${pathname === link.href ? 'text-red-500' : 'text-white'} border-b hover:text-yellow-500`}>
                    {link.label}
                </a>
            ))}
        </nav>
    )
}