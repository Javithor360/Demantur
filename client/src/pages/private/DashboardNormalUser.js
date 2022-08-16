import "./assets/scss/dashboardStyle.scss";
import "./components/assets/scss/SideBar_Main.scss";
import { SideBar, Header, Settings } from "./components/indexComp";
import { useDash } from "../../context/DashboardContext";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Contacts, HomePage, Transactions, UserCards, ActLoans, Accounts } from "./components/DashElements/indexDashElement";
import { useEffect, useState } from "react";

export const DashboardNormalUser = () => {
  const { Option, SettingsOption, GeneralInfoQuery } = useDash();

  const [Chargin, setChargin] = useState(true);

  useEffect(() => {
    GeneralInfoQuery(localStorage.getItem("authToken"));
    document.body.style.overflowY = "hidden";
    setTimeout(() => {
      setChargin(false);
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DisplayElement = () => {
    switch (Option) {
      case 1:
        return <HomePage />;
      case 2:
        return <h1><Accounts /></h1>;
      case 3:
        return <Transactions />;
      case 4:
        return <h1><ActLoans /></h1>;
      case 5:
        return <Contacts />;
      case 6:
        return <UserCards />;
      default:
        return <h1>Home Page</h1>;
    }
  };

  return (
    <>
      {Chargin === true && (
        <div className="container-texts">
          <span className="loader"></span>
        </div>
      )}
      <div className="w-screen h-screen bg-[#F1F1F1] relative">
        <div className="w-full h-2/5 bg-[#323643] absolute"></div>
        <div className="absolute flex items-center justify-center w-full h-full">
          <div className="w-[98%] h-[95%] flex">
            {/* sidebar */}
            <SideBar />
            <div className="h-full w-[80%]  mx-auto">
              <Header />
              <div className="pl-4 Display-dash-div">
                <div className="h-100">
                  <div className="flex flex-col justify-between py-3 w-100 h-100">
                    {DisplayElement()}
                  </div>
                </div>
              </div>
              <SwitchTransition>
                <CSSTransition
                  classNames="fade"
                  key={SettingsOption === false ? 1 : 2}
                  // timeout={0}
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                >
                  <div>
                    {SettingsOption === true ? (
                      <Settings />
                    ) : (
                      <Settings hidden={"hidden"} />
                    )}
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
