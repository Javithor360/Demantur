import { IoWalletSharp } from "react-icons/io5";
import { useDash } from "../../../../context/DashboardContext";
import '../assets/scss/HomePage.scss'
import { HistoryWidget, ContactsWidget } from "./HomePageWidgets/";
import { BsFillCreditCardFill } from 'react-icons/bs'

// Translation
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const ImageDebitCard = 'https://res.cloudinary.com/demantur/image/upload/v1662595386/bank_card_images/debitoClasica_h4vrfu.png'

export const HomePage = () => {
  const { Info, clientBalance, getMyDebitCard, getMyCard, getMyLoan } = useDash();
  const { t } = useTranslation();

  const [DebitCardHP, setDebitCardHP] = useState(null);
  const [CreditCardHP, setCreditCardHP] = useState(null);
  const [MyLoan, setMyLoan] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getMyDebitCard(localStorage.getItem('authToken'));
        const res2 = await getMyCard(localStorage.getItem('authToken'));
        const res3 = await getMyLoan(localStorage.getItem('authToken'));
        setDebitCardHP(res.data.data);
        setCreditCardHP(res2.data.data);
        setMyLoan(res3.data.data)
      } catch (error) {
        console.log(error);
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
        <div className="basis-[60%] gap-3 rounded-[0.75rem] flex h-[15rem] bg-white">
          <div className="w-[50%] h-full flex items-center justify-center">
            {
              DebitCardHP != null ?
                <>
                  <img src={ImageDebitCard} alt="Tarjeta" className="w-[77%] h-auto" />
                </>
                :
                <div className="bg-white w-[100%] h-[75%] flex flex-col justify-center items-center text-center text-2xl">
                  <p className="w-[95%]">Todavía no tiene tarjeta de débito</p>
                  <BsFillCreditCardFill className="text-[2.1rem]" />
                </div>
            }
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            {
              CreditCardHP != null ?
                <>
                  <img src={CreditCardHP.CardImage} alt="Tarjeta" className="w-[77%]" />
                </>
                :
                <div className="bg-white w-[100%] h-[75%] flex flex-col justify-center items-center text-center text-2xl border-left-cards-div">
                  <p className="w-[95%]">Todavía no tiene tarjeta de crédito</p>
                  <BsFillCreditCardFill className="text-[2.1rem]" />
                </div>
            }
          </div>

        </div>
        <div className="basis-[40%] bg-white rounded-[0.75rem]">
          <div className="m-[2rem] flex justify-between">
            {
              MyLoan != null ?
                <>
                  <h4>Prestamo Activo</h4>
                  <span>Prestamo Demantur: {MyLoan.details.loan_type}</span>
                  <span>Cuota Mensual: {MyLoan.MonthlyFee}</span>
                  <span>Monto Restante: {MyLoan.amounts.remainder}</span>
                </>
                :
                <>
                  No posees ningún prestamo activo
                </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};