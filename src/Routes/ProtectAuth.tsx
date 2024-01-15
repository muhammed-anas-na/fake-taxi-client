
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface storeData{
  token:{
    token: string
  }
} 

const ProtectedAuth = ({children}:{children:any}) => {
  const token = useSelector((store: storeData) => store?.token?.token); 
  if(token) {
      return <Navigate to="/"/>
  }
return children

};


export default ProtectedAuth;