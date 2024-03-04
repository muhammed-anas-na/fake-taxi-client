import { useEffect, useState } from "react";
import { getAllUsersFn } from "../../../utils/Axios/methods/GET";
import { Link } from "react-router-dom";

export default function AdminUserTable({updateTotalUser}) {
  const [userDetails, setuserDetails] = useState([]);

  useEffect(()=>{
    async function fetchUserDetails(){
      try{
        const response = await getAllUsersFn()
        setuserDetails(response.data);
        updateTotalUser(response.data.length)
      }catch(err){
        console.log(err);
      }
    }
    fetchUserDetails()
  },[])
  return (
    <div className="overflow-x-auto">
      {userDetails ? (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
                {userDetails.map((value,index)=>{
                  return(
                    <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{value.full_name}</div>
                        <div className="text-sm opacity-50">India</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {value.phone}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                    {value.email}
                    </span>
                  </td>
                  <td></td>
                  <th>
                    <Link to={`/admin/user-details/${value._id}`}>
                      <button className="btn btn-ghost btn-xs px-3">
                        Details
                      </button>
                    </Link>
                  </th>
                </tr>
                  )
                })}
          </tbody>
        </table>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
