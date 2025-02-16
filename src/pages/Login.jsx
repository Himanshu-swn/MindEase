import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { BASE_URL } from "../config";

import HashLoader from "react-spinners/HashLoader";
import axios from "axios";

const BASE_URL = "http://localhost:7000";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // const { dispatch } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // try {
    //   // const res = await fetch(`${BASE_URL}/auth/login`, {
    //   //   method: "post",
    //   //   headers: {
    //   //     "Content-Type": "application/json",
    //   //   },
    //   //   body: JSON.stringify(formData),
    //   // });

    //   // const res = await axios.post(`${BASE_URL}/login`, formData);
    //   // // alert("yes yes yes yes y ");
    //   // const result = await res.data;
    //   // if (!res.data.isOk) {
    //   //   throw new Error(result.message);
    //   // }

    //   dispatch({
    //     type: "LOGIN_SUCCESS",
    //     payload: {
    //       user: result.userData,
    //       token: "lk765l&$%^J;7457$%J2457;$J&#$^%&",
    //       role: "Pakistani",
    //     },
    //   });

    //   setLoading(false);
    //   // alert("yes yes yes yes y ");
    //   toast.success(result.message);
    //   navigate("/home");
    // } catch (error) {
    //   // alert("no catch no ");
    //   toast.error(error.message);
    //   setLoading(false);
    // }
  };

  return (
    <section className="px-5 md:px-0">
      <div className=" w-full max-w-[570px] mx-auto rounded-lg shadow-lg md:p-10">
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
