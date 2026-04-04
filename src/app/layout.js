import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: "James Fisher | Fullstack Software Engineer",
  description: "Portfolio site for James Fisher, a fullstack software engineer specializing in React, Next.js, and Spring Boot.",
}
export default function RootLayout({children}) {
  return (
    <html lang="en">
      
      <body suppressHydrationWarning>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}