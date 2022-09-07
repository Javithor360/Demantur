import React, { useEffect, useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext'
import '../../../assets/scss/accounts.scss'
import no_deposits from '../../assets/img/accounts-icons/no_deposits.png'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const DepositsHistory = ({ accNum }) => {

  const { getAccountsHistory } = useDash();
  const [accountHistory, setAccountHistory] = useState([]);

  const [CharginIco, setCharginIco] = useState(true);

  setTimeout(() => {
    setCharginIco(false);
  }, 2500);


  useEffect(() => {
    (async () => {
      const res = await getAccountsHistory(localStorage.getItem('authToken'), accNum);
      setAccountHistory(res.data.data[0][0].Deposits);
    })()
  }, []);
  return (
    <>
      { 
        CharginIco === true ?
        <>
          <div className='flex justify-center items-center w-full h-full bg-white rounded-lg'><AiOutlineLoading3Quarters className='loading-icon animate-spin-custom h-[5rem] w-[5rem]' /></div>
        </>
        :
        <>
          <div className='h-full flex flex-col justify-between text-center w-[90%] mx-auto overflow-y-auto overflow-x-hidden'>
          {
            accountHistory.length !== 0 ?
              accountHistory.map((el, i) => {
                return (
                  <div key={i} className='border-solid border-1 border-cover-2 rounded-lg flex flex-row h-[10rem] w-[100%] mb-5'>
                    <div className='w-[10%] h-full'>
                      <div className='bg-[#D6D6D6] h-[20%] table mb-0 rounded-tl-lg'>
                        <span className='table-cell align-middle'>N°</span>
                      </div>
                      <div className='h-[80%] table mb-0'>
                        <span className='table-cell align-middle text-[1.3rem]'>{i + 1}</span>
                      </div>
                    </div>
                    <div className='w-[90%] h-full'>
                      <div className='h-1/2 border-left-division'>
                        <div className='bg-[#D6D6D6] h-[40%] table mb-0 rounded-tr-lg'>
                          <span className='table-cell align-middle'>Encargado</span>
                        </div>
                        <div className='h-[60%] table mb-0'>
                          <span className='table-cell align-middle'>{el.Depositor.Name}</span>
                        </div>
                      </div>
                      <div className='flex flex-row h-1/2 border-left-division'>
                        <div className='w-[50%] h-[100%]'>
                          <div className='bg-[#D6D6D6] h-[40%] table mb-0'>
                            <span className='table-cell align-middle'>Monto</span>
                          </div>
                          <div className='h-[60%] table mb-0'>
                            <span className='table-cell align-middle'>${el.Amount}</span>
                          </div>
                        </div>
                        <div className='w-[50%] h-[100%]'>
                          <div className='bg-[#D6D6D6] h-[40%] table mb-0 border-left-division'>
                            <span className='table-cell align-middle'>Fecha de realización</span>
                          </div>
                          <div className='h-[60%] table mb-0 border-left-division'>
                            <span className='table-cell align-middle'>{new Date(el.Date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              :
              <div className='my-auto h-full w-full bg-white rounded-xl flex flex-col items-center justify-center'>
                <img src={ no_deposits } alt="" className='w-[200px] mb-3'/>
                <p className='text-[#606470] text-[1.2rem]'>Aún no hay historial de dépositos realizados</p>
              </div>
          }
        </div>
        </>
      }
    </>
  )
}
