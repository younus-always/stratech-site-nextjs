import ClientReviewCard from "@/components/Home/ClientReview/ClientReviewCard"


const ClientReview = () => {
      return (
            <div id="reviews" className="py-16 bg-gray-100">
                  {/* Heading */}
                  <h1 className="text-2xl font-bold text-center text-blue-950">What Our Clients Are Saying</h1>
                  {/* Sub heading */}
                  <p className="w-[90%] sm:w-[70%] md:w-[50%] mx-auto mt-3 font-medium text-center">
                        We’ve helped startups and businesses build, launch, and scale with confidence.
                        Here’s what our clients say about working with us.
                  </p>
                  {/* Grid container */}
                  <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mt-16">
                        <div data-aos="zoom-in"
                              data-aos-placement="top-center">
                              <ClientReviewCard
                                    image="/images/u3.jpg"
                                    name="Michael Brown"

                                    rating="4.7"
                                    review="The team delivered exactly what we needed — fast, reliable, and with great attention to detail. Highly recommended!"
                              />
                        </div>
                        <div data-aos="zoom-in"
                              data-aos-placement="top-center"
                              data-aos-delay="100">
                              <ClientReviewCard
                                    image="/images/u1.jpg"
                                    name="Jessica Doe"
                                    rating="4.5"
                                    review="Professional communication and clean execution. Our project went live ahead of schedule with no issues."
                              />
                        </div>
                        <div data-aos="zoom-in"
                              data-aos-placement="top-center"
                              data-aos-delay="200">
                              <ClientReviewCard
                                    image="/images/u4.jpg"
                                    name="Sarah Wilson"
                                    rating="4.3"
                                    review="Amazing experience! They understood our business goals and turned them into a real product that performs well."
                              />
                        </div>
                        <div data-aos="zoom-in"
                              data-aos-placement="top-center"
                              data-aos-delay="300">
                              <ClientReviewCard
                                    image="/images/u2.jpg"
                                    name="David Carter"
                                    rating="4.9"
                                    review="One of the best teams we’ve worked with — seamless delivery, strong expertise, and exceptional support."
                              />
                        </div>
                  </div>
            </div >
      )
}

export default ClientReview