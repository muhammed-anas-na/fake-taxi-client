import { lazy, Suspense, useState } from "react";
import AdminHeader from "./DashboardComponents/AdminHeader";
import AdminNavbar from "./AdminNavbar";
const RowOne = lazy(() => import("./DashboardComponents/RowOne"));
const ViewDrivers = lazy(() => import("./DashboardComponents/ViewDrivers"));
const VehicleCategory = lazy(()=>import("./DashboardComponents/VehicleCategory"))
// import ViewDrivers from "./DashboardComponents/ViewDrivers";

export default function AdminDashboard() {
  return (
    <Suspense fallback="Loading...">
      <RowOne/>
    </Suspense>
  );
}
