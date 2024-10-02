import React from "react";
import RestaurantImage from "../../../assets/images/BannerSection/restaurant-illustration.png"; // Add your image path

const BannerSection = () => {
  return (
    <section className=" py-10 ml-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 text-left font-inter">

          <h1 className="text-5xl font-bold  text-black mb-4 leading-[58.09px]">
            Transform Your Restaurant with Smart Management Solutions!
          </h1>
          <p className="text-xl font-normal mb-8 leading-6">
            Streamline operations, boost staff efficiency, and enhance customer
            satisfaction with our all-in-one solution. Manage your restaurant
            effortlessly and intelligently.
          </p>

          
          <div className="flex space-x-4">            
            <button className="bg-[#469DB1] text-white w-[204px] h-[51px] rounded-xl border-t border-l border-r border-[#469DB1] hover:bg-[#60d1eb] transition duration-300">
              Get Demo
            </button>

            
            <button className="border bg-white border-[#469DB1] text-[#469DB1] w-[204px] h-[51px] rounded-xl hover:bg-blue-100 transition duration-300">
              Free Installation
            </button>
          </div>

        </div>

        
        <div className="md:w-1/2 mt-8 md:mt-0 w-5/12">
          <img
            src={RestaurantImage}
            alt="Restaurant Illustration"
            className="w-full rounded-bl-full rounded-tl-full"
          />
        </div>
        
      </div>
    </section>
  );
};

export default BannerSection;
