import { Link } from "react-router-dom";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg00 from "../assets/images/home-page-doc.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/test.png";
import icon03 from "../assets/images/icon03.png";
import ServicesList from "../components/Services/ServicesList";
import  "../assets/css/home.css";




const Home = () => {
  return (
    <>
      <section className="hero__section pt-[30px] 2xl:h-[800px]">
        <div className="container"> 
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ====== image ========== */}
            <div className="flex gap-[30px] justify-end">
              <div className="home_hero_img00">
                <img className="w-full " src={heroImg00} alt="hero_img" />
              </div>
              <div className="mt-[30px]">
                {/* <img
                  className="w-full mb-[30px]"
                  src={heroImg02}
                  alt="hero_img"
                /> */}
                {/* <img className="w-full" src={heroImg03} alt="hero_img" /> */}
              </div>
            </div>
            {/* ====== content ========== */}
            <div>
              <div className=" lg:w-[570px]">
                <h1 className="text-headingColor text-[36px] leading-[46px] md:text-[60px] md:leading-[70px] font-[800] ">
                  We offer online mental health diagnosis.
                </h1>
                <p className="text__para">
                  MindEase helps you understand your mental well-being with a quick, 
                  expert-designed assessment. Get personalized insights and recommendations 
                  for a healthier mind.
                </p>
                <Link to="/services">
                  <button className="btn">
                    Take test
                  </button>
                </Link>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    3+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-yellowColor block mt-[-14px]"></span>
                  <p className="text__para">Different Doctors</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    50+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-purpleColor block mt-[-14px]"></span>
                  <p className="text__para">Types of Questions</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-irisBlueColor block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best online medical services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Take Online Test
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care.
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Identify Issue
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care.
                </p>
              </div>
            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Get Accurate Results
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. 
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <About /> */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <ServicesList />
        </div>
      </section>

      {/* doctors */}
      {/* <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <DoctorList />
        </div>
      </section> */}
      {/* doctors end */}

    </>
  );
};

export default Home;
