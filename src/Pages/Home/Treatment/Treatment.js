import React from "react";
import treatment from '../../../Assets/images/treatment.png';
import PrimaryButton from "../../../Components/PrimaryButton";

const Treatment = () => {

  return (
    <div className="hero my-18">
      <div className="hero-content flex-col lg:flex-row mx-auto px-16">
        <div className="w-1/2">
        <img
          src={treatment}
          className="rounded-lg ml-10 shadow-2xl lg:w-[450px] lg:h-[550px]"
          alt=""
        />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
