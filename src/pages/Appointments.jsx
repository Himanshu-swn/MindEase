import React, { useEffect, useState } from "react";
import axios from "axios";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const role = localStorage.getItem("role");

  const fetchAppointments = async () => {
    try {

      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?._id;
  
      if (!userId || !role) {
        console.error("User ID or role missing");
        setLoading(false);
        return;
      }
  
      const endpoint = role === "doctor" ? "/bookings/doctor" : "/bookings/user";
      const url = `http://localhost:5000${endpoint}?id=${userId}`;
  
      const res = await axios.get(url);
      setAppointments(res.data);
    } catch (err) {
      console.error("Error fetching appointments", err);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchAppointments();
  }, []);

  if (loading) return <p className="text-center">Loading appointments...</p>;

  if (!appointments.length) return <p className="text-center">No appointments found.</p>;

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Appointments</h2>
      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <div key={appointment._id} className="p-4 border rounded shadow-sm">
            <p><strong>Meeting ID:</strong> {appointment.meetingId}</p>
            <p>
              <strong>
                {role === "doctor" ? "Patient" : "Doctor"}:
              </strong>{" "}
              {role === "doctor"
                ? appointment.user?.name
                : appointment.doctor?.name}
            </p>
            <p><strong>Date:</strong> {appointment.date}</p>
            <p><strong>Time:</strong> {appointment.time}</p>
            <p className="text-gray-500 text-sm">Booked on: {new Date(appointment.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Appointments;
