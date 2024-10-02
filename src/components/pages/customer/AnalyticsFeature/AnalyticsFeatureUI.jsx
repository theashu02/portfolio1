import ToggleButton from "../../../common/toggleButton/ToggleButton";
import bgImage from "../../../../assets/images/Analytics/Analytics.png";
// import Hover from "../../../../assets/images/Analytics/Hover.png";
// import "../../../../ResponsiveCSS/Analytics.css";
import Ring1 from "../../../common/Rings/Ring1";


const AnalyticsFeatureUI = () => {
  return (
    <div className="relative">
      <Ring1 />
      <div className="relative flex flex-col items-center">
        {/* <ToggleButton /> */}
        <div className="flex md:flex-col lg:flex-row flex-col md:w-4/5  w-[95%] md:h-[694px] rounded-[49px] bg-[linear-gradient(89.38deg,_rgba(255,_255,_255,_0.2)_24.29%,_rgba(46,_46,_46,_0.2)_52.49%,_rgba(0,_0,_0,_0.2)_79.7%)] bg-opacity-50 backdrop-filter backdrop-blur-sm shadow-lg space-y-5 md:space-y-0">

          {/* text container */}
          <div className="flex flex-col md:items-center md:justify-center md:w-[436px] mt-5 space-y-1 md:space-y-0 p-5">
            <div className="text-[#0995B4] font-inter md:text-[20px] font-bold md:leading-[24.2px] md:w-[197px] md:h-[24px] lg:absolute lg:top-[170px] lg:left-[100px] text-xl">
              Real-Time Analytics
            </div>
            <div className="text-[#151515] font-poppins md:text-[40px] font-bold md:leading-[60px] text-left md:w-[474px] md:h-[120px] lg:absolute lg:top-[212px] lg:left-[100px] text-4xl">
              Real-Time Analytics for Restaurants
            </div>

            <div className="text-[#565656] font-inter text-[20px] font-medium leading-[24.2px] text-left md:w-[368px] md:h-[120px] lg:absolute lg:top-[343px] lg:left-[100px]">
              Real-time analytics for restaurants tracks data like sales,
              customer preferences, and inventory instantly, helping improve
              decision-making and efficiency.
            </div>
          </div>
          <div className="ml-auto md:w-[694px] h-full">
            <img
              src={bgImage}
              className="object-cover md:w-[694px]"
              alt="Women Image"
            />
          </div>
        </div>

        <p className="font-inter text-[20px] font-medium leading-[24.2px] text-center mb-3 mt-2 w-full">
          <span className="text-teal-500">Turbo</span>Treats Presents Customer
          Features
        </p>
      </div>
    </div>
  );
};

export default AnalyticsFeatureUI;


