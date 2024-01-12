import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { DriverSignupFn } from "../../utils/Axios/methods/POST";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDriver } from "../../utils/Redux/Slice/DriverSlice";
import { addtoken } from "../../utils/Redux/Slice/tokenSlice";
import axios from "axios";

export default function EnterVhDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleDriverSignup = async ( data: object) => {
    try {
      console.log(data);
      const driverDetails = JSON.parse(localStorage.getItem("driverDetails"));
      console.log(driverDetails);
      data = {...driverDetails , ...data}
      const response = await DriverSignupFn(data);
      if(response.status == 200){
        dispatch(addDriver(response.data.newDriver));
        dispatch(addtoken(response.data.accessToken));
        axios.defaults.headers.common['Authorization'] = `${response.data.accessToken}` 
        navigate("/driver");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.errMessage);
    }
  };
  return (
    <div>
      <header className="bg-base-yellow p-3">
        <img src="/logo-main.webp" />
      </header>
      <ToastContainer />
      <div className="grid place-items-center">
        <div className="h-auto w-96 bg-white rounded-2xl shadow-2xl mt-12 text-center p-4">
          <h1 className="font-bold mt-5 text-4xl">VECHILE DETAILS</h1>
          <form onSubmit={handleSubmit(handleDriverSignup)}>
            <div className="mt-8">
              <input
                {...register("vehicle_brand", {
                  required: true,
                })}
                type="text"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="Vehicle Brand"
              />
                            {errors.vehicle_brand?.type == "required" && (
                <p className="text-red-500 text-xs">Brand is required</p>
              )}
              <br />
              <input
                {...register("vehicle_name", {
                  required: true,
                })}
                type="text"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="Vehicle Name"
              />
                            {errors.vehicle_name?.type == "required" && (
                <p className="text-red-500 text-xs">Name is required</p>
              )}
              <input
                {...register("rc_number", {
                  required: true,
                })}
                type="number"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="RC Number"
              />
                            {errors.rc_number?.type == "required" && (
                <p className="text-red-500 text-xs">RC is required</p>
              )}
              <input
                {...register("vehicle_category", {
                  required: true,
                })}
                type="text"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="Vehicle Category"
              />
                            {errors.vehicle_category?.type == "required" && (
                <p className="text-red-500 text-xs">Category is required</p>
              )}
            </div>
            <button
              type="submit"
              className="mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-28 py-2.5 mt-16 text-center me-2"
            >
              SIGNUP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
