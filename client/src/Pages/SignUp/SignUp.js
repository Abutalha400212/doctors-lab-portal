import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import useToken from "../../hooks/useToken";
import SmallLoader from "../../Loader/SmallLoader";

const SignUp = () => {
  const { createUser, updateUserProfile, loading, setLoading } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [userEmailUpdated, setUserEmailUpdated] = useState("");
  const [token] = useToken(userEmailUpdated);
  if (token) {
    navigate("/");
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignUp = (data) => {
    setError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const profile = {
          displayName: data.name,
        };
        updateUserProfile(profile)
          .then(() => {
            userDataLoaded(data.name, data.email);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const userDataLoaded = (name, email) => {
    fetch("https://doctors-lab-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("User Created Successfully");
          setUserEmailUpdated(email);
        }
      });
  };

  return (
    <div className="h-[500px] flex justify-center items-center">
      <div className="w-96 p-5 rounded-lg ">
        <h1 className="text-3xl font-bold text-center text-black ">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)} className="">
          <div className="form-control  ">
            <label className="label ">
              <span className="label-text text-black ">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Name here"
              className="input input-bordered "
            />
          </div>
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
          <div className="form-control  ">
            <label className="label ">
              <span className="label-text text-black ">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email here"
              className="input input-bordered "
            />
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
          <div className="form-control  ">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 charercters or longer",
                },
              })}
              placeholder="Password here"
              className="input input-bordered  "
            />
          </div>
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
          <input
            className="btn btn-outline w-full text-black mt-3"
            type="submit"
            value={loading ? <SmallLoader /> : "Sign Up"}
          />
        </form>
        {error && <p>{error}</p>}
        <p className="text-black text-sm mt-1">
          Already have an account{" "}
          <Link className="text-secondary text-xs" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
