import About from "./About/About"
import ClientReview from "./ClientReview/ClientReview"
import Features from "./Features/Features"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Pricing from "./Pricing/Pricing"
import Services from "./Services/Services"
import Team from "./Team/Team"

const Home = () => {
      return (
            <div className="overflow-hidden">
                  <Hero />
                  <About />
                  <Features />
                  <Services />
                  <ClientReview />
                  <Team />
                  <Pricing />
                  <Footer />
            </div>
      )
}

export default Home