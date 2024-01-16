import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link , useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import './UserSIgnup.css';
import { SendOtpFn } from '../../utils/Axios/methods/POST';
import { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from "../../assets/Animations/car-loading.json";

export default function UserSignup() {
  const navigate = useNavigate();
  const [clicked,setClicked] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignup=async(data)=>{
    setClicked(true);
    // try{
    //     const response = await SignupFn(data);
    //     if(response.data.accessToken){
    //       dispatch(addUser(response.data.newUser));
    //       dispatch(addtoken(response.data.accessToken));
    //       axios.defaults.headers.common['Authorization'] = `${response.data.accessToken}`
    //       navigate('/otp');
    //     }
    // }catch(err){
    //   toast.error(err.response.data.errMessage)
    // }
    try{
        let response = await SendOtpFn(data)
        localStorage.setItem('userData' , JSON.stringify(data));
        navigate('/otp')
    }catch(err){
      setClicked(false)
      toast.error(err.response.data.errMessage)
    }

  }

  return (
    <div className="screen bg-bg-image h-svh">
      <ToastContainer />
      <div className="grid place-items-center">
        <div className="h-auto w-96 bg-white rounded-2xl shadow-2xl mt-28 text-center">
          <h1 className="font-bold mt-5 text-4xl">SIGNUP</h1>
          <form method="post" onSubmit={handleSubmit(handleSignup)}>
            <div className="mt-8">
              <input
                {...register("first_name", {
                  required: true,
                  pattern: /^[A-Z][a-zA-Z]{3,}$/,
                })}
                type="text"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="First Name"
              />
              {errors.first_name?.type == "required" && (
                <p className="text-red-500 text-xs">First Name is required</p>
              )}
              {errors.first_name?.type == "pattern" && (
                <p className="text-red-500 text-xs">Invalid first name</p>
              )}
              <br />
              <input
                {...register("last_name", {
                  required: true,
                  pattern: /^[A-Z][a-zA-Z]{3,}$/,
                })}
                type="text"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="Last Name"
              />
              {errors.last_name?.type == "required" && (
                <p className="text-red-500 text-xs">Last Name is required</p>
              )}
              {errors.last_name?.type == "pattern" && (
                <p className="text-red-500 text-xs">Invalid last name</p>
              )}
              <br />
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                type="email"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="Email"
              />
              {errors.email?.type == "required" && (
                <p className="text-red-500 text-xs">Email is required</p>
              )}
              {errors.email?.type == "pattern" && (
                <p className="text-red-500 text-xs">Invalid Email</p>
              )}
              <br />
              <input
                {...register("phone", { required: true, pattern: /^\d{10}$/ })}
                type="text"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="Phone"
              />
              {errors.phone?.type == "required" && (
                <p className="text-red-500 text-xs">Phone is required</p>
              )}
              {errors.phone?.type == "pattern" && (
                <p className="text-red-500 text-xs">Invalid Number</p>
              )}
              <br />
              <input
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                })}
                type="password"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="Password"
              />
              {errors.password?.type == "required" && (
                <p className="text-red-500 text-xs">Password is required</p>
              )}
              {errors.password?.type == "pattern" && (
                <p className="text-red-500 text-xs">Invalid Password</p>
              )}
            </div>
            {clicked ? (
              <div className="mb-3 bg-blue-500 hover:bg-blue-800 rounded-lg mt-16 text-center mx-10">
                <Lottie animationData={animationData} style={{height:"40px"}} />
              </div>
      ) : (
        <button
          type="submit"
          className="mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-28 py-2.5 mt-16 text-center me-2"
        >
          SIGNUP
        </button>
      )}
            {/* <button
              type="submit"
              className="mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-28 py-2.5 mt-16 text-center me-2"
            >
              SIGNUP
            </button> */}


          </form>
        </div>
        <p className="mt-2">
          Already have an account?{" "}
          <Link to={"/login"} className="font-bold text-blue-950">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
