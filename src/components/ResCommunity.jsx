import React, { useEffect } from "react";
import lines from "../assets/resCommunity/bg-lines.png";
import mobile from "../assets/resCommunity/image-removebg-preview.png";
import Employees from "./Employees";
import emp1 from "../assets/resCommunity/user1.png";
import emp2 from "../assets/resCommunity/user2.png";
import emp3 from "../assets/resCommunity/user3.png";
import emp4 from "../assets/resCommunity/user4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ResCommunity = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="rescommunity-container">
      <div className="main-box">
        <img src={lines} alt="lines" />
      </div>

      <div className="top-text-box">
        <h5>Use our dashboard everyday to engage million of users.</h5>
        <p>
          With the goal of empowering artists and fans, TIDAL gives you more
          ways of supporting the artists you love and care.
        </p>
      </div>
      <div className="employees-box">
        <div data-aos="slide-right" className="box-1">
          <Employees
            class="employee1"
            img={emp1}
            pos="SCIENTIST"
            res="Promoted a build to production"
          />
        </div>

        <div data-aos="flip-up" className="box-2">
          <img className="" src={mobile} alt="mobile" />
        </div>

        <div data-aos="slide-left" className="box-3">
          <Employees
            class="employee2"
            img={emp2}
            pos="Research Student"
            res="Promoted a build to production"
          />
        </div>

        <div data-aos="slide-right" className="box-4">
          <Employees
            class="employee3"
            img={emp3}
            pos="Product DESIGNER"
            res="Promoted a build to production"
          />
        </div>

        <div data-aos="slide-left" className="box-5">
          <Employees
            class="employee4"
            img={emp4}
            pos="ReSEARCHER"
            res="Promoted a build to production"
          />
        </div>
      </div>
    </section>
  );
};

export default ResCommunity;
