import React from 'react'
import no_pay_history_CC from '../../assets/img/cards-icons/no_pay_history_CC.png'

export const PaymentHLoan = ({ MyLoan }) => {
  return (
    <div className='h-[25rem] overflow-y-auto scroll-cards border-cover-2 rounded-lg'>
      {/* <p className='text-center text-[1.2rem] mt-4'>Historial de pagos</p> */}
      {
        MyLoan.pay_history.payment_history.length !== 0 ?
          <>
            <div>
              {
                MyLoan.pay_history.payment_history.map((el, i) => {
                  let time = new Date(el.Date)
                  return (
                    <>
                      <div className='mt-4 mb-2 p-3 grid grid-cols-3 w-[90%] mx-auto bg-[#F7F7F7] shadow-sm rounded-lg border border-[#DFDFDF]'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                          <span className='w-fit font-semibold text-[1rem] text-[#606470]'>Monto:</span>
                          <span className='w-fit'>${el.Amount}</span>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 border-left-div-3'>
                          <span className='w-fit font-semibold text-[1rem] text-[#606470]'>Cuenta:</span>
                          <span className='w-fit'>{el.AccountN}</span>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 border-left-div-3'>
                          <span className='w-fit font-semibold text-[1rem] text-[#606470] '>Fecha:</span>
                          <span className='w-fit'>{time.toLocaleDateString('en-GB')}</span>
                        </div>
                      </div>
                    </>


                  )
                })
              }
            </div>
          </>
          :
          <>
            <div className='h-full flex flex-col justify-center items-center'>
              <img src={no_pay_history_CC} alt="" className='w-[6.25rem] mb-3' />
              <p className="text-[#606470] text-[1.2rem]">No tiene ningun pago realizado</p>
            </div>
          </>
      }
    </div>
  )
}
