import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../../utils/Redux/Slice/UserSlice";
import { cleartoken } from "../../../utils/Redux/Slice/tokenSlice";


export default  function SettingsPage(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout(){
        dispatch(clearUser())
        dispatch(cleartoken())
        navigate('/login')
    }
    return(

        <>
              <Button 
              color="red"
              onClick={handleLogout}
              >Logout</Button>
        </>
    )
}