import { IoWalletSharp } from "react-icons/io5";
import { useDash } from "../../../../context/DashboardContext";
import '../assets/scss/HomePage.scss'
import { HistoryWidget, ContactsWidget } from "./HomePageWidgets/";

// Translation
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const ImageDebitCard = 'https://res.cloudinary.com/demantur/image/upload/v1662508234/bank_card_images/debitCard_rt6xxj.png'

export const HomePage = () => {
  const { Info, clientBalance, getMyDebitCard, getMyCard } = useDash();
  const { t } = useTranslation();

  const [DebitCardHP, setDebitCardHP] = useState(null);
  const [CreditCardHP, setCreditCardHP] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getMyDebitCard(localStorage.getItem('authToken'))
        const res2 = await getMyCard(localStorage.getItem('authToken'))
        setDebitCardHP(res.data.data);
        setCreditCardHP(res2.data.data);
      } catch (error) {
        console.log(error)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <div className="grid_dash_info_user">
              <div className="w-full">
                <div className="w-fit mx-auto">
                  <h6 className="text-gray-400 font-[1.125rem]">{t("DashboardNormalUser.Home.name")}</h6>
                  <p className="font-[1.125rem]">
                    {`${Info.FirstName} ${Info.LastName}`}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="w-fit mx-auto">
                  <h6 className="text-gray-400 font-[1.125rem]">{t("DashboardNormalUser.Home.dui")}</h6>
                  <p className="font-[1.125rem]">{`${Info.Dui}`}</p>
                </div>
              </div>
              <div className="w-full">
                <div className="w-fit mx-auto">
                  <h6 className="text-gray-400 ">{t("DashboardNormalUser.Home.email")}</h6>
                  <p className="font-[1.125rem]">{`${Info.Email}`}</p>
                </div>
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
        <div className="h-[25rem] w-[30%] bg-white rounded-[0.75rem] overflow-y-auto overflow-x-hidden scroll-widgets">
          <div className="mx-[1rem] my-[2rem]">
            <ContactsWidget />
          </div>
        </div>
      </div>

      <div className="flex gap-3 my-1">
        <div className="basis-[60%] rounded-[0.75rem] flex h-[15rem]">
          <div className="w-1/2 ">
            {
              DebitCardHP != null ?
                <>
                  <img src={ImageDebitCard} alt="Tarjeta" className="w-[90%] h-[100%]" />
                </>
                :
                <div className="bg-white w-[90%] h-[100%]">
                  Todavia No tiene Tarjeta de debito
                </div>
            }
          </div>
          <div className="w-1/2  ">
            {
              CreditCardHP != null ?
                <>
                  <img src={CreditCardHP.CardImage} alt="Tarjeta" className="w-[90%] h-[100%] " />
                </>
                :
                <div className="bg-white w-[90%] h-[100%]">
                  Todavia No tiene Tarjeta de Credito
                </div>
            }
          </div>

        </div>
        <div className="basis-[40%] bg-white rounded-[0.75rem]">
          <div className="m-[2rem] flex justify-between">
          </div>
        </div>
      </div>
    </div>
  );
};