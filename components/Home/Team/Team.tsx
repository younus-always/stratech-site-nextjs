import Boxtext from "@/components/Helper/Boxtext"
import Image from "next/image"

const Team = () => {
      return (
            <div id="team" className="py-16">
                  <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                        {/* Text content */}
                        <div className="lg:col-span-2">
                              <Boxtext>Our Team</Boxtext>
                              {/* heading */}
                              <h1 className="mt-4 text-xl md:text-2xl font-bold text-gray-800">A Team Driven by Vision, Execution, and Real Impact</h1>
                              {/* description */}
                              <p className="mt-4 text-gray-700">We are a group of builders, designers, and engineers who turn bold ideas
                                    into scalable digital products. Every project is driven with strategy,
                                    precision, and a hunger to deliver results.</p>
                              {/* button */}
                              <div className="mt-8">
                                    <button className="relative rounded px-5 py-2.5 overflow-hidden text-white bg-green-500 group hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 cursor-pointer">
                                          <span className="absolute right-0 w-8 h-32 bg-white opacity-10 rotate-12 -mt-12 transform translate-x-12 group-hover:-translate-x-40 transition-all duration-1000 ease"></span>
                                          <span className="relative">Join Our Team</span>
                                    </button>
                              </div>
                        </div>
                        {/* Image */}
                        <div className="sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:col-span-3">
                              <div data-aos="fade-right"
                                    data-aos-placement="top-center"
                                    className="relative overflow-hidden rounded-lg transition hover:scale-[1.02] duration-300">
                                    <Image
                                          src="/images/t1.jpg"
                                          alt="team"
                                          width={300}
                                          height={300}
                                          className="w-full h-auto"
                                    />
                                    <div className="absolute bottom-0 w-full min-h-[5rem] py-3 px-4 bg-rose-500 rounded-lg">
                                          <p className="text-lg text-white font-bold">Arman Rahman</p>
                                          <p className="text-gray-200">(Founder & CEO)</p>
                                    </div>
                              </div>
                              <div data-aos="fade-left"
                              data-aos-placement="top-center"
                              data-aos-delay="100"
                              className="relative overflow-hidden rounded-lg transition hover:scale-[1.02] duration-300">
                                    <Image
                                          src="/images/t2.jpg"
                                          alt="team"
                                          width={300}
                                          height={300}
                                          className="w-full h-auto"
                                    />
                                    <div className="absolute bottom-0 w-full min-h-[5rem] py-3 px-4 bg-orange-500 rounded-lg">
                                          <p className="text-lg text-white font-bold">Sara Hossain</p>
                                          <p className="text-gray-200">(Co-Founder & CTO)</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Team