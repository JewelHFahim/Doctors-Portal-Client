import React from "react";
import appointment from '../../../Assets/images/appointment.png'
import PrimaryButton from "../../../Components/PrimaryButton";

const ContactForm = () => {
  return (

    <div className="mt-20" style={{ background: `url(${appointment})` }} >
        <p className="text-lg font-semibold text-primary text-center pt-10" >Contact Us</p>
        <p className="text-4xl text-white text-center" >Stay connected with us</p>
        <form className="py-10 text-center w-4/12 mx-auto">
        <input type="text" placeholder="Email Address" className="input input-bordered input-primary w-full" /> <br />
        <input type="text" placeholder="Subject" className="input input-bordered input-primary mt-2 w-full" /> <br />
        <textarea className="textarea textarea-primary mt-2 mb-4 w-full" placeholder="Your message"></textarea>
        <PrimaryButton>Submit</PrimaryButton>
        </form>
    </div>

  );
};

export default ContactForm;
