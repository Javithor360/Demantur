import "./assets/scss/dashboardStyle.scss";
import "./components/assets/scss/SideBar_Main.scss";
import { SideBar, Header, Settings } from "./components/indexComp";
import { useDash } from "../../context/DashboardContext";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Contacts, HomePage, Transactions, UserCards, ActLoans, Accounts } from "./components/DashElements/indexDashElement";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const DashboardNormalUser = () => {
  const { Option, SettingsOption, GeneralInfoQuery, getGlobalInfo, setSocket, socket, Info } = useDash();

  const [Chargin, setChargin] = useState(true);
  const [OnlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    GeneralInfoQuery(localStorage.getItem("authToken"));
    getGlobalInfo(localStorage.getItem('authToken'));
    setSocket(io('ws://localhost:5000'));
    document.body.style.overflowY = "hidden";
    setTimeout(() => {
      setChargin(false);
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (socket !== null) {
      socket.emit('onlineUsers', Info.Dui);
      socket.on('getOnlineUsers', users => {
        setOnlineUsers(users);
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Info]);

  const DisplayElement = () => {
    switch (Option) {
      case 1:
        return <HomePage />;
      case 2:
        return <Accounts />;
      case 3:
        return <Transactions OnlineUsers={OnlineUsers} />;
      case 4:
        return <ActLoans />;
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
            <div className="h-[95%] w-[80%]  mx-auto">
              <Header />
              <div className="pl-4 Display-dash-div">
                <div className="h-100">
                  <div className="flex flex-col justify-between py-3 w-100 h-full">
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
