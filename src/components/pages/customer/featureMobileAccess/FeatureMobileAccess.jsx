import RingComponent from "../../../common/ringComponent/RingComponent";
import ToggleButton from "../../../common/toggleButton/ToggleButton";
import bgImage from "../../../../assets/images/featureMobileAccess/moblieAccessIllustration.png"


const FeatureMobileAccess = () => {
  

  return (
    <div className="relative mt-20">
      <RingComponent />
      <div className="relative flex flex-col items-center">
        <ToggleButton />

        <div className="w-4/5 h-screen bg-gradient-to-l from-white/30 via-gray-800/30 to-black/30 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-3xl shadow-lg flex items-center">
          {/* Image Section */}
          <div className="relative w-1/2 ">
            <div className="absolute -top-[352px] rounded-[120px_1000px_1000px_1000px] overflow-hidden w-full  gap-0">
              <img
                src={bgImage} // Replace with actual image path
                alt="Restaurant Management"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="absolute right-0 pr-10  w-6/12 mt-8 md:mt-0 flex flex-col md:pl-8 rounded-tl-[170.5px] rounded-bl-[170.5px]">
            <h3 className= "font-inter text-blue-500 font-semibold text-sm mb-2">
              Mobile Accessibility
            </h3>
            <h2 className="font-poppins text-4xl md:text-4xl font-bold text-[#151515] mb-4  leading-[60px] text-left">
              Mobile-Friendly Complaint Dashboard for Restaurant Management
            </h2>
            <p className=" font-inter text-lg text-gray-600 leading-relaxed mb-4">
              A mobile-optimized complaint tracking system for on-the-go
              resolution, enhancing customer satisfaction and ensuring smooth
              restaurant operations.
            </p>
          </div>

          
          
        </div>
        



        <p className="font-inter text-lg font-medium leading-6 text-center my-8">
          <span className="text-teal-500">Turbo</span>Treats Presents Customer
          Features
        </p>
      </div>
    </div>
  );
};

export default FeatureMobileAccess;
