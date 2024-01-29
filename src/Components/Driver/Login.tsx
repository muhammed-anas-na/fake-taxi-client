import { Link , useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addDriver, clearDriver } from "../../utils/Redux/Slice/DriverSlice";
import { DriverLoginFn } from "../../utils/Axios/methods/POST";
import { addtoken } from "../../utils/Redux/Slice/tokenSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleDriverLogin = async(data: object)=>{
    try{
      const response = await DriverLoginFn(data)
      console.log(response);
      if(response.status == 200){
        alert("HIII")
        dispatch(clearDriver());
        dispatch(addDriver(response.data.driverDetails))
        dispatch(addtoken(response.data.accessToken))
      }
    }catch(err){
      toast.error(err.response.data.errMessage);
    }
  }
  return ( 
    <div>
      <header className="bg-base-yellow p-3">
        <img src="/logo-main.webp" />
      </header>
      <ToastContainer />
      <div className="grid place-items-center">
        <div className="h-auto w-96 bg-white rounded-2xl shadow-2xl mt-12 text-center">
          <h1 className="font-bold mt-5 text-4xl">DRIVER LOGIN</h1>
          <form onSubmit={handleSubmit(handleDriverLogin)}>
            <div className="mt-8">
              <input
                {...register("number", {
                  required: true,
                })}
                type="number"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="Registered Number"
              />
              {errors.number?.type == "required" && (
                <p className="text-red-500 text-xs">Number is required</p>
              )}
              <input
                {...register("password", {
                  required: true,
                })}
                type="password"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="Password"
              />
              {errors.password?.type == "required" && (
                <p className="text-red-500 text-xs">Password is required</p>
              )}
            </div>
            <button
              type="submit"
              className="mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-28 py-2.5 mt-16 text-center me-2"
            >
              LOGIN
            </button>
          </form>
        </div>

        <p className="mt-2">
          New?{" "}
          <Link to={"/driver/signup"} className="font-bold text-blue-950">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
}
