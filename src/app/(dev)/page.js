export default function DevHome() {
  return (
    <main className="min-h-screen bg-black flex flex-col pt-10 items-center px-8 gap-10 md:flex-row md:justify-between md:px-16">
      <section className="flex flex-col gap-6 items-start">
        <h1 className="text-4xl md:text-6xl font-bold text-white">James Fisher</h1>
        <h2 className="text-2xl text-yellow-400">Full Stack Developer</h2>
        <p className="text-gray-300 text-lg max-w-xl">I build clean, efficient web apps with a focus on a great user experience</p>
        <div className="flex flex-col gap-3 w-fit">
          <a href="/portfolio" className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors">Check out some of my projects!</a>
          <a href="/contact" className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition-colors">Contact me!</a>
        </div>
      </section>
      <section>
        <img src="/Headshot.jpg" alt="James Fisher Headshot" className="w-48 h-48 md:w-100 md:h-100 rounded-full object-cover"/>
      </section>
    </main>
  )
}