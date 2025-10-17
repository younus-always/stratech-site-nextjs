import { GrTechnology } from "react-icons/gr"

const Nav = () => {
  return (
    <div className="w-full h-[12vh] fixed transition-all duration-200 z-[100] ">
      <div className=" w-[90%] h-full mx-auto flex items-center justify-between xl:w-[80%]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full">
            <GrTechnology className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl text-blue-800 font-bold hidden sm:block md:text-2xl">StraTech</h3>
        </div>
      </div>
    </div>
  )
}

export default Nav