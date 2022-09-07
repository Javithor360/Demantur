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
    <div>
      {
        SpentAmount !== 0 ?
          <>
            <h3>En este apartado puedes pagar tu deuda de tu tarjeta de credito</h3>
            <span>Monto Gastado: {SpentAmount} </span>
            <span>Interes: {CardsParametros.interest}</span>
            <span>Monto a pagar: {AmountToPay} </span>

            {Error && <span>{Error}</span>}

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
            <button onClick={HandlePay}>Pagar</button>
          </>
          :
          <>
            Hasta el momento no tiene deuda con la tarjeta de credito
          </>
      }
    </div>
  )
}
