import React, { useState } from "react";
import Header from "../header";
import Staking from "../../screens/Staking";
import { GoCopy } from "react-icons/go";
const Hero = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("MATIC");

  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const getBorderColor = (currency) => {
    return selectedCurrency === currency
      ? "tw-border-[#00F0FF] tw-border-2"
      : "tw-border-[#456DA7]";
  };

  const [selectedButton, setSelectedButton] = useState(null);

  const handleBSelect = (button) => {
    setSelectedButton(button);
  };

  const getBBorderColor = (button) => {
    return selectedButton === button
      ? "tw-border-[#00F0FF] tw-border-2"
      : "tw-border-white";
  };


  return (
    <div className="   tw-bg-cover tw-relative tw-bg-center tw-w-full tw-h-auto">
      <Header />

      <div className="container tw-relative  tw-pb-44 tw-pt-6">
        <div className=" tw-text-center">
          <h1 className=" tw-pb-7 tw-text-[#456DA7]">
          yousmaritan Lp program
          </h1>
        </div>
        <div className="row    g-5 tw-items-center">
          <div className="col-lg-6">
           <div className=" row">
            <div className=" col-md-10 tw-mx-auto">
            <Staking />
            </div>
           </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className=" row  g-4">
              <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor tw-rounded-bl-3xl  tw-rounded-tr-3xl  p-4">
                  <h6 className="   tw-text-textColor tw-font-poppins">
                    Total Engagement
                  </h6>
                  <span className="  tw-text-textColor tw-font-poppins tw-text-lg">
                    {" "}
                    0
                  </span>
                </div>
              </div>
              <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor tw-rounded-bl-3xl  tw-rounded-tr-3xl  p-4">
                  <h6 className="  tw-text-textColor  tw-font-poppins">
                    Total Earnings
                  </h6>
                  <span className="  tw-text-textColor tw-font-poppins tw-text-lg">
                    {" "}
                    0
                  </span>
                </div>
              </div>
              <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor tw-rounded-bl-3xl  tw-rounded-tr-3xl  p-4">
                  <h6 className="  tw-text-textColor  tw-font-poppins">
                    Current Balance
                  </h6>
                  <span className="  tw-text-textColor tw-font-poppins tw-text-lg">
                    {" "}
                    0
                  </span>
                </div>
              </div>
              <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor tw-rounded-bl-3xl  tw-rounded-tr-3xl  p-4">
                  <h6 className="   tw-text-textColor tw-font-poppins">
                    Total Referrals
                  </h6>
                  <span className="  tw-text-textColor tw-font-poppins tw-text-lg">
                    {" "}
                    0
                  </span>
                </div>
              </div>
              <div className=" col-md-12">
                <div className=" tw-border  tw-border-textColor tw-rounded-bl-3xl  tw-rounded-tr-3xl  p-4">
                  <h6 className="  tw-text-textColor  tw-font-poppins tw-flex tw-gap-3 tw-items-center">
                    My Link <GoCopy size={23} color="#456DA7" />{" "}
                  </h6>
                  <span className="  tw-text-[#456DA7] tw-font-poppins tw-text-md">
                  Smaritan: 0x2484b0c9f6C500EB763c8b1F95e5057560139279
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" tw-absolute tw-right-0  tw-hidden  md:tw-block tw-top-0">
        <img src={require("../../assets/images/WhiteBluePink.png")} alt=""  className=" tw-w-44" />
      </div>





     
     
    </div>
  );
};

export default Hero;
