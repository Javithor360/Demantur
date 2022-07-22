import "./assets/scss/dashboardStyle.scss";
import "./components/assets/scss/SideBar_Main.scss";
import { SideBar, Header } from "./components/indexComp";
export const DashboardNormalUser = () => {
  return (
    <div className="w-screen h-screen bg-[#F1F1F1] relative">
      <div className="w-full h-2/5 bg-[#323643] absolute"></div>
      <div className="w-full h-full absolute flex items-center justify-center">
        <div className="w-[98%] h-[95%] flex">
          {/* sidebar */}
          <SideBar />

          <div className="h-full w-[80%]">
            <Header />  
          </div>
        </div>
      </div>
    </div>
  );
};
