import React from "react";
import Hero from "../../components/hero";
import Brands from "../../components/Brands";
import Footer from "../../components/footer";
import About from "../../components/About/About";
const Home = () => {
  return (
    <div className=" tw-overflow-x-hidden">
      <Hero />

      <div className="   tw-px-5 tw-relative">
        <div className="  tw-pb-10 tw-text-center">
          <h2 className="  tw-pt-16  sm:tw-pt-0 tw-text-[#456DA7]">
          Your Referral Reward
          </h2>
        </div>

        <Brands />

        <div className=" tw-absolute tw-left-0  tw-bottom-[30%]">
          <img
            src={require("../../assets/images/WhiteBluePinkLeft.png")}
            className=" sm:tw-w-44 tw-w-36"
            alt=""
          />
        </div>

      
      </div>

      <About />
      <Footer />
    </div>
  );
};

export default Home;
