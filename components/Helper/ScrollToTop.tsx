"use client";
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
      const [isVisible, setIsVisible] = useState(false);

      // show hide functionality - button appears when user scrolls down
      useEffect(() => {
            const toggleVisibility = () => {
                  if (window.scrollY > 300) setIsVisible(true);
                  else setIsVisible(false);
            };
            window.addEventListener("scroll", toggleVisibility);
            return () => window.addEventListener("scroll", toggleVisibility);
      }, [])

      // scroll to top functionality
      const scrollToTop = () => {
            window.scrollTo({
                  top: 0,
                  behavior: "smooth"
            })
      };

      return (
            <div className="fixed bottom-3 right-3 animate-bounce">
                  {
                        isVisible && <button onClick={scrollToTop} className="w-10 h-10 bg-orange-500 rounded-full text-white flex items-center justify-center cursor-pointer"><FaArrowUp /></button>
                  }
            </div>
      )
}

export default ScrollToTop