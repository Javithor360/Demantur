import { useEffect, useState } from "react";
import { ScrollToTop } from "../../../../components/ScrollToTop"
import { useDash } from "../../../../context/DashboardContext"
import { BsArrowLeft } from 'react-icons/bs'
import '../assets/scss/UserCards.scss'
import { LoadingComp, PayLoan, PaymentHLoan } from "./MoreInfoElements";

const OfferLoans = require.context(
  "../../../static/assets/img/all_loans",
  true
);

export const ActLoansMoreInf = ({ setChangeBox2, setMyLoan, MyLoan, LoanImage }) => {
  // const { CardsParametros, SavingAccounts, CreateDebitCard, setDebitCard } = useDash()

  const [ExpDate, setExpDate] = useState(null);
  const [ChangeElements, setChangeElements] = useState(1);

  useEffect(() => {
    let NewDate = new Date(MyLoan.pay_history.loan_date)
    NewDate = NewDate.toLocaleDateString('en-GB')
    setExpDate(NewDate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RenderEl = () => {
    switch (ChangeElements) {
      case 1:
        return <LoadingComp><PayLoan MyLoan={MyLoan} /></LoadingComp>
      case 2:
        return <LoadingComp><PaymentHLoan MyLoan={MyLoan} /></LoadingComp>
      default:
        return <LoadingComp><PayLoan MyLoan={MyLoan} /></LoadingComp>
    }
  }

  return (
    <>
      <ScrollToTop />
      <div className="w-full h-full bg-white rounded-xl overflow-y-hidden scroll-cards">
        <div className="w-full h-[2rem] flex items-center justify-start">
          <button className="bg-transparent outline-none border-none mt-4 ml-5" onClick={() => {
            setChangeBox2(false)
          }}>
            <BsArrowLeft className="text-[2rem] text-[#323643]" />
          </button>



          <div className="">
            <span>Credito Bancario</span>

            <h3 className="">Prestamo Demantur {MyLoan.details.loan_type}</h3>
            <img src={OfferLoans(LoanImage)} alt="tarjeta" className="w-[200px]" />

            <div className="">
              <span>Monto Prestado: {MyLoan.amounts.initial_amount}</span>
              <span>Monto por pagar: {MyLoan.amounts.remainder}</span>
              <span>Interes: {MyLoan.details.interest}</span>
              <span>Fecha de Expedición: {ExpDate}</span>
            </div>
          </div>

          <div className="">
            <div className="bg-red-400 flex">
              <span onClick={() => setChangeElements(1)}>Pagar</span>
              <span onClick={() => setChangeElements(2)}>Historial</span>
            </div>
            {RenderEl()}
          </div>
        </div>
      </div>
    </>

  )
}