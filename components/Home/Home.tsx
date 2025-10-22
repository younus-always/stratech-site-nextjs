import About from "./About/About"
import ClientReview from "./ClientReview/ClientReview"
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
                  <ClientReview />
            </div>
      )
}

export default Home