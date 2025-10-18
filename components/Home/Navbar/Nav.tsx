import { navLinks } from "@/constant/constant"
import Link from "next/link"
import { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr"
import { HiBars3BottomRight } from "react-icons/hi2"

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY <= 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={`w-full h-[12vh] ${navBg ? "bg-white shadow-md" : ""} fixed transition-all duration-200 z-[100]`}>
      <div className=" w-[90%] h-full mx-auto flex items-center justify-between xl:w-[80%]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-700 flex items-center justify-center rounded-full">
            <GrTechnology className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl text-blue-700 font-bold hidden sm:block md:text-2xl">StraTech</h3>
        </div>
        {/* Navlinks */}
        <ul className="hidden lg:flex items-center space-x-8">
          {
            navLinks.map(link =>
              <li key={link.id} className="text-black font-semibold hover:text-rose-500 transition-all duration-200">
                <Link href={link.url}>{link.label}</Link>
              </li>
            )
          }
        </ul>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg
                className="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                // strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"

              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  // d="M5 12h14M12 5l7 7-7 7" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Create Account
            </span>
          </button>
          <button>
            <HiBars3BottomRight onClick={openNav} className="w-8 h-8 text-black cursor-pointer lg:hidden" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav