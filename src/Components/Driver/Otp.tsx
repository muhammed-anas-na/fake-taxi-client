import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { DriverCheckOtpFn, SendSmsDriver } from '../../utils/Axios/methods/POST';
import { useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";


export default function Otp() {
  const navigate = useNavigate();

  //Counter for timer 60s
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    toast.success("Otp send succesfull" ,{
      position: toast.POSITION.TOP_CENTER,
      icon:"👍"
    })
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

  const resnedOtp = async()=>{
    const userData = JSON.parse(localStorage.getItem('driverDetails'));
    const myPromise = new Promise((resolve)=>{
        SendSmsDriver(userData).then((response)=>{
          console.log("RESPONSE ====>",response)
          setCounter(60)
          resolve(response)
        })
    })
    toast.promise(myPromise, {
      pending: "Resending Otp",
      success: `Otp send to ${userData.phone}`,
      error: "error",
    });
  }

  const handleConfirmOtp =async(otp: object)=>{
    try{
      const response = await DriverCheckOtpFn(otp);
      if(response.status == 200){
        navigate('/driver/vehicle_details')
      }
    }catch(err){
      toast.error(err.response.data.errMessage)
    }
  }

  return (
    <div className="screen bg-bg-image h-svh">
      <ToastContainer />
      <div className="grid place-items-center">
        <div className="h-auto w-96 bg-white rounded-2xl shadow-2xl mt-56 text-center">
          <h1 className="font-bold mt-5 text-4xl">ENTER OTP</h1>
          <form method="post" onSubmit={handleSubmit(handleConfirmOtp)}>
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
            <span className="font-bold text-blue-950 cursor-pointer mx-3" onClick={resnedOtp}>
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
