import React, { useState } from "react";
import DropdownIcon from "../components/svgIcons/DropdownIcon";
import SecuredIcon from "../components/svgIcons/securedIcon";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50">
      <nav className="flex justify-between items-center md:px-[110px] md:pb-[26px] bg-white md:pt-[45px] p-10 text-[#3D3333]">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680774680/capival/Logo_jsme6s.png"
            alt=""
            className="logo md:w-[191px] w-[110px]"
          />
        </Link>

        <button className="md:hidden block" onClick={() => setOpen(!open)}>
          {open ? <GrClose fontSize="24px" /> : <BiMenu fontSize="24px" />}
        </button>
        {open ? (
          <div className="absolute top-0 left-0 bg-gray-500  w-[100vw] h-[100vh] p-10">
            <div className="flex justify-between items-center">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680774680/capival/Logo_jsme6s.png"
                  alt=""
                  className="logo max-w-[110px]"
                />
              </Link>
              <GrClose
                fontSize="24px"
                color="#FFF"
                onClick={() => setOpen(false)}
              />
            </div>
            <ul className="md:flex block justify-between items-center gap-[23px] md:p-0 ">
              <Link to="/">
                <li className="md:mb-0 mb-[30px] mt-[10px] hover:text-red-600">
                  Home
                </li>
              </Link>
              <Link to="/about-us">
                <li className="md:mb-0 mb-[30px] hover:text-red-600">
                  About us
                </li>
              </Link>
              <li className="md:mb-0 mb-[30px] ">
                <div
                  className="flex gap-5 items-center cursor-pointer"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Our Products <DropdownIcon />
                </div>
                {dropdown && (
                  <ul className="px-5">
                    <Link to="/product1">
                      <li className="my-[10px]  hover:bg-red-600 px-2 py-1 rounded cursor-pointer  hover:text-white">
                        Product 1
                      </li>
                    </Link>
                    <Link to="/product2">
                      <li className="mb-[10px]  hover:bg-red-600 px-2 py-1 rounded cursor-pointer  hover:text-white">
                        Product 2
                      </li>
                    </Link>
                    <Link to="/product3">
                      <li className="mb-[10px]  hover:bg-red-600 px-2 py-1 rounded cursor-pointer hover:text-white">
                        Product 3
                      </li>
                    </Link>
                  </ul>
                )}
              </li>
              <Link to="/about-us">
                <li className="md:mb-0 mb-[30px] hover:text-red-600">
                  Contact
                </li>
              </Link>
              <li>
                <button className="flex items-center bgGradient px-[30px] py-[12px] text-[#FFFFFF] font-normal">
                  <SecuredIcon /> Online Banking
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden md:block">
            <ul className="md:flex block justify-between items-center gap-[23px] md:p-0 p-10">
              <Link to="/">
                <li className="md:mb-0 mb-[30px] hover:text-red-600">Home</li>
              </Link>
              <Link to="/about-us">
                <li className="md:mb-0 mb-[30px] hover:text-red-600">
                  About us
                </li>
              </Link>
              <li
                className="relative"
                onMouseLeave={() => setDropdown(false)}
                onClick={() => setDropdown(!dropdown)}
              >
                <span className="flex gap-5 items-center cursor-pointer hover:text-red-600">
                  Our Products <DropdownIcon />
                </span>
                {dropdown && (
                  <ul className="top-[20px] absolute p-4 w-[200px]">
                    <Link to="/product1">
                      <li className="mb-[20px] hover:bg-red-600 px-2 py-1 rounded cursor-pointer  hover:text-white">
                        Product 1
                      </li>
                    </Link>
                    <Link to="/product2">
                      <li className="mb-[20px]  hover:bg-red-600 px-2 py-1 rounded cursor-pointer  hover:text-white">
                        Product 2
                      </li>
                    </Link>
                    <Link to="/product1">
                      <li className="mb-[20px]  hover:bg-red-600 px-2 py-1 rounded cursor-pointer  hover:text-white">
                        Product 3
                      </li>
                    </Link>
                  </ul>
                )}
              </li>
              <Link to="/about-us">
                <li className="md:mb-0 mb-[30px] border-r-2 pr-4 border-[#0000007e] hover:text-red-600">
                  Contact
                </li>
              </Link>
              <li>
                <button className="flex items-center bgGradient ml-[23px] px-[30px] py-[12px] text-[#FFFFFF] font-normal">
                  <SecuredIcon /> Online Banking
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
