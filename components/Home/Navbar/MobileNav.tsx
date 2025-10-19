import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
      showNav: boolean;
      closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {

      const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-10000px]';

      return (
            <div>
                  {/* Overlay */}
                  <div className={`fixed ${navOpen} w-full h-screen bg-black transform transition-all duration-500 ease-in-out opacity-70 z-[1002]`}></div>
                  {/* NavLinks */}
                  <ul className={`fixed ${navOpen} h-full w-[80%] sm:w-[60%] bg-blue-900 text-white flex flex-col justify-center space-y-6 transform transition-all duration-500 delay-300 ease-in-out z-[1050]`}>
                        {
                              navLinks.map(link =>
                                    <li key={link.id}>
                                          <Link href={link.url} onClick={closeNav}>
                                                <span className='w-fit text-white text-xl sm:text-3xl border-b-2 border-white hover:border-slate-400 transition-all duration-300 pb-1 ml-12'>{link.label}</span>
                                          </Link>
                                    </li>
                              )
                        }
                        {/* Close icon */}
                        <CgClose onClick={closeNav} className='w-6 h-6 sm:w-8 sm:h-8 absolute top-6 right-5 cursor-pointer' />
                  </ul>
            </div>
      )
}

export default MobileNav