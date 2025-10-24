import React from "react";

type Props = {
      title: string;
      subTitle: string;
      icon: React.ReactElement;
      aos: string;
      aosPlacement: string;
      aosDelay?: string
}

const ServiceBox = ({ title, subTitle, icon, aos, aosPlacement, aosDelay }: Props) => {
      return (
            <div data-aos={aos}
                  data-aos-anchor-placement={aosPlacement}
                  data-aos-delay={aosDelay}>
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