import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import  peerService  from "../../services/peerService"; 

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointment, setAppointment] = useState(null);
  const [meetingId, setMeetingId] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');
  const userId = localStorage.getItem('userId') || "Not available";

  const navigate = useNavigate();

  const handleCreateMeeting = async () => {
    try {
      setIsCreating(true);
      setError('');
      const newMeetingId = await peerService.createMeeting({ doctorId, userId, selectedDate });
      navigate(`/meeting/${newMeetingId}`);
    } catch (err) {
      setError('Failed to create meeting. Please try again.');
      console.error(err);
    } finally {
      setIsCreating(false);
    }
  };

  const bookingHandler = () => {
    setShowModal(true);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const confirmBooking = () => {
    setAppointment(selectedDate);
    setShowModal(false);
  };

  const deleteAppointment = () => {
    setAppointment(null);
    setSelectedDate(null);
  };

  return (
    <div className="shadow-lg p-5 rounded-lg bg-white">
      <div className="flex items-center justify-between border-b pb-3 mb-4">
        <p className="text-lg font-semibold text-gray-700">Booking Price</p>
        <span className="text-xl font-bold text-gray-900">
          INR &#x20b9; {ticketPrice}
        </span>
      </div>

      {appointment ? (
        <div className="relative bg-green-100 p-4 rounded-lg mb-4">
          <p className="text-sm font-medium text-gray-800">
            Appointment booked for:{" "}
            <span className="font-semibold">{appointment.toLocaleString()}</span>
          </p>
          <button
            onClick={deleteAppointment}
            className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            aria-label="Delete appointment"
          >
            ❌
          </button>

          {/* <Link
            to={`/meeting/${newMeetingId}`}> */}
          <button onClick={handleCreateMeeting} className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Navigate to Next Step
          </button>
          {/* </Link> */}
        </div>
      ) : (
        <button
          onClick={bookingHandler}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Book Appointment
        </button>
      )}

      <div className="mt-5">
        <p className="text-md font-semibold text-gray-700 mb-2">Available Time:</p>
        <ul className="space-y-2">
          {timeSlots?.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-md"
            >
              <p className="text-sm font-medium text-gray-700">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-sm font-medium text-gray-700">
                {/* {convertTime(item.startingTime)} - {convertTime(item.endingTime)} */}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[40%]">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Select Date and Time
            </h3>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateSelect}
              showTimeSelect
              dateFormat="Pp"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidePanel;
