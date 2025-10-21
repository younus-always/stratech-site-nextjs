import Boxtext from "@/components/Helper/Boxtext"
import ServiceBox from "@/components/Helper/ServiceBox"
import { FaShoppingCart } from "react-icons/fa"
import { FaBriefcase, FaChess, FaRocket } from "react-icons/fa6"
import { IoColorPaletteOutline } from "react-icons/io5"
import { MdOutlineDesignServices } from "react-icons/md"

const Services = () => {
      return (
            <div className="py-16">
                  <div className="w-[80%] mx-auto">
                        <Boxtext>Our Services</Boxtext>
                        {/* heading */}
                        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
                              Tailored Digital Services for Modern Businesses
                        </h1>
                        {/* description */}
                        <p className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-600 mt-4">
                              We help startups, brands, and enterprises build scalable digital products with strategy,
                              design, and technology that drive measurable growth and impact.
                        </p>
                        {/* grid container */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center mt-16">
                              {/* service box */}
                              <ServiceBox
                                    title="Startup Launch"
                                    subTitle="Build your MVP, validate ideas, and go to market faster with our end-to-end startup support."
                                    icon={<FaRocket className="w-6 h-6 text-orange-400" />}
                              />

                              <ServiceBox
                                    title="Business Solutions"
                                    subTitle="Custom digital solutions to streamline operations and improve business performance."
                                    icon={<FaBriefcase className="w-6 h-6 text-orange-400" />}
                              />

                              <ServiceBox
                                    title="E-Commerce"
                                    subTitle="From storefront to checkout — we develop fast, secure, and conversion-optimized shops."
                                    icon={<FaShoppingCart className="w-6 h-6 text-orange-400" />}
                              />

                              <ServiceBox
                                    title="Digital Design"
                                    subTitle="Modern and intuitive UI/UX design that improves engagement and user experience."
                                    icon={<MdOutlineDesignServices className="w-6 h-6 text-orange-400" />}
                              />

                              <ServiceBox
                                    title="Unlimited Color Themes"
                                    subTitle="Flexible design system with custom color palettes to match your brand identity."
                                    icon={<IoColorPaletteOutline className="w-6 h-6 text-orange-400" />}
                              />

                              <ServiceBox
                                    title="Strategy & Consulting"
                                    subTitle="Data-driven strategy to help you make better decisions and scale with confidence."
                                    icon={<FaChess className="w-6 h-6 text-orange-400" />}
                              />
                        </div>
                  </div>
            </div>
      )
}

export default Services