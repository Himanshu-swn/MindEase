import React, { useContext, useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext.jsx";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
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
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const { user, role, token } = useContext(AuthContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return window.removeEventListener("scroll", handleStickyHeader);
  }, []);

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
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  {user?.photo ? (
                    <figure className="w-[35px] h-[35px] rounded-full">
                      <img
                        src={user?.photo}
                        alt=""
                        className="w-full rounded-full"
                      />
                    </figure>
                  ) : (
                    <h3>{user?.name}</h3>
                  )}
                </Link>
              </div>
            ) : (
              <Link to="login">
                <button className="bg-lime-500 text-white py-2 px-6 rounded-[50px] font-[600] h-[44px] flex items-center justify-center">
                  Log In
                </button>
              </Link>
            )}

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
