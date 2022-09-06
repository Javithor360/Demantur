import { useEffect } from "react";
import { ScrollToTop } from "../../../../components/ScrollToTop"
import { useDash } from "../../../../context/DashboardContext"
import { BsArrowLeft } from 'react-icons/bs'

export const CardMoreInfo = () => {

  const { CardsParametros, setChangeBox2 } = useDash()

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
                    <div className="w-100 h-[85%]  mt-4 flex items-center">
                      <div className="w-1/2 h-100 bg-red-400 p-5 flex items-center justify-center">
                        <div className="w-100 h-[60%] bg-blue-500">
                          <h4>Tarjeta Demantur {CardsParametros.CardType}</h4>
                        </div>
                      </div>
                      <div className="w-1/2 h-100 bg-green-400 p-5">

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
