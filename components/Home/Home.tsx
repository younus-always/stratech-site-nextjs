import About from "./About/About"
import Features from "./Features/Features"
import Hero from "./Hero/Hero"
import Services from "./Services/Services"

const Home = () => {
      return (
            <div className="overflow-hidden">
                  <Hero />
                  <About />
                  <Features />
                  <Services />
            </div>
      )
}

export default Home