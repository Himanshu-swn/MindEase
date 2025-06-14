import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import starIcon from "../../assets/images/Star.png";
import SidePanel from "./SidePanel";

import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const BASE_URL = "http://localhost:5000";
const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch(`${BASE_URL}/doctors/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch doctor data.");
        }
        const data = await res.json();
        console.log(data);
        setDoctor(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;
  if (!doctor) return <div>Doctor not found.</div>;

  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
    _id,
  } = doctor.data;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={photo} alt={name} className="w-full" />
              </figure>
              <div>
                <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  {specialization}
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="star" /> {averageRating}
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    ({totalRating})
                  </span>
                </div>
                <p className="text__para text-[14px] leading-6 md:text-[15px] lg-max-w-[390px]">
                  {bio}
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-lime-700 "
                } py-2 pr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={` ${
                  tab === "feedback" && "border-b border-solid border-lime-700 "
                } py-2 pr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>

            {/* Uncomment if you want to use About and Feedback sections */}
            {/* <div className="mt-[50px]">
              {tab === "about" && (
                <DoctorAbout
                  name={name}
                  about={about}
                  qualifications={qualifications}
                  experiences={experiences}
                />
              )}
              {tab === "feedback" && (
                <Feedback reviews={reviews} totalRating={totalRating} />
              )}
            </div> */}
          </div>

          <div>
            <SidePanel
              doctorId={_id}
              ticketPrice={ticketPrice}
              timeSlots={timeSlots}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
