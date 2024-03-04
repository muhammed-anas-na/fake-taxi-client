
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface storeData{
  token:{
    token: string
  }
} 

const ProtectedAuth = ({children}:{children:any}) => {
  const user = useSelector((store: storeData) => store?.user?.userData); 
  if(user.full_name) {
      return <Navigate to="/"/>
  }
return children

};


export default ProtectedAuth;