export default function DevHome() {
  return (
    <main className="min-h-screen bg-black flex items-center px-16 justify-between">
      <section className="flex flex-col gap-6">
        <h1 className="text-6xl font-bold text-white">James Fisher</h1>
        <h2 className="text-2xl text-yellow-400">Full Stack Developer</h2>
        <p className="text-gray-300 text-lg max-w-xl">I build clean, efficient web apps with a focus on a great user experience</p>
        <div className="flex flex-col md:flex-row">
        <a href="/dev/portfolio" className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors">Check out some of my projects!</a>
        <a href="/dev/contact" className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition-colors">Contact me!</a>
        </div>
      </section>
      <section className="pr-48">
        <img src="/Headshot.jpg" alt="James Fisher Headshot" className="w-100 h-100 rounded-full object-cover"/>
      </section>
    </main>
  )
}