import React from "react";
import bgImage from "../assets/landingPage-bg.png";
import bgImagesm from "../assets/landingPage-bg-sm.png";
import bgImagesm2 from "../assets/landingPage-bg-sm2.png";

const LandingPage = () => {
  return (
    <section id="home" className="landingPage-container">
      <div className="image-box">
        <img className="img-full" src={bgImage} alt="bg" />
        <img className="img-tab" src={bgImagesm} alt="bg" />
        <img className="img-mob" src={bgImagesm2} alt="bg" />
      </div>
      <div className="landingPage-content">
        <h3>Finally a Customer Engagement Platform built for Mobile</h3>
        <p>
          Batch drives an average 600% ROI from consumer brands who put
          formidable Mobile-first customer experience
        </p>
        <button>See how it works</button>
      </div>
    </section>
  );
};

export default LandingPage;
