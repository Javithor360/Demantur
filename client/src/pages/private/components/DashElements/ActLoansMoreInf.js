import { useEffect, useState } from "react";
import { ScrollToTop } from "../../../../components/ScrollToTop"
import { useDash } from "../../../../context/DashboardContext"
import { BsArrowLeft } from 'react-icons/bs'
import '../assets/scss/UserCards.scss'

export const ActLoansMoreInf = ({ setChangeBox2, setMyLoan, MyLoan }) => {
  const { CardsParametros, SavingAccounts, CreateDebitCard, setDebitCard } = useDash()

  useEffect(() => {
    console.log(MyLoan)
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
      </div>
    </>

  )
}