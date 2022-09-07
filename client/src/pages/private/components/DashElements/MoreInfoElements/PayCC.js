/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext';
import { IoMdArrowDropdown as ArrowDown } from 'react-icons/io'

export const PayCC = ({ CardsParametros }) => {

  const { SavingAccounts, PayCCDebt } = useDash()

  const [SpentAmount, SetSpentAmount] = useState(null);
  const [IsSelect, setIsSelect] = useState(false);
  const [NumberAccount, setNumberAccount] = useState('');
  const [AmountToPay, setAmountToPay] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    SetSpentAmount(parseFloat(CardsParametros.PayableAmount.$numberDecimal));
    setAmountToPay(((SpentAmount) + (SpentAmount * (CardsParametros.interest / 100))).toFixed(2))
  }, [SpentAmount]);

  const HandlePay = async () => {
    if (NumberAccount === '') {
      setError('Por favor seleccione su cuenta')
      setTimeout(() => {
        setError('');
      }, 1500)
    } else {
      try {
        console.log(AmountToPay)
        const res = await PayCCDebt(localStorage.getItem('authToken'), NumberAccount, AmountToPay)
        if (res?.data?.data) {
          CardsParametros.SpentAmount = 0;
        } else {
          setError(res.response.data.error)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='border-cover-2 pb-5 rounded-lg'>
      {
        SpentAmount !== 0 ?
          <>
            <p className='text-center text-[1.2rem] mt-[1.5rem]'>En este apartado puedes pagar tu deuda de tu tarjeta de credito</p>
            <div className='mt-5 p-2 grid grid-cols-3 w-[90%] mx-auto mb-5 bg-[#F7F7F7] shadow-sm rounded-lg border border-[#DFDFDF]'>
              <div className='flex flex-col justify-center items-center gap-2'>
                <span className='w-fit font-semibold text-[1rem]'>Monto Gastado:</span>
                <span className='w-fit'>${SpentAmount}</span>
              </div>
              <div className='flex flex-col justify-center items-center gap-2 border-left-division'>
                <span className='w-fit font-semibold text-[1rem]'>Interes:</span>
                <span className='w-fit'>{CardsParametros.interest}%</span>
              </div>
              <div className='flex flex-col justify-center items-center gap-2 border-left-division'>
                <span className='w-fit font-semibold text-[1rem]'>Monto a pagar:</span>
                <span className='w-fit'>${AmountToPay}</span>
              </div>
            </div>

            <div className='text-center -translate-y-5'>
              <span className='w-fit text-red-500'>
                {Error && <span>{Error}</span>}
              </span>
            </div>

            <div className='w-fit mx-auto flex flex-row h-fit items-center gap-5'>
              <div className='acc-select-container bg-[#D6D6D6] h-[3.9rem] w-[20rem] rounded-xl ml-5 px-2'>
                <div className='dropdown-CC'>
                  <div className="dropdown-button-CC" onClick={e => setIsSelect(!IsSelect)}>{NumberAccount === '' ? <span>Cuenta Emisora</span> : NumberAccount} <ArrowDown /></div>
                  {IsSelect && (
                    <div className={`dropdown-box-content-CC top-for-dropdow-${(SavingAccounts.length * 3) + 3}`}>
                      <div className="dropdown-box-item-CC" onClick={e => { setNumberAccount(''); setIsSelect(false) }} >
                        Seleccionar
                      </div>
                      {SavingAccounts.map((element, i) => {
                        return (
                          <div
                            className="dropdown-box-item-CC"
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
              <div className='h-fit w-fit'>
                <button className="py-[.5rem] px-[1rem] border-none outline-none bg-[#323643] text-white rounded-md" onClick={HandlePay}>Pagar</button>
              </div>
              
            </div>
            
          </>
          :
          <>
          <div className='h-[20rem] flex flex-col justify-center items-center'>
            Hasta el momento no tiene deuda con la tarjeta de credito
          </div>
           
          </>
      }
    </div>
  )
}
