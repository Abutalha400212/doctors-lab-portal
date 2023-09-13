import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import useToken from "../../hooks/useToken";
import SmallLoader from "../../Loader/SmallLoader";

const Login = () => {
  const { existUser, googleLogin, loading,setLoading } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(loginUserEmail);
  if (token) {
    navigate(from, { replace: true });
  }
  const googleSignIn =  () => {
    googleLogin()
      .then((result) => {
        setLoginUserEmail(result.user.email);
      })
      .catch((err) => console.log(err));
  };
  const handleLogin = (data) => {
    setError("");
    existUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(user.email);
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="h-[500px] flex justify-center items-center text-black">
      <div className="w-96 p-5 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-black ">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)} className="">
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
                pattern: {
                  value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message: "password must be strong",
                },
                minLength: {
                  value: 6,
                  message: "Password must be 6 charercters or longer",
                },
              })}
              placeholder="Password here"
              className="input input-bordered  "
            />
            <label className="label">
              <span className="label-text text-black">Forget Password</span>
            </label>
          </div>
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
          <input
            className="btn btn-outline w-full text-black "
            type="submit"
            value={loading ? <SmallLoader /> : "Log in"}
          />
        </form>
        {error &&<p className="text-red-600">{error}</p>}
        <p className="text-black text-sm">
          New to Doctors Portal{" "}
          <Link className="text-secondary text-xs" to="/signup">
            Create new Account
          </Link>
        </p>
        <div className="divider text-black">OR</div>
        <button
          onClick={googleSignIn}
          className="btn btn-outline text-black w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};
export default Login;
