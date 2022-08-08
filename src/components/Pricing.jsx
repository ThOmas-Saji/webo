import React from "react";
import bgimg from "../assets/pricing/bg.png";
import PriceDetails from "./PriceDetails";
import { BsCheckLg } from "react-icons/bs";

const Pricing = () => {
  return (
    <section className="pricing-container">
      <div className="bg-image-box">
        <img src={bgimg} alt="bg" />
      </div>
      <div className="content">
        <div>
          <h5>Pricing</h5>
        </div>

        <div>
          <p>
            With the goal of empowering artists and fans, TIDAL gives you more
            ways of supporting the{" "}
          </p>
        </div>
      </div>
      <div className="price-box">
        <PriceDetails>
          <h3 className="text-[2rem]">HiFi</h3>
          <h5 className="text-[1.2rem] my-4">
            Listen to music the way it’s meant to sound.
          </h5>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>Innovative Audio Formats</p>
          </span>
          <p className="ml-10">Up to 9216 kbps</p>
          <p className="text-[0.8rem] text-gray-400 ml-10">
            Master Quality audio, Dolby Atoms, Sony 360 Reality Audio and HiFi
          </p>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>80M+ songs and 350K+ videos</p>
          </span>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>{" "}
            <p>Add-free</p>
          </span>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>{" "}
            <p>Listen offline with unlimited skips</p>
          </span>
          <span className="flex">
            {" "}
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>Direct Artist Payouts</p>
          </span>
          <p className="text-[0.8rem] text-gray-400 ml-10">
            Up to 10% of your subsription is directed to the artists you listen
            to the most
          </p>
          <p className="font-semibold ml-8">
            30 days free then PLN 39.99/month
          </p>
          <button className="bg-[#3F80FF] py-2 rounded-md my-3">
            Start Free Trial
          </button>
          <p className="text-center underline underline-offset-2 cursor-pointer">
            Learn more about HiFi
          </p>
        </PriceDetails>

        {/* 2 */}
        <PriceDetails>
          <h3 className="text-[2rem]">HiFi</h3>
          <h5 className="text-[1.2rem] my-4">
            Listen to music the way it’s meant to sound.
          </h5>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>Innovative Audio Formats</p>
          </span>
          <p className="ml-10">Up to 9216 kbps</p>
          <p className="text-[0.8rem] text-gray-400 ml-10">
            Master Quality audio, Dolby Atoms, Sony 360 Reality Audio and HiFi
          </p>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>80M+ songs and 350K+ videos</p>
          </span>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>{" "}
            <p>Add-free</p>
          </span>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>{" "}
            <p>Listen offline with unlimited skips</p>
          </span>
          <span className="flex">
            {" "}
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>Direct Artist Payouts</p>
          </span>
          <p className="text-[0.8rem] text-gray-400 ml-10">
            Up to 10% of your subsription is directed to the artists you listen
            to the most
          </p>
          <p className="font-semibold ml-8">
            30 days free then PLN 39.99/month
          </p>
          <button className="bg-[#3F80FF] py-2 rounded-md my-3">
            Start Free Trial
          </button>
          <p className="text-center underline underline-offset-2 cursor-pointer">
            Learn more about HiFi
          </p>
        </PriceDetails>

        {/* 3 */}
        <PriceDetails>
          <h3 className="text-[2rem]">HiFi</h3>
          <h5 className="text-[1.2rem] my-4">
            Listen to music the way it’s meant to sound.
          </h5>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>Innovative Audio Formats</p>
          </span>
          <p className="ml-10">Up to 9216 kbps</p>
          <p className="text-[0.8rem] text-gray-400 ml-10">
            Master Quality audio, Dolby Atoms, Sony 360 Reality Audio and HiFi
          </p>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>80M+ songs and 350K+ videos</p>
          </span>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>{" "}
            <p>Add-free</p>
          </span>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>{" "}
            <p>Listen offline with unlimited skips</p>
          </span>
          <span className="flex">
            {" "}
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>Direct Artist Payouts</p>
          </span>
          <p className="text-[0.8rem] text-gray-400 ml-10">
            Up to 10% of your subsription is directed to the artists you listen
            to the most
          </p>
          <p className="font-semibold ml-8">
            30 days free then PLN 39.99/month
          </p>
          <button className="bg-[#3F80FF] py-2 rounded-md my-3">
            Start Free Trial
          </button>
          <p className="text-center underline underline-offset-2 cursor-pointer">
            Learn more about HiFi
          </p>
        </PriceDetails>

        {/* 4 */}
        <PriceDetails>
          <h3 className="text-[2rem]">HiFi</h3>
          <h5 className="text-[1.2rem] my-4">
            Listen to music the way it’s meant to sound.
          </h5>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>Innovative Audio Formats</p>
          </span>
          <p className="ml-10">Up to 9216 kbps</p>
          <p className="text-[0.8rem] text-gray-400 ml-10">
            Master Quality audio, Dolby Atoms, Sony 360 Reality Audio and HiFi
          </p>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>80M+ songs and 350K+ videos</p>
          </span>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>{" "}
            <p>Add-free</p>
          </span>
          <span className="flex">
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>{" "}
            <p>Listen offline with unlimited skips</p>
          </span>
          <span className="flex">
            {" "}
            <BsCheckLg className="mr-[10%] text-1xl my-1"></BsCheckLg>
            <p>Direct Artist Payouts</p>
          </span>
          <p className="text-[0.8rem] text-gray-400 ml-10">
            Up to 10% of your subsription is directed to the artists you listen
            to the most
          </p>
          <p className="font-semibold ml-8">
            30 days free then PLN 39.99/month
          </p>
          <button className="bg-[#3F80FF] py-2 rounded-md my-3">
            Start Free Trial
          </button>
          <p className="text-center underline underline-offset-2 cursor-pointer">
            Learn more about HiFi
          </p>
        </PriceDetails>
      </div>
    </section>
  );
};

export default Pricing;
