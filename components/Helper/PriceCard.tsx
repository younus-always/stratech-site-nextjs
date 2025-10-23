type Props = {
      time: string
      price: string
      badge: string
}

const PriceCard = ({ time, price, badge }: Props) => {
      return (
            <div
                  className="relative rounded-xl p-8 shadow-lg border overflow-hidden transition hover:scale-[1.02] duration-300 bg-gradient-to-br from-purple-600 to-pink-400 text-white">
                  {/* Badge */}
                  <span className="absolute top-4 right-4 text-xs font-semibold bg-black/30 backdrop-blur px-3 py-1 rounded-full">
                        {badge}
                  </span>

                  <h2 className="text-xl font-bold">{time} Plan</h2>

                  <p className="mt-4 text-sm text-white/90">
                        Get full access to premium features with this membership package. Enjoy all tools without restrictions during your active period.
                  </p>

                  <div className="my-8">
                        <p className="text-lg font-semibold">
                              <span className="text-4xl font-bold">${price}</span> / Month
                        </p>
                  </div>

                  <button className="w-full py-2.5 text-base font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-500 hover:to-pink-600 ease bg-gradient-to-br from-purple-600 to-pink-600 cursor-pointer">
                        Upgrade Now
                  </button>
            </div>
      )
}

export default PriceCard
