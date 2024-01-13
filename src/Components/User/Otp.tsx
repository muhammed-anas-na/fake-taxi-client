import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

export default function Otp() {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
        setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div className="screen bg-bg-image h-svh">
      <ToastContainer />
      <div className="grid place-items-center">
        <div className="h-auto w-96 bg-white rounded-2xl shadow-2xl mt-56 text-center">
          <h1 className="font-bold mt-5 text-4xl">ENTER OTP</h1>
          <form method="post" onSubmit={handleSubmit}>
            <div className="mt-8">
              <input
                {...register("otp", {
                  required: true,
                })}
                type="number"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="OTP"
              />
              {errors.email?.type == "required" && (
                <p className="text-red-500 text-xs">OTP is required</p>
              )}
              <br />
            </div>
            <button
              type="submit"
              className="mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-28 py-2.5 mt-16 text-center me-2"
            >
              VERIFY
            </button>
          </form>
        </div>

        <p className="mt-2 ">
        {
            counter > 0 ? <p>Your OTP will expire in: {counter}</p>:""
        }
          
          {counter <= 0 ? (
            <span className="font-bold text-blue-950 cursor-pointer mx-3">
              Resend otp
            </span>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
}
