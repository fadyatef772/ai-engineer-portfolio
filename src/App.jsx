import { Toaster } from 'react-hot-toast'
import Loader from './components/layout/Loader'
import Cursor from './components/layout/Cursor'
import ScrollProgress from './components/layout/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Expertise from './components/sections/Expertise'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Certificates from './components/sections/Certificates'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-bg">
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#15151c',
            color: '#ede9e0',
            border: '1px solid rgba(237,233,224,0.12)',
            fontSize: '13px',
            borderRadius: '999px',
          },
        }}
      />
    </div>
  )
}
