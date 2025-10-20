import Boxtext from "@/components/Helper/Boxtext"
import Image from "next/image"

const About = () => {
      return (
            <div className="py-16">
                  <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                        {/* Image Content */}
                        <div>
                              <Image src={"/images/about.png"} alt="about" width={600} height={600} />
                        </div>
                        {/* Text Content */}
                        <div>
                              <Boxtext>About Us</Boxtext>
                              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem] capitalize">Lorem ipsum dolor
                                    Everything you need to growing your businesses
                              </h1>
                              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">sit amet consectetur adipisicing elit. Maiores aperiam, aspernatur magni nostrum, aliquid, minima quam possimus hic necessitatibus reprehenderit molestiae temporibus natus alias illum!</p>
                              <button className="mt-5 pb-1 font-bold text-[#f68967] border-b-2 border-[#f68967] cursor-pointer">Learn More &#8594;</button>
                              <div className="mt-8 border-l-2 border-gray-200">
                                    <div className="ml-6">
                                          <p className="text-gray-700 font-medium">
                                                &quot; The many ingredients that can be linked really help me see data from other tools I also use. &quot;
                                          </p>
                                          <div className="flex items-center space-x-6 mt-6">
                                                <Image src={"/images/u1.jpg"} alt="user" width={40} height={40} className="rounded-full" />
                                                <div>
                                                      <p className="font-medium">Jessica Doe</p>
                                                      <p className="text-sm text-gray-700">Web Developer @StraTech</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default About