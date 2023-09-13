import React from "react";

const AppointmentOptions = ({ options,setTreatment }) => {
  const { name,slots } = options;
  return (
    <div className="card bg-base-100 shadow-xl ">
      <div className="card-body text-center">
        <h2 className="text-center text-2xl text-primary font-bold">{name}</h2>
        <p className="text-black uppercase text-sm">{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
        <div className="card-actions justify-center">
          <label onClick={()=>setTreatment(options)} htmlFor="DentalLab" className="btn btn-primary">Booking Now</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
