import React from "react";

type Props = {
      heading: string;
      description: string;
      icon: React.ReactElement
}

const FeatureBox = ({ heading, description, icon }: Props) => {
      return (
            <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-3xl flex flex-col items-center justify-center bg-pink-500/20">{icon}</div>
                        {/* Heading */}
                        <h1 className="text-lg font-bold text-gray-700">
                              {heading}
                        </h1>
                  </div>
                  {/* Description */}
                  <p className="my-3 text-gray-700 leading-relaxed">
                        {description}
                  </p>
            </div>
      )
}

export default FeatureBox