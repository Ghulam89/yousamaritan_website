import React, { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import Button from "../Button";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [holdersDropdownOpen, setHoldersDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const isActive = (route) => location.pathname.includes(route);

  const handleNavigate = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };
  const [scrollBackground, setScrollBackground] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav  className={`tw-top-0 tw-w-full tw-z-20 tw-bg-white  ${
      scrollBackground ? "tw-bg-[#1111]  tw-fixed" : "tw-bg-[#1111]"
    } sm:tw-relative md:tw-sticky`}>
      <div className="tw-flex tw-items-center tw-font-medium tw-h-32 container tw-mx-auto tw-justify-between">
        <div className="">
          <img
            src={require("../../assets/images/logo.png")}
            className="tw-object-contain tw-w-[200px]"
            alt="Logo"
          />
        </div>

        <ul className="lg:tw-flex tw-hidden tw-items-center tw-gap-8 tw-font-[Poppins]">
          <li>
            <Link
              className={`${
                isActive("/") ? "  tw-text-primary" : "tw-text-textColor"
              }tw-text-white`}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "")}
              className="tw-text-textColor"
            >
              About us
            </Link>
          </li>
        
           <li>
            <Link to={"/"} className="tw-text-textColor">
              Staking
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "roadSection")}
              className="tw-text-textColor"
            >
              Road Map
            </Link>
          </li>
            <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "tokenSection")}
              className="tw-text-textColor"
            >
              Tokenomics
            </Link>
          </li>
       
        
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "aboutSection")}
              className="tw-text-textColor"
            >
              How To Stake
            </Link>
          </li>
        </ul>

        <div className="md:tw-block tw-hidden">
          <Button
            Icons={<img src={require('../../assets/images/wallet.png')} />}
            label={"Connect Wallet"}

            className={' text-white'}
          />
        </div>

        <div
          className="tw-text-3xl lg:tw-hidden tw-pt-2 tw-z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdOutlineClose color="black" /> : <MdMenu color="black" />}
        </div>

        {/* Mobile nav */}
        <div
          className={`
            lg:tw-hidden tw-z-40    tw-bg-white  tw-shadow-xl  tw-fixed tw-w-full tw-top-0 tw-overflow-y-auto tw-bottom-0 tw-leading-10 tw-py-10 
            tw-duration-500 ${open ? "tw-left-0 tw-bg-white " : "  tw-bg-white tw-left-[-100%]"}
          `}
        >
         

          <div className="tw-pb-5 tw-px-8">
            <img
              src={require("../../assets/images/logo.png")}
              className="tw-object-contain tw-w-[170px]"
              alt="Logo"
            />
          </div>

          <ul className="tw-p-0 tw-relative tw-px-9 tw-pt-3 tw-border-t">
          <li>
            <Link
              className={`${
                isActive("/") ? "  tw-text-textColor" : "tw-text-textColor"
              }tw-text-textColor`}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => {handleNavigate("/", "aboutSection")
                setOpen(false)
              }}
              className="tw-text-textColor"
            >
              About us
            </Link>
          </li>
        
           <li>
            <Link to={"/"} className="tw-text-textColor">
              Staking
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() =>{ handleNavigate("/", "")
                setOpen(false)
              }}
              className="tw-text-textColor"
            >
              Road Map
            </Link>
          </li>
            <li>
            <Link
              to={"/"}
              onClick={() => {handleNavigate("/", "")
                setOpen(false)

              }}
              className="tw-text-textColor"
            >
              Tokenomics
            </Link>
          </li>
       
        
          <li>
            <Link
              to={"/"}
              onClick={() => {handleNavigate("/", "aboutSection")
                setOpen(false)

              }}
              className="tw-text-textColor"
            >
              How To Stake
            </Link>
          </li>
          <li>
          <div className=" tw-pt-4">
          <Button
            Icons={<img src={require('../../assets/images/wallet.png')} />}
            label={"Connect Wallet"}

            className={' text-white'}
          />
        </div>
          </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
