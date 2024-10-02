import React from "react";

const Flashcard = ({ img, link, alt }) => {
  return (
    <div className="w-40 h-52">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={alt} className="hover:opacity-80 transition-opacity duration-300 ease-in-out" />
      </a>
    </div>
  );
};

export default Flashcard;
