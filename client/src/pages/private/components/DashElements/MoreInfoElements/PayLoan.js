import React, { useEffect, useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext'
import { IoMdArrowDropdown as ArrowDown } from 'react-icons/io'

export const PayLoan = ({ MyLoan }) => {

  const { PayLoan, SavingAccounts, setClientBalance } = useDash()

  const [IsSelect, setIsSelect] = useState(false);
  const [NumberAccount, setNumberAccount] = useState('');
  const [Error, setError] = useState(null);
  const [Success, setSuccess] = useState(null);

  const HandlePay = async () => {
    if (NumberAccount === '') {
      setError('Por favor seleccione su cuenta')
      setTimeout(() => {
        setError('');
      }, 1500)
    } else {
      try {
        const res = await PayLoan(localStorage.getItem('authToken'), NumberAccount)
        if (res?.data) {
          let time = new Date()

          MyLoan.amounts.remainder = MyLoan.amounts.remainder - MyLoan.MonthlyFee
          MyLoan.pay_history.payment_history.push({ Amount: MyLoan.MonthlyFee, AccountN: NumberAccount, Date: time })
          setSuccess('Pagado Correctamente');
          setTimeout(() => {
            setClientBalance(prev => (prev - MyLoan.MonthlyFee).toFixed(2))
          }, 2000)
        } else {
          setError(res.response.data.error)
        }
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
    <div className='w-[70%] mx-auto py-5 border-cover rounded-lg'>
      <p className='text-center text-[1.3rem] text-[#606470] font-semibold'>Pagar Préstamo</p>
      <div className='flex flex-col'>
        <span className='text-center'>Recuerda pagar mensualmente el préstamo que tienes activo</span>
      </div>
      <div className='mt-5 p-2 grid grid-cols-3 w-[90%] mx-auto mb-5 bg-[#F7F7F7] shadow-sm rounded-lg border border-[#DFDFDF]'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <span className='w-fit font-semibold text-[1rem]'>Cuota Mensual:</span>
          <span className='w-fit'>${MyLoan.MonthlyFee}</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 border-left-division'>
          <span className='w-fit font-semibold text-[1rem]'>Monto Restante:</span>
          <span className='w-fit'>${MyLoan.amounts.remainder.toFixed(2)}</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 border-left-division'>
          <span className='w-fit font-semibold text-[1rem]'>Fecha de pago máxima:</span>
          <span className='w-fit'>{getDateAm()}</span>
        </div>
      </div>
      <div className='w-fit mx-auto -translate-y-5'>
        {Error && <span className='text-center text-red-500'>{Error}</span>}
        {Success && <span className='text-center text-green-600'>{Success}</span>}
      </div>
      <div className='flex flex-row w-fit gap-5 mx-auto'>
        <div className='acc-select-container flex flex-row bg-[#D6D6D6] h-[3.9rem] w-[20rem] rounded-xl ml-5 px-2'>
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
        <div className='h-fit w-fit my-auto'>
          <button className="py-[.5rem] px-[1rem] border-none outline-none bg-[#323643] text-white rounded-md" onClick={HandlePay}>Pagar</button>
        </div>
      </div>
    </div>
  )
}
