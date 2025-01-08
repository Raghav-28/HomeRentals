import About from "../components/About"
import Achievements from "../components/Achievements"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Properties from "../components/Properties"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <main className="h-[2222px] bg-gradient-to-r from-primary via-white to-white ">
        <Hero/>
        <Features/>
        <Achievements/>
        <Properties/>
        <About/>
        <Testimonials/>

    </main>
  )
}

export default Home
