import ToggleButton from "../../../common/toggleButton/ToggleButton";
import bgImage from "../../../../assets/images/Buildings/bulding.png";
// import Hover from "../../../../assets/images/Analytics/Hover.png";
// import "../../../../ResponsiveCSS/Analytics.css";
import Ring2 from "../../../common/Rings/Ring2";


const BulidingUIPage = () => {
  return (
    <div className="relative">
      <Ring2 />
      <div className="relative flex flex-col items-center">
        {/* <ToggleButton /> */}
        <div className="flex md:flex-col lg:flex-row flex-col md:w-4/5  w-[95%] md:h-[694px] rounded-[49px] bg-[rgba(196, 245, 255, 0.33)] bg-opacity-50 backdrop-blur-[13.8px] shadow-lg space-y-1 md:space-y-0">

          {/* text container */}
          <div className="flex flex-col md:items-center md:justify-center md:w-[436px] mt-5 space-y-5 md:space-y-0 p-2">
            <div className="text-[rgba(9,149,180,1)] font-inter md:text-[20px] font-bold md:leading-[24.2px] text-left md:w-[161px] md:h-[24px] md:absolute md:top-[118px] md:left-[95px] text-xl">
              Labor Reduction
            </div>

            <div className="text-[rgba(21,21,21,1)] font-poppins md:text-[40px] font-bold md:leading-[60px] text-left md:w-[612px] md:h-[120px] md:absolute md:top-[155px] md:left-[95px] text-4xl">
              Effective Labor Management in Restaurants
            </div>

            <div className="text-[rgba(86,86,86,1)] font-inter md:text-[20px] font-medium leading-[24.2px] text-left md:w-[417px] md:h-[96px] md:absolute md:top-[281px] md:left-[95px] text-[20px]">
              Labor in restaurants involves managing staff for tasks like
              cooking, serving, and cleaning to ensure smooth operations and
              customer satisfaction.
            </div>
          </div>
          <div className="ml-auto md:w-[605px] h-full">
            <img
              src={bgImage}
              className="object-cover md:w-[605px] md:absolute md:right-0 md:bottom-0"
              alt="Women Image"
            />
          </div>
        </div>

        {/* <p className="font-inter text-[20px] font-medium leading-[24.2px] text-center mb-3 mt-2 w-full">
          <span className="text-teal-500">Turbo</span>Treats Presents Customer
          Features
        </p> */}
        <p className="font-inter text-[20px] font-medium leading-[24.2px] text-center mb-3 mt-2 w-full">
          <span className="text-teal-500">Turbo</span>Treats Presents Customer
          Features
        </p>
      </div>
    </div>
  );
};

export default BulidingUIPage;


