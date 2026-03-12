import ReactPDF from "../../../components/dev/ResumePdf.jsx"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="w-full text-center p-4">Below is my updated resume for Full-Stack Software Engineering roles.</div>
      <div className="pb-5">
      <a href="/JamesFisher_Resume.pdf" download className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-gray-300 cursor-pointer">
      Download Resume
      </a>
      </div>
      <ReactPDF />
    </main>
  )
}