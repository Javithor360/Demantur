import React, { useEffect, useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext'

export const DepositsHistory = ({ accNum }) => {

  const { getAccountsHistory } = useDash();
  const [accountHistory, setAccountHistory] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getAccountsHistory(localStorage.getItem('authToken'), accNum);
      setAccountHistory(res.data.data[0][0].Deposits);
    })()
  });
  return (
    <div className='flex flex-col-reverse justify-between text-center mx-[10rem]'>
      {
        accountHistory.length !== 0 ?
          accountHistory.map((el, i) => {
            return (
              <div key={i} className='border-solid border-1 border-rose-500 m-[2rem]'>
                <p>{i + 1}</p>
                <p>{new Date(el.Date).toLocaleDateString()}</p>
                <p>${el.Amount}</p>
                <p>Encargado: {el.Depositor.Name}</p>
              </div>
            )
          })
          :
          <div>Hola xd</div>
      }
    </div>
  )
}
