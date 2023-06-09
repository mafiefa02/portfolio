import './globals.css'
import { Lato } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const lato = Lato({
  subsets: ['latin'],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: '--font-lato'
})

export const metadata = {
  title: 'Afief Abdurrahman',
  description: 'Personal portfolio by your regular physics student.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${lato.variable} font-sans`} lang="en">
      <body className='overflow-y-scroll'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
