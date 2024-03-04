
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface storeData{
  token:{
    token: string
  }
} 

const DriverProtectedAuth = ({children}:{children:any}) => {
  const user = useSelector((store: storeData) => store?.driver?.driverData); 
  if(user.full_name) {
      return <Navigate to="/driver/dashboard"/>
  }
return children
};
export default DriverProtectedAuth;