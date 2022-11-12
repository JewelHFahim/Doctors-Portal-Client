import React from "react";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import InfoCards from "../InfoCards.js/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Treatment from "../Treatment/Treatment";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Treatment></Treatment>
      <MakeAppointment></MakeAppointment>
      <Reviews></Reviews>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
