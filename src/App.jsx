import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Certifications from './components/sections/Certifications'
import Services from './components/sections/Services'
import Achievements from './components/sections/Achievements'
import Testimonials from './components/sections/Testimonials'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="bg-dark min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Services />
        <Achievements />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
