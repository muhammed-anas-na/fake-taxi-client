import { ToastContainer, toast } from "react-toastify";
import { DriverSignupFn } from "../../utils/Axios/methods/POST";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDriver } from "../../utils/Redux/Slice/DriverSlice";
import { addtoken } from "../../utils/Redux/Slice/tokenSlice";
import axios from "axios";
import { CForm, CFormInput } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useState } from "react";
import { Input } from "@material-tailwind/react";

interface responseData {
  status: number;
  data: {
    newDriver: object;
    accessToken: string;
  };
}

interface ErrorData {
  response: {
    data: {
      errMessage: string;
    };
  };
}

export default function EnterVhDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    vehicle_brand: "",
    vehicle_name: "",
    rc_number: "",
    vehicle_category: "",
  });
  const [validated, setValidated] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleDriverSignup = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      event.preventDefault();
      const driverDetails = JSON.parse(localStorage.getItem("driverDetails"));
      console.log(driverDetails);
      const data = { ...driverDetails, ...formData };
      console.log(data);
      const response: responseData = await DriverSignupFn(data);
      if (response.status == 200) {
        dispatch(addDriver(response.data.newDriver));
        dispatch(addtoken(response.data.accessToken));
        axios.defaults.headers.common[
          "Authorization"
        ] = `${response.data.accessToken}`;
        navigate("/driver/success");
        localStorage.removeItem("driverDetails");
      } else {
        toast.error("Invalid data");
      }
    } catch (err: ErrorData) {
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
          <form onSubmit={handleDriverSignup} noValidate>
            <div className="mt-8 flex flex-col gap-6">
              <Input
                className="py-11"
                label="Vehicle Brand"
                variant="standard"
                type="text"
                placeholder="Vehicle Brand"
                name="vehicle_brand"
                onChange={handleInputChange}
              />
              <Input
                label="Vehicle Name"
                variant="standard"
                type="text"
                placeholder="Vehicle Name"
                name="vehicle_name"
                onChange={handleInputChange}
              />

              <Input
                label="RC Number"
                variant="standard"
                type="number"
                placeholder="RC Number"
                name="rc_number"
                onChange={handleInputChange}
              />

              <Input
                label="Vehicle Category"
                variant="standard"
                type="text"
                placeholder="Vehicle Category"
                name="vehicle_category"
                onChange={handleInputChange}
              />
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
