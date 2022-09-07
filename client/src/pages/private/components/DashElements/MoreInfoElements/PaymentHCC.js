import React from 'react'
import '../../assets/scss/UserCards.scss'

export const PaymentHCC = ({ CardsParametros }) => {

  // CardsParametros.PaymentHistory
  return (
    <div className='h-[25rem] overflow-y-auto scroll-cards border-cover-2 pb-5 rounded-lg'>
      {/* <p className='text-center text-[1.2rem] mt-4'>Historial de pagos</p> */}
      {
        CardsParametros.PaymentHistory.length !== 0 ?
          <>
            <div>
              {
                CardsParametros.PaymentHistory.map((el, i) => {
                  let time = new Date(el.RealizationDate)
                  return (
                    <>
                      <div className='mt-5 p-3 grid grid-cols-3 w-[90%] mx-auto bg-[#F7F7F7] shadow-sm rounded-lg border border-[#DFDFDF]'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                          <span className='w-fit font-semibold text-[1rem] text-[#606470]'>Monto:</span>
                          <span className='w-fit'>${el.Amount}</span>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 border-left-div-3'>
                          <span className='w-fit font-semibold text-[1rem] text-[#606470]'>Cuenta:</span>
                          <span className='w-fit'>{el.AccountNumber}</span>
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
              No tiene ningun pago realizado
            </div>
          </>
      }
    </div>
  )
}
