import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { register, formState: { errors }, handleSubmit } = useForm();
  const {logIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');


  const hadnleLogin = (data) => {

    setLoginError('')
    logIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch(error=> {
      console.error(error.message);
      setLoginError(error.message);
    })

    console.log(data);

  }
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="w-96 p-5 border shadow-lg rounded-xl">
        <h1 className="text-2xl text-center">Login</h1>
        <form onSubmit={handleSubmit(hadnleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-error" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password Address is required",
                minLength: { value: 7, message: "Pass min 7" },
              })}
              type="password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-error" role="alert">
                {errors.password?.message}
              </p>
            )}

            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>

          <input type="submit" value="Login" className="btn w-full mt-4" />
          <p className="text-error">{loginError}</p>
        </form>
        <p className="text-center text-sm mt-2">
          New to Doctor Portal?
          <Link to="/signup" className="text-secondary font-semibold">
            Create an account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">Coninue with GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
