import React, { useState } from "react";
import RingComponent from "../../../common/ringComponent/RingComponent";
import ToggleButton from "../../../common/toggleButton/ToggleButton";
import UIBackgroundImage from "../../../../assets/images/featureUI/backgroundImage.png";
import UILamp from "../../../../assets/images/featureUI/lampImage.png";
import Flashcard from "../flashCard/FlashCard"; // Import the Flashcard component
import flashCard1 from "../../../../assets/images/featureUI/flashCards/flashCard1.png";
import flashCard2 from "../../../../assets/images/featureUI/flashCards/flashCard2.png";
import flashCard3 from "../../../../assets/images/featureUI/flashCards/flashCard3.png";

const FeatureSection = () => {
  const flashcards = [
    { img: flashCard1, link: "/feature1", alt: "Flashcard 1" },
    { img: flashCard2, link: "/feature2", alt: "Flashcard 2" },
    { img: flashCard3, link: "/feature3", alt: "Flashcard 3" },
    { img: flashCard2, link: "/feature4", alt: "Flashcard 4" },
  ];

  return (
    <div className="relative mt-20">
      <RingComponent />
      <div className="relative flex flex-col items-center">
        <ToggleButton />

        <div className="relative w-4/5 h-screen bg-gradient-to-r from-white/30 via-gray-700/30 to-black/30 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-3xl shadow-lg p-8 flex items-center">
          <div className="absolute right-0 w-3/5 h-full">
            <img
              src={UIBackgroundImage}
              alt="Background"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="relative flex flex-col w-3/5 z-10">
            <div className="w-3/5 h-2/5 mb-20">
              <img src={UILamp} alt="Lamp" />
            </div>
            
            <div className="pr-8 w-full">
              <p className="text-teal-500 font-inter text-lg font-bold leading-6 my-10">
                Dashing User Interface
              </p>
              <h2 className="font-inter text-5xl font-bold leading-12 text-left text-gray-800 mt-2 mb-4">
                An Interactive UI For Best Experience In Restaurant
              </h2>
              <p className="text-gray-600 my-6 font-inter text-xl font-medium leading-6 pr-28">
                Interactive UI for a seamless restaurant experience with easy
                navigation, personalized menus, and smooth ordering.
              </p>
            </div>
          </div>

          <div className="relative z-10 ml-16">
            <div className="grid p-8 grid-cols-2 gap-8 pl-0">
              {flashcards.map((card, index) => (
                <Flashcard key={index} {...card} />
              ))}
            </div>
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

export default FeatureSection;
