import React, { useEffect, useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext'
import { IoMdArrowDropdown as ArrowDown } from 'react-icons/io'

export const PayLoan = ({ MyLoan }) => {

  const { PayLoan, SavingAccounts } = useDash()

  const [IsSelect, setIsSelect] = useState(false);
  const [NumberAccount, setNumberAccount] = useState('');
  const [Error, setError] = useState(null);

  const HandlePay = async () => {
    if (NumberAccount === '') {
      setError('Por favor seleccione su cuenta')
      setTimeout(() => {
        setError('');
      }, 1500)
    } else {
      try {
        const res = await PayLoan(localStorage.getItem('authToken'), NumberAccount)
        if (res?.data?.data) {
        } else {
          // setError(res.response.data.error)
        }
        console.log(res)
      } catch (error) {
        console.log(error);
      }
    }
  }

  const getDateAm = () => {
    let newDate = new Date(MyLoan.pay_history.loan_next_payment)
    return newDate.toLocaleDateString('en-GB')
  }

  return (
    <div>
      <h1>pagar prestamo</h1>
      <div className='flex flex-col'>
        <span>Paga mensualmente el prestamo que tienes activo.</span>

        <span>Cuota Mensual: {MyLoan.MonthlyFee}</span>
        <span>Monto Restante: {MyLoan.amounts.remainder}</span>
        <span>Fecha de pago Maxima: {getDateAm()}</span>
      </div>

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

      {Error && <span>{Error}</span>}

      <div className='h-fit w-fit'>
        <button className="py-[.5rem] px-[1rem] border-none outline-none bg-[#323643] text-white rounded-md" onClick={HandlePay}>Pagar</button>
      </div>

    </div>
  )
}
