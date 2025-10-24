import Home from "@/components/Home/Home"
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav"
import ScrollToTop from "@/components/Helper/ScrollToTop"

const MainPage = () => {
  return (
    <div>
      <ResponsiveNav />
      <Home />
      <ScrollToTop />
    </div>
  )
}

export default MainPage