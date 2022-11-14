import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {

    const {handleSubmit, register, formState: { errors } } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signupError, setSignupError] = useState('')

    const hadnleSignUp = (data) =>{
        console.log(data);

        setSignupError('');
        createUser(data.email, data.password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          toast.success('Signup Successfull')

          const updatedUser = {
            displayName: data.name
          }
          updateUser(updatedUser)
          .then(()=>{})
          .catch(error=>console.log(error))

        })
        .catch(error=>{
          setSignupError(error.message);
          toast.error(`${signupError}`)
        })
    }

    return (
        <div className=" min-h-screen flex justify-center items-center">
        <div className="w-96 border p-5 border-red-600 rounded-xl">
          <h1 className="text-2xl text-center">Sign Up</h1>


          <form onSubmit={handleSubmit(hadnleSignUp)}>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                className="input input-bordered w-full"
              />
                {errors.name && (<p className="text-error" role="alert"> {errors.email?.message}</p>)}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: "Email Address is required" })}
                type="text"
                className="input input-bordered w-full"
              />
            {errors.email && (<p className="text-error" role="alert"> {errors.email?.message}</p>)}
            </div>
  
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password Address is required",
                   pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{6}/, message: 'must be strong'}
                })}
                type="text"
                className="input input-bordered w-full"
              />
              {errors.password && (<p className="text-error" role="alert"> {errors.password?.message}</p>)}
            </div>
  
            <input type="submit" value="Signup" className="btn w-full mt-4" />
            {signupError &&  <p className='text-error' >{signupError}</p> }
          </form>


          <p className="text-center text-sm mt-2">
            Already have an account? 
            <Link to="/login" className="text-secondary font-semibold"> 
               Login
            </Link>
          </p>

          <div className="divider">OR</div>

          <button className="btn btn-outline w-full">Coninue with GOOGLE</button>
        </div>

      </div>
    );
};

export default Signup;