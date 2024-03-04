
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DriverProtected = ({children}:{children:any}) => {
  const user = useSelector((store: object) => store?.driver?.driverData);
  if(!user.full_name) {
      return <Navigate to="/driver/login"/>
  }
return children

};


export default DriverProtected;