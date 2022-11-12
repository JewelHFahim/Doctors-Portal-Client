import React from "react";
import chair from '../../../Assets/images/chair.png';
import './Banner.css';


const Banner = () => {
  return (
    <div className="">
      <div className="hero lg:h-[650px] bg-base-200 my-5">
        <div className="hero-content flex-col ml-8 mr-6 lg:flex-row-reverse">
          <img
            src={chair}
            className=" rounded-lg shadow-2xl lg:w-1/2"
            alt=""
          />
          <div className="mr-5">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-base-100">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
