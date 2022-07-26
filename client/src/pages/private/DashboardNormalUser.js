import "./assets/scss/dashboardStyle.scss";
import "./components/assets/scss/SideBar_Main.scss";
import { SideBar, Header } from "./components/indexComp";
import { useDash } from "../../context/DashboardContext";

export const DashboardNormalUser = () => {
  const { Option } = useDash()

  const DisplayElement = () => {
    switch (Option) {
      case 1: return <h1>Home Page</h1>;
      case 2: return <h1>Cuentas</h1>;
      case 3: return <h1>Transferencias</h1>;
      case 4: return <h1>Préstamos</h1>;
      case 5: return <h1>Contactos</h1>;
      case 6: return <h1>Tarjetas</h1>;
      default: return <h1>Home Page</h1>;

    }
  }

  return (
    <div className="w-screen h-screen bg-[#F1F1F1] relative">
      <div className="w-full h-2/5 bg-[#323643] absolute"></div>
      <div className="w-full h-full absolute flex items-center justify-center">
        <div className="w-[98%] h-[95%] flex">
          {/* sidebar */}
          <SideBar />

          <div className="h-full w-[80%]  mx-auto">
            <Header />
            <div className="mx-3">
              {DisplayElement()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
