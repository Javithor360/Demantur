import { useState } from "react";
import { ScrollToTop } from "../../../../components/ScrollToTop"
import { useDash } from "../../../../context/DashboardContext"
import { BsArrowLeft } from 'react-icons/bs'
import { PaymentHCC, PayCC, HistorySpentCC, LoadingComp } from "./MoreInfoElements";

export const CardMoreInfo = () => {
  const { CardsParametros, setChangeBox2 } = useDash()
  const [ChangeElements, setChangeElements] = useState(1);

  const RenderEl = () => {
    switch (ChangeElements) {
      case 1:
        return <LoadingComp><PayCC CardsParametros={CardsParametros} /></LoadingComp>
      case 2:
        return <LoadingComp><PaymentHCC CardsParametros={CardsParametros} /></LoadingComp>
      case 3:
        return <LoadingComp><HistorySpentCC CardsParametros={CardsParametros} /></LoadingComp>
      default:
        return <LoadingComp><PayCC CardsParametros={CardsParametros} /></LoadingComp>
    }
  }

  return (
    <>
      <ScrollToTop />
      <div className="w-full h-full bg-white rounded-xl overflow-y-auto scroll-cards">
        <div className="w-full h-[2rem] flex items-center justify-start">
          <button className="bg-transparent outline-none border-none mt-4 ml-5" onClick={() => {
            setChangeBox2(false)
          }}>
            <BsArrowLeft className="text-[2rem] text-[#323643]" />
          </button>
        </div>
        {
          CardsParametros === null ?
            <>Crea tu Tarjeta de debito</>
            :
            <>
              {
                CardsParametros.CardType !== null ?
                  <>
                    <h1 className="text-center">Tarjeta de Credito</h1>
                    <div className="w-100 h-[85%]  mt-4 flex items-start justify-start">
                      <div className="w-[40%] h- p-5 flex items-center justify-center">
                        <div className="w-100 h-[80%]  flex flex-col text-center mt-10">
                          <h2 className="mb-6">Tarjeta {CardsParametros.CardType !== 'Black' ? `Demantur ${CardsParametros?.CardType}` : 'Mastercard Black'}</h2>
                          <img src={CardsParametros.CardImage} alt="tarjeta" className="w-[100%] h-[80%]" />
                        </div>
                      </div>
                      <div className="w-[60%] h-100 relative">
                        <div className="h-[80%] w-1 bg-black left-0 absolute"></div>
                        <div className="w-100 h-100  p-5">
                          <div className="flex">
                            <div className="flex flex-col">
                              <span>Número: {CardsParametros.CardNumber} </span>
                              <span>Interest: {CardsParametros.interest}%</span>
                            </div>
                            <div className="flex flex-col">
                              <span>CCV: {CardsParametros.CardCCV}</span>
                              <span>Monto Maximo: {CardsParametros.MaxCardAmount}</span>
                            </div>
                          </div>

                          <div className="bg-red-400 w-100 h-[40%]">
                            <div className="flex w-100 h-[20%]">
                              <span className={`w-[33.3%] cursor-pointer ${ChangeElements === 1 && 'text-blue-400'}`} onClick={() => { setChangeElements(1) }}>Pagar Tarjeta</span>
                              <span className={`w-[33.3%] cursor-pointer ${ChangeElements === 2 && 'text-blue-400'}`} onClick={() => { setChangeElements(2) }}>Historial de Pagos</span>
                              <span className={`w-[33.3%] cursor-pointer ${ChangeElements === 3 && 'text-blue-400'}`} onClick={() => { setChangeElements(3) }}>Historial de Gastos</span>
                            </div>
                            <div>
                              {RenderEl()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                  :
                  <>
                    tarjeta de debito
                  </>
              }
            </>
        }
      </div>
    </>
  )
}


// <span>Tipo: </span>
// <span>Número: {CardsParametros.CardNumber} </span>
// <span>CCV: {CardsParametros.CardCCV}</span>
// <span>Monto Maximo: {CardsParametros.CardAmount.$numberDecimal}</span>
// <img src={CardsParametros.CardImage} alt="tarjeta" className="w-24 h-16" />
