import FeatureBox from "@/components/Home/Features/FeatureBox"
import Image from "next/image"
import { GoWorkflow } from "react-icons/go"
import { LuPen } from "react-icons/lu"
import { MdAccessAlarm, MdOutlineTouchApp } from "react-icons/md"

const Features = () => {
      return (
            <div id="features" className="bg-gray-100 py-16">
                  <div>
                        <h2 className="text-2xl text-center font-bold text-blue-950"> Key Features We Provide</h2>
                        <p className="w-[90%] sm:w-[70%] md:w-[50%] mx-auto mt-3 text-center text-gray-700 font-medium">
                              Our solutions are built for performance, reliability, and seamless business scaling —
                              helping you achieve more with less effort.
                        </p>
                  </div>
                  {/* Main Grid Container */}
                  <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                        {/* Inner grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                              {/* Box */}
                              <FeatureBox
                                    aos="fade-right"
                                    aosPlacement="top-center"
                                    heading={"App Integration"}
                                    description={"Connect and sync your tools to create a unified, efficient, and automated workflow across your business."}
                                    icon={<MdOutlineTouchApp className="w-6 h-6 text-orange-400" />} />
                              <FeatureBox
                                    aos="fade-right"
                                    aosPlacement="top-center"
                                    aosDelay="100"
                                    heading={"Workflow Builder"}
                                    description={"Design, automate, and optimize your internal processes with an intuitive and scalable workflow system."}
                                    icon={<GoWorkflow className="w-6 h-6 text-orange-400" />} />
                              <FeatureBox
                                    aos="fade-right"
                                    aosPlacement="top-center"
                                    aosDelay="200"
                                    heading={"Digital Design"}
                                    description={"Craft stunning digital experiences with modern, accessible, and user-focused design systems."}
                                    icon={<LuPen className="w-6 h-6 text-orange-400" />} />
                              <FeatureBox
                                    aos="fade-right"
                                    aosPlacement="top-center"
                                    aosDelay="300"
                                    heading={"Lifetime Access"}
                                    description={"Gain permanent access to updates, features, and improvements without recurring subscription fees."}
                                    icon={<MdAccessAlarm className="w-6 h-6 text-orange-400" />} />
                        </div>
                        {/* Image content */}
                        <div data-aos="fade-left"
                                    data-aos-anchor-placement="top-center"
                                    data-aos-delay="400">
                              <Image src={"/images/f1.png"} alt="feature" width={700} height={700} />
                        </div>
                  </div>
            </div>
      )
}

export default Features