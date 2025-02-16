import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
function About() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between flex-col  lg:flex-row gap-[50px] lg:gap-[130px] xl:gap-0 ">
          {" "}
          {/*About imgs  */}
          <div className="relative w-3/4 lg:w-1/2 x;:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[-22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Assess Your Well-being with Confidence</h2>
            <p className="text__para">
              Our website offers a safe and confidential space where users can access 
              mental health assessment tools designed to provide insights into their 
              well-being. By delivering comprehensive and accurate evaluations, this 
              platform fosters proactive self-awareness and supports individuals in 
              understanding their cognitive and emotional states.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
