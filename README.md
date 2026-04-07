# James Fisher — Portfolio Site

Personal portfolio site showcasing my projects, skills, and experience as a fullstack software engineer.

🌐 **Live:** [jamesfisher.io](https://jamesfisher.io)

## Tech Stack
- Next.js 15 / React
- Tailwind CSS
- Resend API
- Vercel

## Features
- Project showcase with live demo and GitHub links
- Contact form with email delivery via Resend API route
- Resume viewer with PDF download
- About page with skills and background
- Auto-deploys to Vercel on push to main

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1. Clone the repo
```bash
   git clone https://github.com/Fishman004/james-fisher-site.git
   cd james-fisher-site
```

2. Install dependencies
```bash
   npm install
```

3. Set up environment variables — create a `.env.local` file in the root:
```
   RESEND_API_KEY=your_resend_api_key
```

4. Run the development server
```bash
   npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) for contact form email delivery |

## Screenshots

![Portfolio Homepage](/public/PersonalSite.png)

## Contact

James Fisher — [jamesfisher.io/contact](https://jamesfisher.io/contact) — fishman4@me.com
