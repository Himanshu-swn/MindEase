import React, { useContext, useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext.jsx";
import { NavLink, Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
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
  {
    path: "/appointments",
    display: "Appointments",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const { user, role, token, dispatch } = useContext(AuthContext);

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

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      
      dispatch({ type: "LOGOUT" });
      
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to logout");
    }
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");


  return (
    <header className="header flex items-center h-20 fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all">
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
              <div className="flex items-center gap-4">
                {user?.photo ? (
                  <figure className="w-[35px] h-[35px] rounded-full">
                    <img src={user?.photo} alt="" className="w-full rounded-full" />
                  </figure>
                ) : (
                  <h3>{role === "doctor" ? `Dr. ${user?.name}` : user?.name}</h3>
                )}

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white py-1 px-4 rounded-full font-semibold text-sm"
                >
                  Logout
                </button>
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
