import React from "react";
import Treatment from "../../Treatment/Treatment";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import ContactForm from "../ContactForm/ContactForm";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Card />
      <Services />
      <Treatment />
      <MakeAppointment/>
      <Testimonial/>
      <ContactForm/>
    </div>
  );
};

export default Home;
