import Image from "next/image";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

type Props = {
      image: string;
      name: string;
      rating: string;
      review: string
}

const ClientReviewCard = ({ image, name, rating, review,  }: Props) => {
      return (
            <div className="bg-white shadow-md p-8 sm:flex items-center space-y-4 sm:space-y-0 space-x-6 rounded-xl duration-200 hover:shadow-lg">
                  <Image src={image} alt={name}
                        width={350} height={350}
                        className="rounded-lg" />
                  <div>
                        <h3 className="text-lg font-bold text-blue-950">{name}</h3>
                        <div className="flex items-center space-x-3">
                              <p className="text-xl font-bold text-orange-500">{rating}</p>
                              <div className="flex items-center">
                                    <FaStar className="w-4 h-4 text-yellow-600" />
                                    <FaStar className="w-4 h-4 text-yellow-600" />
                                    <FaStar className="w-4 h-4 text-yellow-600" />
                                    <FaStar className="w-4 h-4 text-yellow-600" />
                                    <BsStarHalf className="w-4 h-4 text-yellow-600" />
                              </div>
                        </div>
                        <p className="mt-2 font-medium text-gray-700 text-base">{review}</p>
                  </div>
            </div>
      )
}

export default ClientReviewCard