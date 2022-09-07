import { useEffect, useState } from "react";
import { ScrollToTop } from "../../../../components/ScrollToTop"
import { useDash } from "../../../../context/DashboardContext"
import { BsArrowLeft } from 'react-icons/bs'
import { PaymentHCC, PayCC, HistorySpentCC, LoadingComp } from "./MoreInfoElements";
import { IoMdArrowDropdown as ArrowDown } from 'react-icons/io'

export const CardMoreInfo = () => {
  const { CardsParametros, setChangeBox2, SavingAccounts, CreateDebitCard, setDebitCard } = useDash()
  const [ChangeElements, setChangeElements] = useState(1);

  const [IsSelect, setIsSelect] = useState(false);
  const [NumberAccount, setNumberAccount] = useState('');
  const [Error, setError] = useState(null);
  const [Success, setSuccess] = useState(null);

  const [CardExpire, setCardExpire] = useState(null);

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

  const HandleCreateDC = async () => {
    if (NumberAccount === '') {
      setError('Por Favor seleccione una cuenta');
    } else {
      try {
        const res = await CreateDebitCard(localStorage.getItem('authToken'), NumberAccount)
        console.log(res.data)
        setDebitCard(res.data.data);
        setError(null);
        setSuccess('Proceso Exitoso')
        setTimeout(() => { setChangeBox2(false) }, 2000)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (CardsParametros?.CardExpire != null) {
      let Time = new Date(CardsParametros.CardExpire)
      Time = Time.toLocaleDateString('en-GB')
      setCardExpire(Time)
    }
  }, [CardsParametros]);

  const ImageDebitCard = 'https://res.cloudinary.com/demantur/image/upload/v1662508234/bank_card_images/debitCard_rt6xxj.png'

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
            // crear tarjeta de debito
            <>
              <h1 className="text-center">Tarjeta de Debito</h1>
              <div className="w-100 h-[83%]  flex items-center justify-start">
                <div className="w-[40%] pl-10 flex items-center justify-center ">
                  <div className="w-100 h-[90%]  flex flex-col text-center ">
                    <img src={ImageDebitCard} alt="tarjeta" className="w-[100%] h-[50%]" />
                  </div>
                </div>
                <div className="w-[60%] pl-10 h-100 relative p-5">
                  <div className="h-[90%] w-1 bg-black left-10 absolute"></div>
                  <div className="pl-10 py-3 ">
                    <h4 className="text-center">¿Tarjeta de Debito?</h4>
                    <p className="text-justify">Con la tarjeta de Débito Clásica de Demantur obtienes el control de gastos que necesitas, podrás pagar en los diferentes servicios y comercios sin necesidad de cargar efectivo, pero además, también podrás acceder por medio de los cajeros automáticos al efectivo si es que lo necesitas. Por otro lado, no dudes en tener siempre los beneficios especiales que te ofrece Demantur, te invitamos a seguir viendo los demás detalles a continuación.</p>
                    <p className="text-justify">La tarjeta Débito Clásica te brinda esa facilidad de pagar siempre aunque no lleves efectivo contigo, es más práctico si prefieres cargar siempre la tarjeta en vez de grandes cantidades de efectivo</p>
                    <div className="shadow-xl bg-[#fafafa] w-100 h-56 p-2 mt-10">
                      <h5 className="text-center">Obtener Tarjeta de debito</h5>
                      <p>Para obtener tu tarjeta de debito lo unico que tienes que hacer es vincularla a una de tus cuentas monetarias que ya tienes con nosotros.</p>
                      <div className="flex justify-around">
                        <div className=" flex flex-col justify-center items-center">
                          <div className='acc-select-container bg-[#D6D6D6] h-[3.9rem] w-[25rem] rounded-xl ml-5 px-2'>
                            <div className='dropdown-tr'>
                              <div className="dropdown-button-tr" onClick={e => setIsSelect(!IsSelect)}>{NumberAccount === '' ? <span>Cuenta Emisora</span> : NumberAccount} <ArrowDown /></div>
                              {IsSelect && (
                                <div className={`dropdown-box-content-tr top-for-dropdow-${(SavingAccounts.length * 3) + 3}`}>
                                  <div className="dropdown-box-item-tr" onClick={e => { setNumberAccount(''); setIsSelect(false) }} >
                                    Seleccionar
                                  </div>
                                  {SavingAccounts.map((element, i) => {
                                    return (
                                      <div
                                        className="dropdown-box-item-tr"
                                        onClick={e => {
                                          setNumberAccount(element.accountNumber)
                                          setIsSelect(false)
                                        }}
                                        key={i}
                                      >
                                        {element.accountNumber}
                                      </div>
                                    )
                                  })}
                                </div>
                              )}
                            </div>
                          </div>
                          {Error && <span className="text-red-500 pt-1">{Error}</span>}
                          {Success && <span className="text-green-600 pt-1">{Success}</span>}
                        </div>
                        <button className="boton-settings" onClick={HandleCreateDC}>Crear</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
            :
            <>
              {
                CardsParametros.CardType != null ?
                  // tarjeta de credito
                  <>
                    <h1 className="text-center">Tarjeta de Credito</h1>
                    <div className="w-100 h-[85%]  mt-4 flex items-start justify-start">
                      <div className="w-[40%] p-5 flex items-center justify-center">
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
                              <span>Vencimiento: {CardExpire}</span>
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
                  // tarjeta de debito
                  <>
                    <h1 className="text-center">Tarjeta de Debito</h1>
                    <div className="w-100 h-[83%]  flex items-center justify-start">
                      <div className="w-[40%] pl-10 flex items-center justify-center ">
                        <div className="w-100 h-[90%]  flex flex-col text-center ">
                          <img src={ImageDebitCard} alt="tarjeta" className="w-[100%] h-[50%]" />
                        </div>
                      </div>
                      <div className="w-[60%] pl-10 h-100 relative p-5">
                        <div className="h-[90%] w-1 bg-black left-10 absolute"></div>
                        <div className="pl-10 py-3 ">
                          <div className="shadow-xl bg-[#fafafa] w-100 h-56 p-2 mt-10">
                            <h5 className="text-center">Informacion de tarjeta de debito</h5>
                            <div className="flex justify-around">
                              <span>Numero: {CardsParametros.CardNumber}</span>
                              <span>CCV: {CardsParametros.CardCCV}</span>
                              <span>Cuenta: {CardsParametros.NumberAcountOf}</span>
                              <span>Vencimiento: {CardExpire}</span>
                            </div>
                          </div>
                          <div className="bg-red-400">
                            {
                              CardsParametros.SpentHistory.length !== 0 ?
                                <>
                                  <div>
                                    <span>Monto</span>
                                    <span>Fecha</span>
                                  </div>
                                  {
                                    CardsParametros.SpentHistory.map((el) => {
                                      let time = new Date(el.RealizationDate)
                                      return (
                                        <div>
                                          <span>{el.Amount}</span>
                                          <span>{time.toLocaleDateString('en-GB')}</span>
                                        </div>
                                      )
                                    })
                                  }
                                </>
                                :
                                <>
                                  no tiene ningun gasto todavia
                                </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
              }
            </>
        }
      </div>
    </>
  )
}