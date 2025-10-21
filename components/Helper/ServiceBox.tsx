import React from "react";

type Props = {
      title: string;
      subTitle: string;
      icon: React.ReactElement
}

const ServiceBox = ({ title, subTitle, icon }: Props) => {
      return (
            <div>
                  <div className="flex items-center space-x-5">
                        {/* icon */}
                        <div className="w-12 h-12 p-3 flex items-center justify-center rounded-md bg-pink-500/20">
                              {icon}
                        </div>
                        {/* text content */}
                        <div>
                              <p className="text-lg font-bold text-gray-700">{title}</p>
                              <p className="text-sm text-gray-600">{subTitle}</p>
                        </div>
                  </div>
            </div>
      )
}

export default ServiceBox