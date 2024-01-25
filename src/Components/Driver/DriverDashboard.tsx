
import { DriverHeader } from "./DashboardComponents/DriverHeader";
import DriverSidebar from "./DashboardComponents/DriverSidebar";
import RowOne from "./DashboardComponents/RowOne";


export default function DriverDashboard(){
    return(

<div className="grid grid-cols-5 grid-rows-5">
    <div className="row-span-5">
        <DriverSidebar/>
    </div>
    <div className="col-span-4 row-span-5">
        <DriverHeader/>
        <RowOne/>
    </div>
</div>
    
    )
}