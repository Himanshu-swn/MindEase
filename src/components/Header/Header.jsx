import React, { useContext, useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";

import { NavLink, Link, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../../assets/images/illness.png";
import "../../assets/css/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const Header = () => {
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (

    <header className="header flex items-center h-25">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="header_logo w-32 h-25 overflow-hidden items-center flex content-center">
            <Link to="/home">
              <img src={logo} alt="logo" className="object-cover" />
            </Link>
          </div>

          {/* menu */}
          <div className="navigation" onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.5rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-[#1bcc20] font-[600] text-[16px] leading-7"
                        : "text-textColor font-[500] text-[16px] leading-7 hover:text-lime-500"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="flex items-center gap-4">
                <Link to="login">
                  <button className="bg-lime-500 text-white py-2 px-6 rounded-[50px] font-[600] h-[44px] flex items-center justify-center">
                    Log In
                  </button>
                </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
