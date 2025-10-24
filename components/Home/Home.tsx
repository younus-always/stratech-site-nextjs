"use client"
import { useEffect } from "react"
import About from "./About/About"
import ClientReview from "./ClientReview/ClientReview"
import Features from "./Features/Features"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Pricing from "./Pricing/Pricing"
import Services from "./Services/Services"
import Team from "./Team/Team"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

      useEffect(() => {
            const initAos = () => {
                  AOS.init({
                        duration: 1000,
                        easing: "ease",
                        once: true,
                        anchorPlacement: "bottom-top"
                  })
            };
            initAos();
      }, [])

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