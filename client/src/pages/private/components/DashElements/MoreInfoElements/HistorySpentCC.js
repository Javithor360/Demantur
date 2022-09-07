import React from 'react'

export const HistorySpentCC = ({ CardsParametros }) => {
  return (
    <>
      <div>HISTORIAL DE GASTOS</div>
      {
        CardsParametros.SpentHistory.length !== 0 ?
          <>
            <div>
              <div className='flex'>
                <span>Monto</span>
                <span>Fecha</span>
              </div>
              {
                CardsParametros.PaymentHistory.map((el, i) => {
                  let time = new Date(el.RealizationDate)
                  return (
                    <div key={i}>
                      <span>{el.Amount}</span>
                      <span>{time.toLocaleDateString('en-GB')}</span>
                    </div>
                  )
                })
              }
            </div>

          </>
          :
          <>
            Todavia no tiene ningun gasto
          </>
      }
    </>
  )
}
