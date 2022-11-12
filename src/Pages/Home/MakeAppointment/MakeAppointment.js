import React from "react";
import doctor from '../../../Assets/images/doctor.png';
import appointment from '../../../Assets/images/appointment.png';
import PrimaryButton from "../../../Components/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className="mt-32 mb-12">

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row p-0">
          <img
            src={doctor}
            className=" w-1/2 -mt-32 rounded-lg hidden lg:block"
            alt=""
          />
          <div className="mx-4">
          <p className="text-xl font-bold text-primary pb-4">Appointment</p>
            <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
