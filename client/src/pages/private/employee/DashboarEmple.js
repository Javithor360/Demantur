
import { useState } from "react";
import { SideBar } from "../components/DashboardEmple/SideBarEmployee";
import { Header } from "../components/DashboardEmple/HeaderEmployee";
import "../assets/scss/dashboarde.scss";
import { useDash } from "../../../context/DashboardContext";
import { HomePageEmployee, LoansRequests, CardsRequests, Requests } from "../components/DashboardEmple/DashEmployeeElements/IndexEmployeeDash";

export const DashboarEmple = () => {
  const { Option, SettingsOption, GeneralInfoQuery } = useDash();

  const DisplayElementEmployee = () => {
    switch (Option) {
      case 1:
        return <HomePageEmployee />;
      case 2:
        return <LoansRequests />;
      case 3:
        return <CardsRequests />;
      case 4:
        return <Requests />
      default:
        return <h1>Home Page</h1>;
    }
  };
  return (
    <>
     
      <div className="w-screen h-screen bg-[#F1F1F1] relative">
        <div className="w-full h-2/5 bg-[#396EB0] absolute fondo"></div>
        <div className="absolute flex items-center justify-center w-full h-full">
          <div className="w-[98%] h-[95%] flex">
            <SideBar />
            <div className="h-[95%] w-[80%]  mx-auto">
              <Header />
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
  );
};
