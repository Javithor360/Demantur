import { useEffect, useState } from "react";
import { SideBar } from "./components/SideBarEmployee";
import { Header } from "./components/HeaderEmployee";
import "./assets/scss/dashboarde.scss";
import { useDash } from "../../context/DashboardContext";
import { HomePageEmployee, LoansRequests, CardsRequests, Requests, Deposits, ClientFetch, SimulationCard } from "./components/DashboardEmployeeElements/IndexEmployeeDash";
import { useEmpConx } from "../../context/EmployeeContext";

export const DashboardEmployee = () => {
  const { Option, SettingsOption, GeneralInfoQuery } = useDash();
  const [Chargin, setChargin] = useState(true);
  const { EmployeeInfoQuery } = useEmpConx();

  useEffect(() => {
    EmployeeInfoQuery(localStorage.getItem("employeeToken"));
    setTimeout(() => {
      setChargin(false);
    }, 1500);
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
      case 6:
        return <ClientFetch />
      case 7:
        return <SimulationCard />
      default:
        return <h1>Home Page</h1>;
    }
  };
  return (
    <>
      {Chargin === true && (
        <div className="container-texts">
          <span className="loader2"></span>
        </div>
      )}
      <div className="w-screen h-screen bg-[#396EB0] relative">
        <div className="w-full h-2/5 bg-[#F1F1F1] absolute fondo"></div>
        <div className="absolute flex items-center justify-center w-full h-full">
          <div className="w-[100%] h-[100%] flex">
            <div>
              <SideBar />
            </div>
            <div className="h-full w-full flex items-center">
              <div className="h-[95%] w-[98%]">
                <Header />
                <div className="pl-4 h-[95%]">
                  <div className="h-full">
                    <div className="flex flex-col py-3 w-full h-full">
                      {DisplayElementEmployee()}
                    </div>
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
