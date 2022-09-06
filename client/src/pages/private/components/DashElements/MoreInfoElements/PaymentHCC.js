import React, { useEffect, useState } from 'react'

export const PaymentHCC = ({ CardsParametros }) => {

  // CardsParametros.PaymentHistory
  return (
    <>
      <div>HISTORIAL DE PAGOS</div>
      {
        CardsParametros.PaymentHistory.length !== 0 ?
          <>
            <div>
              <div className='flex'>
                <span>Monto</span>
                <span>Cuenta</span>
                <span>Fecha</span>
              </div>
              {
                CardsParametros.PaymentHistory.map((el, i) => {
                  let time = new Date(el.RealizationDate)
                  return (
                    <div key={i}>
                      <span>{el.Amount}</span>
                      <span>{el.AccountNumber}</span>
                      <span>{time.toLocaleDateString('en-GB')}</span>
                    </div>
                  )
                })
              }
            </div>

          </>
          :
          <>

          </>
      }
    </>
  )
}
