import React from "react";
import person1 from "../assets/how it works/people/person-1.png";
import person2 from "../assets/how it works/people/person-2.png";
import person3 from "../assets/how it works/people/person-3.png";
import person4 from "../assets/how it works/people/person-4.png";
import person5 from "../assets/how it works/people/person-5.png";
import person6 from "../assets/how it works/people/person-6.png";
import person7 from "../assets/how it works/people/person-7.png";
import person8 from "../assets/how it works/people/person-8.png";

const ImageSlider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          {" "}
          <img src={person1} alt="person" />
        </div>
        <div className="slide">
          <img src={person2} alt="person" />
        </div>
        <div className="slide">
          {" "}
          <img src={person3} alt="person" />
        </div>
        <div className="slide">
          {" "}
          <img src={person4} alt="person" />
        </div>
        <div className="slide">
          {" "}
          <img src={person5} alt="person" />
        </div>
        <div className="slide">
          <img src={person6} alt="person" />
        </div>
        <div className="slide">
          {" "}
          <img src={person7} alt="person" />
        </div>
        <div className="slide">
          {" "}
          <img src={person8} alt="person" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
