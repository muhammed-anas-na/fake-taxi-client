import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";

export default function ProfilePersonal() {
  const userData = useSelector((store)=>store.user.userData)
  return (
    <div className="mt-5 ml-3">
      <h1>Email : {userData.email}</h1>
      <h1>Phone : {userData.phone}</h1>
      <Button color="red" className="p-2 mt-[20vh]">
        Logout
      </Button>
    </div>
  );
}
