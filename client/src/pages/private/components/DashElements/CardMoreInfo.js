import { useEffect, useState } from "react";
import { ScrollToTop } from "../../../../components/ScrollToTop"
import { useDash } from "../../../../context/DashboardContext"
import { BsArrowLeft } from 'react-icons/bs'
import { PaymentHCC, PayCC, HistorySpentCC, LoadingComp } from "./MoreInfoElements";
import { IoMdArrowDropdown as ArrowDown } from 'react-icons/io'
import '../assets/scss/UserCards.scss'

export const CardMoreInfo = () => {
  const { CardsParametros, setChangeBox2, SavingAccounts, CreateDebitCard } = useDash()
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
        console.log(res);
        setError(null);
        setSuccess('Proceso Exitoso')
        setTimeout(() => { setChangeBox2(1) }, 2000)
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
      <div className="w-full h-full bg-white rounded-xl overflow-y-hidden scroll-cards">
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
                <div className="w-[35%] pl-10 flex items-center justify-center relative">
                  <div className="h-[95%] w-[1.5px] bg-[#989398] right-0 absolute"></div>
                  <div className="w-100 h-[90%]  flex flex-col text-center ">
                    <img src={ImageDebitCard} alt="tarjeta" className="w-[100%] h-[50%] mx-auto" />
                  </div>
                </div>
                <div className="w-[65%] pl-10 h-100 relative p-5">
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
                    
                    <div className="w-100 h-[90%] mt-4 flex-col items-start justify-start">
                      <div className="h-[10%] table mb-0">
                        <p className="text-[2.6rem] table-cell text-center text-[#323643] align-middle">Tarjeta de Credito</p>
                      </div>
                      <div className="h-[90%] w-full flex flex-row ">
                        <div className="w-[35%] p-5 flex items-center justify-center relative">
                          <div className="h-[95%] w-[1.5px] bg-[#989398] right-0 absolute"></div>
                          <div className="w-100 h-[80%] flex flex-col text-center">
                            <h3 className="mb-6">Tarjeta {CardsParametros.CardType !== 'Black' ? `Demantur ${CardsParametros?.CardType}` : 'Mastercard Black'}</h3>
                            <img src={CardsParametros.CardImage} alt="tarjeta" className="w-[85%] mx-auto block" />
                          </div>
                        </div>
                        <div className="w-[65%] h-[95%] relative overflow-y-auto pt-5">
                          <div className="w-full h-full p-5 bg">
                            <div className="w-[100%] bg-[#F7F7F7] border-cover-2 rounded-xl py-3 shadow-md mb-5">
                              <h4 className="text-center mb-3 text-[#6C757D]">Datos Generales</h4>
                              <div className="grid grid-cols-2 justify-center w-[80%] mx-auto">
                                <div className=" w-full">
                                  <div className="flex flex-col gap-3 w-fit mx-auto">
                                    <span><strong className="text-[#323643]">Número:</strong> {CardsParametros.CardNumber} </span>
                                    <span><strong className="text-[#323643]">Vencimiento:</strong> {CardExpire}</span>
                                  </div>
                                </div>
                                <div className=" w-full">
                                  <div className="flex flex-col gap-3 w-fit mx-auto">
                                    <span><strong className="text-[#323643]">CCV:</strong> {CardsParametros.CardCCV} </span>
                                    <span><strong className="text-[#323643]" >Monto Maximo:</strong> ${CardsParametros.MaxCardAmount}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            

                            <div className="w-full h-[35rem] mb-5 rounded-xl">
                              <div className="border-cover-2 flex flex-row items-center justify-center text-center w-100 h-[10%] w-full bg-[#f7f7f7] rounded-lg shadow-sm">
                                <div className="w-[33.3%]">
                                  <span className={`w-fit mx-auto cursor-pointer pb-1 ${ChangeElements === 1 && 'border-act'}`} onClick={() => { setChangeElements(1) }}>Pagar Tarjeta</span>
                                </div>
                                <div className="w-[33.3%]">
                                  <span className={`w-fit mx-auto cursor-pointer pb-1 ${ChangeElements === 2 && 'border-act'}`} onClick={() => { setChangeElements(2) }}>Historial de Pagos</span>
                                </div>
                                <div className="w-[33.3%]">
                                  <span className={`w-fit mx-auto cursor-pointer pb-1 ${ChangeElements === 3 && 'border-act'}`} onClick={() => { setChangeElements(3) }}>Historial de Gastos</span>
                                </div>
                                
                              </div>
                              <div className="h-fit pb-5 rounded-lg mt-5 w-[95%] mx-auto">
                                {RenderEl()}
                              </div>
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