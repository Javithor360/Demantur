import { IoWalletSharp } from "react-icons/io5";
import { useDash } from "../../../../context/DashboardContext";
import '../assets/scss/HomePage.scss'
import { HistoryWidget, ContactsWidget } from "./HomePageWidgets/";

export const HomePage = () => {
  const { Info, SavingAccounts } = useDash();
  return (
    <div>
      <div className="flex gap-3 my-1">
        <div className=" bg-white basis-[40%] rounded-[0.75rem]">
          <div className="m-[2rem] flex justify-between">
            <div>
              <h2 className="text-gray-500 text-[1.5625rem]">Saldo Neto:</h2>
              <p className="text-[1.7rem]">$ {SavingAccounts.balance}</p>
            </div>
            <div className=" my-auto p-[10px] bg-[#323643] rounded-[50px]">
              <IoWalletSharp className="text-[3rem] text-white" />
            </div>
          </div>
        </div>
        <div className=" bg-white basis-[60%] rounded-[0.75rem]">
          <div className="mx-[2rem] my-[1rem]">
            <h2 className="text-gray-500 text-[1.5625rem] text-center">Datos personales</h2>
            <div className="grid grid-cols-3 gap-1">
              <div>
                <h6 className="text-gray-400 font-[1.125rem]">Nombre:</h6>
                <p className="font-[1.125rem]">
                  {`${Info.FirstName} ${Info.LastName}`}
                </p>
              </div>
              <div>
                <h6 className="text-gray-400 font-[1.125rem]">DUI:</h6>
                <p className="font-[1.125rem]">{`${Info.Dui}`}</p>
              </div>
              <div className="ml-[-3.5rem]">
                <h6 className="text-gray-400 ">Email:</h6>
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
        <div className="basis-[30%] bg-white rounded-[0.75rem]">
          <div className="m-[2rem] h-[72%]">
            <ContactsWidget />
          </div>
        </div>
      </div>

      <div className="flex gap-3 my-1">
        <div className="basis-[65%] bg-white rounded-[0.75rem]">
          <div className="m-[2rem] flex justify-between">
            <div>
              <h2 className="text-gray-500 text-[1.5625rem]">Tarjetas</h2>
            </div>
          </div>
        </div>
        <div className="basis-[35%] bg-white rounded-[0.75rem]">
          <div className="m-[2rem] flex justify-between">
            <div>
              <h2 className="text-gray-500 text-[1.5625rem]">Préstamo</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};