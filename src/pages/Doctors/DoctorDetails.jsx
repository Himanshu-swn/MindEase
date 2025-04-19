import { useState } from "react";

import starIcon from "../../assets/images/Star.png";
// import DoctorAbout from "./DoctorAbout";
// import Feedback from "./Feedback";
import SidePanel from "./SidePanel";

import { BASE_URL } from "../../config";
// import userFetchData from "../../hooks/userFetchData";
import { useParams } from "react-router-dom";

import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const doctors = [
  {
    _id: "65dbfae83a28621a9914e5c9",
    name: "Dr. David Pp",
    specialization: "Psychiatrist",
    role: "doctor",
    bio: "Dr. David P is a board-certified psychiatrist specializing in the diagnosis and treatment of mental health disorders, including anxiety, depression, and PTSD. With extensive training and experience in both clinical practice and research, Dr. David is dedicated to providing personalized care to his patients. He believes in a holistic approach to mental health, integrating the latest advancements in psychiatric treatment with compassionate patient-centered care. Dr. David is committed to staying at the forefront of psychiatry through ongoing research and collaboration with colleagues in the field.",
    photo: "http://res.cloudinary.com/hyemeecloud/image/upload/v1710033544/pjvzwcraohz7fkv7tous.png",
    email: "d@d.com",
    phone: "402123454",
    isApproved: "approved",
    averageRating: 5,
    totalRating: 1,
    ticketPrice: 500,
    appointments: [],
    experiences: [
      {
        title: "Chief Psychiatrist",
        years: 10,
        hospital: "Mental Wellness Clinic"
      }
    ],
    qualifications: [
      {
        degree: "MD",
        institution: "Harvard Medical School"
      }
    ],
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "Excellent doctor with great bedside manner."
      }
    ],
    timeSlots: [
      {
        day: "Monday",
        slots: ["9:00 AM - 10:00 AM", "2:00 PM - 3:00 PM"]
      }
    ]
  },
  {
    _id: "65ed0a8fd255ccf40b23d6d1",
    name: "Dr. Bryan G",
    specialization: "Mental Health Specialist",
    role: "doctor",
    bio: "Dr. Bryan G is a mental health specialist with a focus on treating complex mental health issues such as bipolar disorder, schizophrenia, and addiction. With a compassionate approach and evidence-based treatments, Dr. Bryan provides his patients with comprehensive care tailored to their unique needs. He is committed to advancing mental health care by staying informed of the latest research and applying innovative therapies in his practice.",
    photo: "http://res.cloudinary.com/hyemeecloud/image/upload/v1710034322/pizadhetvzptz8eafanm.png",
    email: "b@b.com",
    phone: "40212341234",
    isApproved: "approved",
    averageRating: 4,
    totalRating: 2,
    ticketPrice: 500,
    appointments: [],
    experiences: [
      {
        title: "Senior Mental Health Specialist",
        years: 8,
        hospital: "Psychiatric Care Center"
      }
    ],
    qualifications: [
      {
        degree: "MD",
        institution: "Stanford Medical School"
      }
    ],
    reviews: [
      {
        user: "Jane Doe",
        rating: 4,
        comment: "Very professional and attentive."
      },
      {
        user: "Alice Smith",
        rating: 3,
        comment: "Good service but a bit expensive."
      }
    ],
    timeSlots: [
      {
        day: "Tuesday",
        slots: ["10:00 AM - 11:00 AM", "3:00 PM - 4:00 PM"]
      }
    ]
  },
  {
    _id: "65ed0a8fd255ccf40b23d6d5",
    name: "Dr. Mooglie Singh ",
    specialization: "Mental Health Specialist",
    role: "doctor",
    bio: "Dr. Bryan G is a mental health specialist with a focus on treating complex mental health issues such as bipolar disorder, schizophrenia, and addiction. With a compassionate approach and evidence-based treatments, Dr. Bryan provides his patients with comprehensive care tailored to their unique needs. He is committed to advancing mental health care by staying informed of the latest research and applying innovative therapies in his practice.",
    photo: "http://res.cloudinary.com/hyemeecloud/image/upload/v1710034322/pizadhetvzptz8eafanm.png",
    email: "b@b.com",
    phone: "40212341234",
    isApproved: "approved",
    averageRating: 4,
    totalRating: 2,
    ticketPrice: 2000,
    appointments: [],
    experiences: [
      {
        title: "Senior Mental Health Specialist",
        years: 8-8,
        hospital: "Psychiatric Care Center"
      }
    ],
    qualifications: [
      {
        degree: "MD",
        institution: "Stanford Medical School"
      }
    ],
    reviews: [
      {
        user: "Jane Doe",
        rating: 4,
        comment: "Very professional and attentive."
      },
      {
        user: "Alice Smith",
        rating: 3,
        comment: "Good service but a bit expensive."
      }
    ],
    timeSlots: [
      {
        day: "Tuesday",
        slots: ["10:00 AM - 11:00 AM", "3:00 PM - 4:00 PM"]
      }
    ]
  }
];

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");


  const { id } = useParams();
  // const {
  //   data: doctor,
  //   loading,
  //   error,
  // } = userFetchData(`${BASE_URL}/doctors/${id}`);

  const doctor = doctors.find((doc) => doc._id === id);
  console.log(doctor);
  const loading = false;
  const error = null;
  if (!doctor) {
    return <div>Doctor not found.</div>; 
  }


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
  } = doctor;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <Error />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} alt="" className="w-full" />
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
                      <img src={starIcon} alt="" /> {averageRating}
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
                    tab === "feedback" &&
                    "border-b border-solid border-lime-700 "
                  } py-2 pr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>

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
                doctorId={doctor._id}
                ticketPrice={ticketPrice}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
