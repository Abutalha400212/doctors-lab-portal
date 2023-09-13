import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Shared/Navbar/Navbar";
const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile ">
        <input id="dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side ">
          <label htmlFor="dashboard" className="drawer-overlay"></label>
          <ul className="menu p-7 w-60 bg-base-100  text-black">
            <li>
              <Link to='dashboard/myappointment'>My Appointment</Link>
            </li>
           {isAdmin && <>
            <li>
              <Link to='dashboard/allusers'>All Users</Link>
              <Link to='dashboard/adddoctor'>Add a Doctor</Link>
              <Link to='dashboard/mannagedoctor'>Mannage Doctor</Link>
            </li>
           </>}
          </ul>
        </div>
        <div className="drawer-content  p-7">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
};

export default DashboardLayout;
