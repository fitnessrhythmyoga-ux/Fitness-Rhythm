import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import Signature from './components/Signature'
import Courses from './components/Courses'
import Instructors from './components/Instructors'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#F3F1EC] min-h-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Signature />
        <Courses />
        <Instructors />
        <Reviews />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
