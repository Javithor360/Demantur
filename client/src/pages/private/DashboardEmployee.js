import { useEffect, useState } from "react";
import { SideBar } from "./components/SideBarEmployee";
import { Header } from "./components/HeaderEmployee";
import "./assets/scss/dashboarde.scss";
import { useDash } from "../../context/DashboardContext";
import { HomePageEmployee, LoansRequests, CardsRequests, Requests, Deposits } from "./components/DashboardEmployeeElements/IndexEmployeeDash";
import { useEmpConx } from "../../context/EmployeeContext";


export const DashboardEmployee = () => {
  const { Option, SettingsOption, GeneralInfoQuery} = useDash();

  const { EmployeeInfoQuery } = useEmpConx();

  useEffect(() => {
    EmployeeInfoQuery(localStorage.getItem("employeeToken"));
  }, []);

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
      case 5:
        return <Deposits />
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