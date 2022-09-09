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
      <div className="w-full h-full bg-white rounded-xl overflow-y-auto scroll-cards">
        <div className="w-full h-[2rem] flex items-center justify-start">
          <button className="bg-transparent outline-none border-none mt-4 ml-5 hover-back-arrow ease-out duration-200" onClick={() => {
            setChangeBox2(false)
          }}>
            <BsArrowLeft className="text-[2rem] text-[#323643]" />
          </button>
        </div>
        <div className="h-full w-full flex flex-col py-4 px-3">
          <p className="text-center text-[1.8rem]">Prestamo Demantur {MyLoan.details.loan_type}:</p>
          <img src={OfferLoans(LoanImage)} alt="tarjeta" className="w-[220px] block mx-auto rounded-lg mt-3 mb-5 shadow-sm" />
          <div className="w-[80%] mx-auto bg-[#F7F7F7] border-cover-2 rounded-xl py-4 shadow-md mb-4">
            <h4 className="text-center mb-4 text-[#6C757D]">Informacion del préstamo</h4>
            <div className="grid grid-cols-2 gap-5 justify-center w-[80%] mx-auto">
              <div className=" w-full">
                <div className="flex flex-col gap-3 w-fit mx-auto">
                  <span><strong className="text-[#323643]">Monto Prestado: </strong>${MyLoan.amounts.initial_amount}</span>
                  <span><strong className="text-[#323643]">Monto por pagar: </strong>${MyLoan.amounts.remainder.toFixed(2)}</span>
                </div>
              </div>
              <div className=" w-full">
                <div className="flex flex-col gap-3 w-fit mx-auto">
                  <span><strong className="text-[#323643]">Interes: </strong>{MyLoan.details.interest}%</span>
                  <span><strong className="text-[#323643]" >Fecha de Expedición: </strong>{ExpDate}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-[30rem]">
            <div className="border-cover-2 flex flex-row items-center justify-center text-center h-[15%] w-[50%] mx-auto mt-4 bg-[#f7f7f7] rounded-lg shadow-sm">
              <div className="w-[50%]">
                <span className={`w-fit mx-auto cursor-pointer pb-1 ${ChangeElements === 1 && 'border-act'}`} onClick={() => { setChangeElements(1) }}>Pagar préstamo</span>
              </div>
              <div className="w-[50%]">
                <span className={`w-fit mx-auto cursor-pointer pb-1 ${ChangeElements === 2 && 'border-act'}`} onClick={() => { setChangeElements(2) }}>Historial de pagos</span>
              </div>
            </div>
            <div className="h-fit pb-5 rounded-lg mt-5 w-[95%] mx-auto">
              {RenderEl()}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}