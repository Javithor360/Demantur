import React from 'react'
import { SideBar } from './SideBar-Admin';
import { useDash } from "../../../context/DashboardContext";

import "../assets/scss/dashboardadmin.scss";
import { AdminDuis, AdminsRequest, AdminEmployees  } from './IndexAdmin';

const Logo = require.context("../assets/img/logo", true);

export const AdminDashboard = () => {

  const { Option, SettingsOption, GeneralInfoQuery} = useDash();


  const DisplayElementEmployee = () => {
    switch (Option) {
      case 1:
        return <AdminDuis />;
      case 2:
        return <AdminsRequest />;
      case 3: 
        return <AdminEmployees />;
      default:
        return <h1>Home Page</h1>;
    }
  };
  return (
    <>
      
      <div className="w-screen h-screen bg-[#F1F1F1] relative">
        <div className="w-full h-2/5 bg-[#7c85a1] absolute fondo"></div>
        <div className="absolute flex items-center justify-center w-full h-full">
          <div className="w-[98%] h-[95%] flex">
            <SideBar />
            <div className="h-[95%] w-[80%]  mx-auto">
              <div className="pl-4 Display-dash-div">
                <div className="h-100">
                  <div className="flex flex-col justify-between py-3 w-100 h-100">
                    {DisplayElementEmployee()}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div> 
    </>
  )
}
