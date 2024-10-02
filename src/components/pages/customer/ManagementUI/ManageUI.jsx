import Ring4 from "../../../common/Rings/Ring4";
import bgImage from "../../../../assets/images/ManageUI/SideImg.png"
import ToggleButton from "../../../common/toggleButton/ToggleButton";


export default function ManageUI() {
  return (
    <div className="relative">
      <Ring4 />
      <div className="relative flex flex-col items-center">
        {/* <ToggleButton /> */}
        <div className="flex md:flex-col lg:flex-row flex-col md:w-4/5  w-[95%] md:h-[694px] rounded-[49px] bg-opacity-50 backdrop-filter backdrop-blur-sm shadow-lg space-y-2 md:space-y-0"
         style={{background: "linear-gradient(89.38deg, rgba(255, 255, 255, 0.28) 24.29%, rgba(46, 46, 46, 0.28) 52.49%, rgba(0, 0, 0, 0.28) 79.7%)"}}
        >

          {/* text container */}
          <div className="flex flex-col md:items-center md:justify-center md:w-[436px] mt-5 space-y-1 md:space-y-0 p-5">
            <div className="text-[rgba(9,149,180,1)] font-inter md:text-[20px] font-bold leading-[24.2px] text-left md:w-[306px] md:h-[24px] md:absolute md:top-[300px] md:left-[141px] gap-0 text-xl">
              Inventory Management System
            </div>
            <div className="text-[rgba(21,21,21,1)] font-poppins md:text-[40px] font-bold md:leading-[60px] text-left md:w-[581px] md:h-[180px] md:absolute md:top-[306px] md:left-[141px] gap-0 text-4xl">
              Real-Time Ai Based Inventory Management System
            </div>
            <div className="text-[rgba(86,86,86,1)] font-inter md:text-[20px] font-medium leading-[24.2px] text-left md:w-[538px] md:h-[96px] md:absolute md:top-[472px] md:left-[141px] gap-0 text-[20px]">
            Inventory management for restaurants involves tracking stock levels, managing orders, and minimizing waste to ensure optimal supply. It helps maintain ingredient freshness, control costs, and streamline operations.
            </div>
          </div>
          {/* image div */}
          <div className="relative ml-auto md:w-[469px] md:h-[694px] w-full h-[480px]">
            <img
                src={bgImage}
                className="object-cover md:w-[469px] md:h-[694px] w-full h-[480px] rounded-bl-[49px] rounded-br-[49px] rounded-tl-[49px] rounded-tr-[49px] absolute bottom-0"
                alt="Women Image"
            />
          </div>

        </div>

        <p className="font-inter md:text-[20px] font-medium leading-[24.2px] text-center mb-3 mt-2 w-full text-xl">
          <span className="text-teal-500">Turbo</span>Treats Presents Customer
          Features
        </p>
      </div>
    </div>
  )
}
