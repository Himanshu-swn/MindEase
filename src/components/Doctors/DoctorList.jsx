import DoctorCard from "./DoctorCard";

// import { BASE_URL } from "../../config";
// import userFetchData from "../../hooks/userFetchData";

import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
const DoctorList = () => {


  // const doctors = [
  //   {
  //     name: "Dr. Rajesh Kumar",
  //     avgRating: 4.8,
  //     totalRating: 250,
  //     photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maxhealthcare.in%2Fdoctor%2Fdr-rajesh-kumar&psig=AOvVaw0yhmVHqWDtwnf-lE-_oT1R&ust=1723733171507000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCv8s7c9IcDFQAAAAAdAAAAABAE",
  //     specialization: "Psychiatry",
  //     totalPatients: 1800,
  //     hospital: "AIIMS, New Delhi",
  //     experiences: [
  //       "15 years in mental health diagnosis and treatment",
  //       "Specializes in anxiety disorders and depression",
  //       "Conducts workshops on mental wellness"
  //     ],
  //     website: "https://www.practo.com/lucknow/doctor/dr-rajesh-kumar-5-general-physician-1",
  //   },
  //   {
  //     name: "Dr. Shalini Mehta",
  //     avgRating: 4.7,
  //     totalRating: 300,
  //     photo: "url_to_photo_shalini_mehta",
  //     specialization: "Clinical Psychology",
  //     totalPatients: 1500,
  //     hospital: "NIMHANS, Bengaluru",
  //     experiences: [
  //       "12 years in cognitive behavioral therapy",
  //       "Expert in adolescent mental health",
  //       "Author of research papers on PTSD"
  //     ],
  //     website: "https://www.justdial.com/Panipat/Dr-Shalini-Mehta-Panipat-HO/9999PX180-X180-130108170942-W7V9_BZDET",
  //   },
  //   {
  //     name: "Dr. Anil Deshmukh",
  //     avgRating: 4.9,
  //     totalRating: 320,
  //     photo: "url_to_photo_anil_deshmukh",
  //     specialization: "Neuropsychiatry",
  //     totalPatients: 2100,
  //     hospital: "Tata Memorial Hospital, Mumbai",
  //     experiences: [
  //       "20 years in neuropsychiatry and mental health",
  //       "Specializes in schizophrenia and bipolar disorder",
  //       "Conducts clinical trials and research"
  //     ],
  //     website: "https://www.justdial.com/Sangamner/Dr-Anil-Deshmukh-deshmukh-Hospital-Nr-Dr-Sahyandri-High-School-Sangamner/9999PX241-X241-180212061304-E8U5_BZDET",
  //   }
  // ];
  
  
  // const {
  //     data: doctors,
  //     loading,
  //     error,
  //   } = userFetchData(`${BASE_URL}/doctors`);
    
  const doctors = [
      {
        _id: "65dbfae83a28621a9914e5c9",
        name: "Dr. David Poii  ii",
        specialization: "Psychiatrist",
        role: "doctor",
        bio: "Dr. David P is a board-certified psychiatrist specializing in the diagnosis and treatment of mental health disorders, including anxiety, depression, and PTSD. With extensive training and experience in both clinical practice and research, Dr. David is dedicated to providing personalized care to his patients. He believes in a holistic approach to mental health, integrating the latest advancements in psychiatric treatment with compassionate patient-centered care. Dr. David is committed to staying at the forefront of psychiatry through ongoing research and collaboration with colleagues in the field.",
        photo: "http://res.cloudinary.com/hyemeecloud/image/upload/v1710033544/pjvzwcraohz7fkv7tous.png",
        email: "d@d.com",
        phone: "402123454",
        isApproved: "approved",
        averageRating: 5,
        totalRating: 1,
        ticketPrice: 20,
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
        ticketPrice: 10,
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
        // name: "Dr. Bryan G" ,
        name: "Dr. Moogli Singh",
        specialization: "Mental Health Specialist",
        role: "doctor",
        bio: "Dr. Bryan G is a mental health specialist with a focus on treating complex mental health issues such as bipolar disorder, schizophrenia, and addiction. With a compassionate approach and evidence-based treatments, Dr. Bryan provides his patients with comprehensive care tailored to their unique needs. He is committed to advancing mental health care by staying informed of the latest research and applying innovative therapies in his practice.",
        photo: "http://res.cloudinary.com/hyemeecloud/image/upload/v1710034322/pizadhetvzptz8eafanm.png",
        email: "b@b.com",
        phone: "40212341234",
        isApproved: "approved",
        averageRating: 4,
        totalRating: 2,
        ticketPrice: 10,
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
      }
  ];
  
  const loading = false;
  const error = null;
  
  console.log(doctors);
  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;
