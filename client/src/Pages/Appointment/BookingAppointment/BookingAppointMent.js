import React, { useContext } from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import toast from 'react-hot-toast';
const BookingAppointMent = ({ treatment, selectedDate,setTreatment,refetch }) => {
  const {user} = useContext(AuthContext)
  const { name:appointmentName, slots,price } = treatment;
  const { register, handleSubmit,formState: { errors } } = useForm();
  const date = format(selectedDate, "PP")
  const handleAppointment = (data) => {
    const newData = {...data,treatment:appointmentName,price:price}
    console.log(newData);
    fetch('https://doctors-lab-server.vercel.app/bookings',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(newData)
    }).then(res => res.json())
    .then(data =>{
      if(data.success){
        toast.success('Apply Booked')
        setTreatment(null)
        refetch()
      }
      else{
        toast.error(data.message)
      }
    })
  };
  return (
    <>
      <input type="checkbox" id="DentalLab" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="DentalLab"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-primary">{appointmentName}</h3>
          <form onSubmit={handleSubmit(handleAppointment)} className="grid grid-cols-1 gap-5  mt-5 ">
            <input
              type="text"
              {...register('appointmentDate')}
              defaultValue={date}
              className="input w-full"
            />
            <select
              {...register('slot')}
              className="select select-bordered w-full text-black"
            >
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              defaultValue={user?.displayName}
              {...register('name')}
              placeholder="Full Name"
              className="input w-full input-bordered text-black"
            />
            <input
              type="text"
              {...register('phone',{required:"Please enter Your Contact Number"})}
              placeholder="Phone Number"
              className="input w-full input-bordered text-black"
            />
            {errors.phone && <p role="alert">{errors.phone?.message}</p>}
            <input
              type="email"
              defaultValue={user?.email}
              {...register('email')}
              placeholder="Email"
              className="input w-full input-bordered text-black"
            />
          <button className="w-full btn btn-accent text-white">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingAppointMent;
