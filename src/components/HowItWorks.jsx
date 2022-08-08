import React from "react";
import step1 from "../assets/how it works/image-1.2.png";
import step2 from "../assets/how it works/image-2.png";
import step3 from "../assets/how it works/image-3.png";
import arrow from "../assets/how it works/Arrow 2.png";
import ImageSlider from "./ImageSlider";

const HowItWorks = () => {
  return (
    <section className="how-it-works-container">
      <div className="main-box">
        <div className="steps-box">
          <h3>How it works?</h3>
          <div className="the-proccess">
            <div className="image-box box-1">
              <img src={step1} alt="step-1" />
            </div>
            <div className="arrow-box box-2">
              {" "}
              <img src={arrow} alt="arrow" />
            </div>
            <div className="image-box box-3">
              <img src={step2} alt="step-2" />
            </div>
            <div className="arrow-box box-4">
              <img src={arrow} alt="arrow" />
            </div>
            <div className="image-box box-5">
              <img src={step3} alt="step-3" />
            </div>
            <div className="box-6 content-box">
              <h5>Install</h5>{" "}
              <p>
                On your device, go to Google Play Store and install “ResBoard”
                app and install “ResBoard” app
              </p>{" "}
            </div>
            <div className="box-7 content-box">
              <h5>Sign Up</h5>{" "}
              <p>
                Sign Up to the application with your email with millions of
                short videos, directly from the research authors.
              </p>{" "}
            </div>
            <div className="box-8 content-box">
              <h5>Find what you seek</h5>{" "}
              <p>
                Explore contents and engage yourself with millions of short
                videos, directly from the research authors.
              </p>
            </div>
          </div>
        </div>
        <ImageSlider/>
      </div>
    </section>
  );
};

export default HowItWorks;
