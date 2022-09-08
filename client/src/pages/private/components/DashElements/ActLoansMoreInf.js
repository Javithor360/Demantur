import { useEffect, useState } from "react";
import { ScrollToTop } from "../../../../components/ScrollToTop"
import { useDash } from "../../../../context/DashboardContext"
import { BsArrowLeft } from 'react-icons/bs'
import '../assets/scss/UserCards.scss'

const OfferLoans = require.context(
  "../../../static/assets/img/all_loans",
  true
);

export const ActLoansMoreInf = ({ setChangeBox2, setMyLoan, MyLoan, LoanImage }) => {
  // const { CardsParametros, SavingAccounts, CreateDebitCard, setDebitCard } = useDash()

  const [ExpDate, setExpDate] = useState(null);

  useEffect(() => {
    let NewDate = new Date(MyLoan.pay_history.loan_date)
    NewDate = NewDate.toLocaleDateString('en-GB')
    setExpDate(NewDate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  <span><strong className="text-[#323643]">Monto por pagar: </strong>${MyLoan.amounts.remainder}</span>
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
          {/* <div className="">
            <span>Monto Prestado: {MyLoan.amounts.initial_amount}</span>
            <span>Monto por pagar: {MyLoan.amounts.remainder}</span>
            <span>Interes: {MyLoan.details.interest}</span>
            <span>Fecha de Expedición: {ExpDate}</span>
          </div> */}
        </div>
      </div>
    </>

  )
}