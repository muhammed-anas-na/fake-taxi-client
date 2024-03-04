import {  Route, Routes } from "react-router-dom";

import UserRoute from './Routes/UserRoutes';
import DriverRoute from './Routes/DriverRoutes'
import AdminRoute from './Routes/AdminRoutes'
import Login from "./Components/Driver/Login";


function App() {


  return (
    <Routes>
      <Route path="/*" element={<UserRoute/>}/>
      <Route path="driver/*" element={<DriverRoute/>}/>
      <Route path="admin/*" element={<AdminRoute/>}/>
    </Routes>
  )
}

export default App
