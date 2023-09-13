import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate()
  const { data: specialties = [] } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const res = await fetch("https://doctors-lab-server.vercel.app/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_URL}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        const doctor = {
          doctor: data.name,
          email: data.email,
          specialty: data.specialty,
          photo: imgData.data.url,
        };
       fetch("https://doctors-lab-server.vercel.app/addDoctor",{
        method:'POST',
        headers:{
            'content-type':'application/json',
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify(doctor)
       }).then(res => res.json()).then(data=>{
        toast.success("doctor added Successfully")
        navigate('/dashboard/dashboard/mannagedoctor')
       })
      });
  };
  return (
    <div className="md:w-[50%] p-7 text-black font-semibold mx-auto">
      <h1>Add a Doctor</h1>
      <div>
        <form onSubmit={handleSubmit(handleAddDoctor)} className="">
          <div className="form-control  ">
            <label className="label ">
              <span className="label-text text-black ">Doctor Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Doctor is required" })}
              placeholder="Doctor Name here"
              className="input input-bordered "
            />
          </div>
          <div className="form-control  ">
            <label className="label ">
              <span className="label-text text-black ">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Email here"
              className="input input-bordered "
            />
          </div>

          <div className="form-control  ">
            <label className="label">
              <span className="label-text text-black">Specialty</span>
            </label>
            <select
              {...register("specialty")}
              className="select select-bordered w-full max-w-xs"
            >
              {specialties.map((specialty) => (
                <option value={specialty.name} key={specialty._id}>
                  {specialty.name}
                </option>
              ))}

              <option>Greedo</option>
            </select>
          </div>
          <div className="form-control  ">
            <label className="label ">
              <span className="label-text text-black ">Image</span>
            </label>
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs mb-2"
            />
          </div>
          <input
            className="btn btn-outline w-full text-black "
            type="submit"
            value="Add a Doctor"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
