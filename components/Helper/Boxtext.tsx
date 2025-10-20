import React from 'react'

type Props = {
      children: React.ReactNode
}

const Boxtext = ({ children }: Props) => {
      return (
            <h3 className='w-fit border-2 bg-gray-100 rounded-lg font-bold px-4 py-1 text-[#f68967]'>{children}</h3>
      )
}

export default Boxtext