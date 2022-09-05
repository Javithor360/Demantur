import { useEffect, useState } from "react";
import { IoWalletSharp } from "react-icons/io5";
import { useDash } from "../../../../context/DashboardContext";
import '../assets/scss/HomePage.scss'
import { HistoryWidget, ContactsWidget } from "./HomePageWidgets/";

// Translation
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { Info, setInfo, clientBalance, socket, setClientBalance, SavingAccounts, setSavingAccounts } = useDash();
  const { t } = useTranslation();

  const [plusMount, setPlusMount] = useState(null);
  const [Elm, setElm] = useState(null);

  useEffect(() => {
    // getSavingAccts(localStorage.getItem('authToken'))
    if (plusMount !== null) {
      setClientBalance(prev => (parseFloat(prev) + parseFloat(plusMount)).toFixed(2));
      setPlusMount(null)
    }
  }, [plusMount, setClientBalance]);

  useEffect(() => {
    if (Elm !== null) {
      let auxAccounts = SavingAccounts;
      auxAccounts.forEach(element => {
        // eslint-disable-next-line eqeqeq
        if (element.accountNumber == Elm.transfer.AccountReceiver) {
          element.balance = (parseFloat(element.balance) + parseFloat(Elm.transfer.Amount)).toFixed(2);
        }
        setSavingAccounts(auxAccounts);
      });
    }
  }, [Elm, SavingAccounts, setSavingAccounts]);

  useEffect(() => {
    socket?.on('getTransfer', data => {
      // getGlobalInfo(localStorage.getItem('authToken'));
      setPlusMount(data.transfer.Amount)
      setElm(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden scroll-home">
      <div className="flex gap-3 my-1">
        <div className=" bg-white basis-[40%] rounded-[0.75rem]">
          <div className="m-[2rem] flex justify-between">
            <div>
              <h2 className="text-gray-500 text-[1.5625rem]">{t("DashboardNormalUser.Home.balance")}</h2>
              <p className="text-[1.7rem]">$ {clientBalance}</p>
            </div>
            <div className=" my-auto p-[10px] bg-[#323643] rounded-[50px]">
              <IoWalletSharp className="text-[3rem] text-white" />
            </div>
          </div>
        </div>
        <div className=" bg-white basis-[60%] rounded-[0.75rem]">
          <div className="mx-[2rem] my-[1rem]">
            <h2 className="text-gray-500 text-[1.5625rem] text-center">{t("DashboardNormalUser.Home.information")}</h2>
            <div className="grid grid-cols-3 gap-1">
              <div>
                <h6 className="text-gray-400 font-[1.125rem]">{t("DashboardNormalUser.Home.name")}</h6>
                <p className="font-[1.125rem]">
                  {`${Info.FirstName} ${Info.LastName}`}
                </p>
              </div>
              <div>
                <h6 className="text-gray-400 font-[1.125rem]">{t("DashboardNormalUser.Home.dui")}</h6>
                <p className="font-[1.125rem]">{`${Info.Dui}`}</p>
              </div>
              <div className="ml-[-3.5rem]">
                <h6 className="text-gray-400 ">{t("DashboardNormalUser.Home.email")}</h6>
                <p className="font-[1.125rem]">{`${Info.Email}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 my-1">
        <div className="basis-[70%] bg-white rounded-[0.75rem] ">
          <div className="m-[2rem]">
            <HistoryWidget />
          </div>
        </div>
        <div className="h-[30rem] w-[30%] bg-white rounded-[0.75rem] overflow-y-auto overflow-x-hidden scroll-widgets">
          <div className="mx-[1rem] my-[2rem]">
            <ContactsWidget />
          </div>
        </div>
      </div>

      <div className="flex gap-3 my-1">
        <div className="basis-[65%] bg-white rounded-[0.75rem]">
          <div className="m-[2rem] flex justify-between">
            <div>
              <h2 className="text-gray-500 text-[1.5625rem]">{t("DashboardNormalUser.Home.cards")}</h2>
            </div>
          </div>
        </div>
        <div className="basis-[35%] bg-white rounded-[0.75rem]">
          <div className="m-[2rem] flex justify-between">
            <div>
              <h2 className="text-gray-500 text-[1.5625rem]">{t("DashboardNormalUser.Home.loan")}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};