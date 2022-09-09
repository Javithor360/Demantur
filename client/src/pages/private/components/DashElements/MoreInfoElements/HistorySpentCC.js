import React from 'react'
import no_history_CC from '../../assets/img/cards-icons/no_history_CC.png'

export const HistorySpentCC = ({ CardsParametros }) => {
  return (
    <div className='h-[25rem] overflow-y-auto scroll-cards border-cover-2 rounded-lg'>
      {/* <p className='text-center text-[1.2rem] mt-4'>Historial de gastos</p> */}
      {
        CardsParametros.SpentHistory.length !== 0 ?
          <>
            <div>
              {
                CardsParametros.SpentHistory.map((el, i) => {
                  let time = new Date(el.RealizationDate)
                  return (
                    <div className='mt-3 mb-3 p-3 grid grid-cols-2 w-[80%] mx-auto bg-[#F7F7F7] shadow-sm rounded-lg border border-[#DFDFDF]' key={i}>
                      <div className='flex flex-col justify-center items-center gap-2'>
                        <span className='w-fit font-semibold text-[1rem] text-[#606470]'>Monto:</span>
                        <span className='w-fit'>${el.Amount}</span>
                      </div>
                      <div className='flex flex-col justify-center items-center gap-2 border-left-div-3'>
                        <span className='w-fit font-semibold text-[1rem] text-[#606470]'>Cuenta:</span>
                        <span className='w-fit'>{time.toLocaleDateString('en-GB')}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </>
          :
          <>
            <div className='h-full flex flex-col justify-center items-center'>
              <img src={no_history_CC} alt="" className='w-[6.25rem] mb-3' />
              <p className="text-[#606470] text-[1.2rem]">Aun no hay gastos realizados con esta tarjeta</p>
            </div>
          </>
      }
    </div>
  )
}
