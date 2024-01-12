
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({children}:{children:any}) => {
  const user = useSelector((store: object) => store?.token?.token); 
  alert(user)
  if(!user) {
      return <Navigate to="/login"/>
  }
return children

};


export default ProtectedRoute;