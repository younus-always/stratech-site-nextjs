import PriceCard from "@/components/Helper/PriceCard"

const Pricing = () => {
      return (
            <div className="py-16 bg-gray-100">
                  <h1 className="text-2xl text-center text-blue-950 font-bold">
                        Pick a Plan and Start Using Premium Features Today
                  </h1>
                  <p className="w-[90%] sm:w-[70%] md:w-[50%] mx-auto font-medium text-gray-700 text-center mt-3">
                        Unlock all advanced tools, updates, and exclusive features with a membership plan that fits your needs. Choose once and enjoy uninterrupted access.
                  </p>

                  <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
                        <PriceCard time="3 Month" price="39.99" badge="Popular" />
                        <PriceCard time="12 Month" price="19.99" badge="Most Popular" />
                        <PriceCard time="Life Time" price="9.99" badge="Premium" />
                  </div>
            </div>

      )
}

export default Pricing