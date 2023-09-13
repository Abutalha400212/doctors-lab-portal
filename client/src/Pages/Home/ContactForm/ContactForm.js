import React from "react";
import apointment from '../../../assets/images/appointment.png'
const ContactForm = () => {
  return (
    <div className="h-[400px] flex justify-center items-center mt-10 mb-10" style={{background:`url(${apointment})`,
    backgroundSize: 'cover'
    
    }}>
      <div className="w-96">
      <div className="text-center">
        <h4 className="text-primary font-bold text-xl">Contact Us</h4>
        <h3 className="text-3xl font-semibold">Stay connected with us</h3>
      </div>
      <div className="mt-5">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered input-md input-info w-full mt-2 "
        />
        <br />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-md input-info w-full mt-2 "
        />
        <br />
        <input
          type="text"
          placeholder="Your Message"
          className="input input-bordered input-lg input-info w-full mt-2 "
        />
      </div>
      <div className=" mt-3">
        <button className="btn btn-primary w-full ">Submit</button>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;
