import Image from "next/image"
import { BsStarHalf } from "react-icons/bs"
import { FaStar } from "react-icons/fa6"

const Hero = () => {
      return (
            <div className="relative w-full h-[110vh] sm:h-screen bg-[url('/images/bg.png')] bg-cover bg-center flex flex-col justify-center">
                  <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                        {/* Text Content */}
                        <div>
                              <p className="text-sm sm:text-base md:text-xl font-bold text-blue-900">Build smarter — not harder.</p>
                              <h1 className="text-2xl md:text-3xl lg:text-4xl my-6 font-bold text-blue-900 leading-[2.5rem] md:leading-[3.5rem]">Launch, Grow & Dominate with{" "}<span className="text-rose-700">StraTech</span></h1>
                              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700">We help startups, agencies, and businesses accelerate product
                                    development with world-class strategy, scalable tech and modern design — all in one place.</p>
                              {/* Ratings */}
                              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-x-10 sm:space-y-0 mt-6">
                                    <div className="flex items-center space-x-4">
                                          <Image src={"/images/google.png"} alt="google" width={40} height={40} />
                                          <div>
                                                <div className="flex items-center space-x-2">
                                                      <h3 className="text-lg sm:text-left md:text-2xl font-bold text-gray-700">4.5</h3>
                                                      <div className="flex items-center">
                                                            <FaStar className="w-4 h-4 text-yellow-500" />
                                                            <FaStar className="w-4 h-4 text-yellow-500" />
                                                            <FaStar className="w-4 h-4 text-yellow-500" />
                                                            <FaStar className="w-4 h-4 text-yellow-500" />
                                                            <BsStarHalf className="w-4 h-4 text-yellow-500" />
                                                      </div>
                                                </div>
                                                <p className="text-sm sm:text-base text-gray-700">Best Rated On Google</p>
                                          </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                          <Image src={"/images/linkedin.png"} alt="linkedin" width={40} height={40} />
                                          <div>
                                                <div className="flex items-center space-x-2">
                                                      <h3 className="text-lg sm:text-left md:text-2xl font-bold text-gray-700">4.7</h3>
                                                      <div className="flex items-center">
                                                            <FaStar className="w-4 h-4 text-yellow-500" />
                                                            <FaStar className="w-4 h-4 text-yellow-500" />
                                                            <FaStar className="w-4 h-4 text-yellow-500" />
                                                            <FaStar className="w-4 h-4 text-yellow-500" />
                                                            <BsStarHalf className="w-4 h-4 text-yellow-500" />
                                                      </div>
                                                </div>
                                                <p className="text-sm sm:text-base text-gray-700">Loved By Professionals</p>
                                          </div>
                                    </div>
                              </div>
                              {/* CTA Buttons */}
                              <div className="w-fit mt-8 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                                    <button className="relative px-10 py-3 font-medium text-white transition duration-300 bg-rose-600 rounded-md hover:bg-rose-700 ease cursor-pointer">
                                          <span className="absolute bottom-0 left-0 h-full -ml-2">
                                                <svg
                                                      viewBox="0 0 487 487"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      className="w-auto h-full opacity-100 object-stretch">
                                                      <path
                                                            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                                            fill="#fff"
                                                            fillRule="nonzero"
                                                            fillOpacity=".1">

                                                      </path>
                                                </svg>
                                          </span>
                                          <span className="h-full w-12 absolute top-0 right-0 -mr-3">
                                                <svg
                                                      viewBox="0 0 487 487"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      className="w-full h-full object-cover">
                                                      <path
                                                            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                                            fill="#fff"
                                                            fillRule="nonzero"
                                                            fillOpacity=".1"></path>
                                                </svg>
                                          </span>
                                          <span className="relative">Get Free Trial</span>
                                    </button>
                                    <button className="relative px-10 py-3 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600 ease cursor-pointer">
                                          <span className="absolute bottom-0 left-0 h-full -ml-2">
                                                <svg
                                                      viewBox="0 0 487 487"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      className="w-auto h-full opacity-100 object-stretch">
                                                      <path
                                                            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                                            fill="#fff"
                                                            fillRule="nonzero"
                                                            fillOpacity=".1">

                                                      </path>
                                                </svg>
                                          </span>
                                          <span className="h-full w-12 absolute top-0 right-0 -mr-3">
                                                <svg
                                                      viewBox="0 0 487 487"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      className="w-full h-full object-cover">
                                                      <path
                                                            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                                            fill="#fff"
                                                            fillRule="nonzero"
                                                            fillOpacity=".1"></path>
                                                </svg>
                                          </span>
                                          <span className="relative">Create Account</span>
                                    </button>
                              </div>
                        </div>
                        {/* Image Content */}
                        <div className="hidden xl:block mx-auto">
                              <Image src={"/images/hero.jpg"} alt="hero image" width={900} height={900} />
                        </div>
                  </div>
            </div>
      )
}

export default Hero