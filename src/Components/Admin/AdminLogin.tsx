import { Link , useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminLoginFn } from "../../utils/Axios/methods/POST";
import { useDispatch } from "react-redux";
import { addUser, clearUser } from "../../utils/Redux/Slice/UserSlice";
import { addtoken } from "../../utils/Redux/Slice/tokenSlice";

export default function AdminLogin(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const handleLogin=async(data: object)=>{
      alert("FUNCTION CALLED")
      const response = await AdminLoginFn(data);
      if(response.status == 200){
        dispatch(clearUser());
        dispatch(addUser(response.data.adminDetails))
        dispatch(addtoken(response.data.accessToken));
        navigate('/admin');
      }
    }
    
    return(
        <div className="screen bg-bg-image h-svh">
        <ToastContainer/>
        <div className="grid place-items-center">
          <div className="h-auto w-96 bg-white rounded-2xl shadow-2xl mt-56 text-center">
            <h1 className="font-bold mt-5 text-4xl">ADMIN LOGIN</h1>
            <form method="post" onSubmit={handleSubmit(handleLogin)}>
              <div className="mt-8">
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
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}