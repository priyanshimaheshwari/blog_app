import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { ThemeProvider } from '../context/ThemeContext'
import AuthProvider from '../components/AuthProvider/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mania',
  description: 'This is the decription',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
        <div className='container'>
        <Navbar />
        {children}
        <Footer />
          </div>
          </AuthProvider>
          </ThemeProvider>
        </body>
        </html>
  )
}
