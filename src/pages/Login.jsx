import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { BASE_URL } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../context/AuthContext.jsx";

import HashLoader from "react-spinners/HashLoader";

const BASE_URL = "http://localhost:5000";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
      console.log(result);
  
      if (!res.ok) { 
        throw new Error(result.message || "Something went wrong");
      }
  
      localStorage.setItem("userId", result.data._id);
      
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

  
      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-5 md:px-0">
      <div className=" w-full max-w-[570px] mx-auto rounded-lg shadow-lg md:p-10">
        <ToastContainer />
        <div>
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 ">
            Hello! <span className="text-lime-500">Welcome</span>
          </h3>

          <form className="py-4 md:py-0" onSubmit={handleSubmit}>
            <div className="mb-5 px-5">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full py-3 border-b border-solid border-lime-600 focus:outline-none focus:border-lime-600 text-[22px] leading-7 text-headingColor placeholder:text-textColor
                cursor-pointer"
              />
            </div>

            <div className="mb-5 px-5">
              <input
                type="password"
                placeholder="Enter Your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full  py-3 border-b border-solid border-lime-600 focus:outline-none focus:border-lime-600 text-[22px] leading-7 text-headingColor placeholder:text-textColor
              cursor-pointer"
              />
            </div>

            <div className="mt-7 px-5">
              <button className="w-full bg-lime-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
                {loading ? <HashLoader size={25} color="#fff" /> : "Login"}
              </button>
            </div>

            <p className="mt-5 text-textColor text-center">
              Don&apos;t have an account?
              <Link to="/register" className="text-lime-600 font-medium ml-1">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
