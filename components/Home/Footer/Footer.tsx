import Link from "next/link"
import { FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa6"

const Footer = () => {
      return (
            <div className="py-14">
                  <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* 1st part */}
                        <div className="space-y-5">
                              <h1 data-aos="fade-right"
                                    className="text-lg font-bold">Solutions</h1>
                              <ul data-aos="fade-right"
                                    data-aos-delay="200" className="flex flex-col space-y-2">
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">Enterprise Solutions</Link></li>
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">Workflow Management</Link></li>
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">Team Collaboration</Link></li>
                              </ul>
                        </div>
                        {/* 2nd part */}
                        <div className="space-y-5">
                              <h1 data-aos="fade-right"
                                    className="text-lg font-bold">Company</h1>
                              <ul data-aos="fade-right"
                                    data-aos-delay="200" className="flex flex-col space-y-2">
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">About Us</Link></li>
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">News & Press</Link></li>
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">Customers</Link></li>
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">Leadership Team</Link></li>
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">Careers</Link></li>
                              </ul>
                        </div>
                        {/* 3rd part */}
                        <div className="space-y-5">
                              <h1 data-aos="fade-right"
                                    className="text-lg font-bold">Resources</h1>
                              <ul data-aos="fade-right"
                                    data-aos-delay="200" className="flex flex-col space-y-2">
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">Webinars & Events</Link></li>
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">Blog Articles</Link></li>
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">Podcasts</Link></li>
                                    <li><Link href="" className="text-sm text-gray-800 font-medium hover:text-blue-900">Ebooks & Guides</Link></li>
                              </ul>
                        </div>
                        {/* 4th part */}
                        <div className="space-y-5">
                              <h1 data-aos="fade-right" className="text-lg font-bold">Get in Touch</h1>
                              <div data-aos="fade-right"
                                    data-aos-delay="100"
                                    className="mt-6">
                                    <p className="text-sm text-gray-600">Phone Number</p>
                                    <p className="text-base font-bold text-blue-950 mt-1">+880 15672-33482</p>
                              </div>
                              <div data-aos="fade-right"
                                    data-aos-delay="200"
                                    className="mt-6">
                                    <p className="text-sm text-gray-600">Email</p>
                                    <p className="text-base font-bold text-blue-950 mt-1">stratech@gmail.com</p>
                              </div>
                        </div>
                  </div>
                  {/* Bottom part */}
                  <div className="w-[80%] mx-auto mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
                        <p className="text-center md:text-left">&copy; 2025 - {new Date().getFullYear()} StraTech. All Rights Reserved</p>
                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                              <span>Follow Us:</span>
                              <a
                                    href="https://facebook.com/younus.always"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Facebook page"
                                    title="Facebook"
                                    className="text-gray-500 hover:text-gray-800"
                              >
                                    <FaFacebook />
                              </a>
                              <a
                                    href="https://x.com/younus_always"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Twitter profile"
                                    title="Twitter"
                                    className="text-gray-500 hover:text-gray-800"
                              >
                                    <FaTwitter />
                              </a>
                              <a
                                    href="https://dribbble.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Dribbble profile"
                                    title="Dribbble"
                                    className="text-gray-500 hover:text-gray-800"
                              >
                                    <FaDribbble />
                              </a>
                        </div>

                  </div>
            </div>
      )
}

export default Footer