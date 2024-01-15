
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface storeData{
  token:{
    token: string
  }
} 

const ProtectedRoute = ({children}:{children:any}) => {
  const user = useSelector((store: storeData) => store?.token?.token); 
  if(!user) {
      return <Navigate to="/login"/>
  }
return children

};


export default ProtectedRoute;