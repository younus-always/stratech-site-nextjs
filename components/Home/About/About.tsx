import Boxtext from "@/components/Helper/Boxtext"
import Image from "next/image"

const About = () => {
      return (
            <div className="py-12">
                  <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                        {/* Image Content */}
                        <div>
                              <Image src={"/images/about.png"} alt="about" width={600} height={600} />
                        </div>
                        {/* Text Content */}
                        <div>
                              <Boxtext>About StraTech</Boxtext>
                              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem] capitalize">  Empowering startups and businesses with modern digital solutions
                              </h1>
                              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3"> We help brands launch, grow, and scale by delivering high-quality digital products and
                                    strategies tailored to their business needs. Our focus is on usability, performance, and
                                    long-term value.</p>
                              <button className="mt-5 pb-1 font-bold text-[#f68967] border-b-2 border-[#f68967] cursor-pointer">Learn More &#8594;</button>
                              <div className="mt-8 border-l-2 border-gray-200">
                                    <div className="ml-6">
                                          <p className="text-gray-700 font-medium">
                                                &quot; Working with StraTech simplified our workflow and gave us the clarity we needed to move faster.
                                                Highly recommend their strategy-driven approach. &quot;
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