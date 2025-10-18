"use client"
import Nav from './Nav'
import MobileNav from './MobileNav'
import { useState } from 'react'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => setShowNav(true);
  const closeNav = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={openNav} />
      <MobileNav showNav={showNav} closeNav={closeNav} />
    </div>
  )
}

export default ResponsiveNav