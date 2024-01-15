import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { DriverSendOtpFn } from "../../utils/Axios/methods/POST";

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function handleDriverSignup(data){
    localStorage.setItem('driverDetails' ,JSON.stringify(data));
    const response = await DriverSendOtpFn(data);
    navigate('/driver/otp')
  }

  return (
    <div>
      <header className="bg-base-yellow p-3">
        <img src="/logo-main.webp" />
      </header>
      <ToastContainer />
      <div className="grid place-items-center">
        <div className="h-auto w-96 bg-white rounded-2xl shadow-2xl mt-12 text-center">
          <h1 className="font-bold mt-5 text-4xl">DRIVER SIGNUP</h1>
          <form method="post" onSubmit={handleSubmit(handleDriverSignup)}>
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
            <button
              type="submit"
              className="mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-28 py-2.5 mt-16 text-center me-2"
            >
              CONTINUE
            </button>
          </form>
        </div>

        <p className="mt-2">
          Already have an account?
          <Link to={"/driver/login"} className="font-bold text-blue-950">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
