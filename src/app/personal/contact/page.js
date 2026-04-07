'use client'
import {useState} from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    const res = await fetch("/api/contact", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, message})
    })
    const data = await res.json()
    if (data.success){
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } else{
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen flex items-start pt-16 justify-center">
      <div className="w-full max-w-lg px-8 border-b border-l border-r border-t border white">
        <h1 className = "text-3xl font-bold text-center pt-8 pb-8">
          Feel free to contact me!
        </h1>
        <div className="flex flex-col gap-4">
          <input className="bg-black text-white font-bold"
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input className="bg-black text-white font-bold"
            type = "email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea className="bg-black text-white font-bold"
            placeholder="Message"
            value={message}
            onChange={(e) =>setMessage(e.target.value)}
            rows={15}
          />
          <button
            onClick={handleSubmit}
            className="bg-black text-white font-bold py-2 rounded hover:bg-gray-300 hover:text-black cursor-pointer"
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>
          <div className="text-center pb-5">
            {status === 'success' && <p> Message Sent! </p>}
            {status === 'error' && <p> Something went wrong. Try again. </p>} 
          </div>
        </div>
      </div>
    </main>
  )
}
