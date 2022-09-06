import React, { useState } from 'react'
import './assets/scss/RequestEmployee.scss'
import { BsXCircle } from "react-icons/bs";
import { useDash } from '../../../../context/DashboardContext';
import { useEffect } from 'react';
import { DetailsRequests } from './DetailsRequests';
import no_users_reqs from './assets/img/icons/no_users_reqs.png'


export const Requests = () => {
  const { getActivatedAccountRequests } = useDash();
  const [Info, setInfo] = useState([]);
  const [params, setParams] = useState(null);

  const [DisplayDetails, setDisplayDetails] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getActivatedAccountRequests(localStorage.getItem('employeeToken'));
      setInfo({ MainInfo: res.data.data[0], ExtraInfo: res.data.data[1] });
    })()
  }, [])

  return (
    <>
      {
        DisplayDetails === false ?
          <div className='request-employee-container w-[100%] mx-auto max-h-fit overflow-y-auto overflow-x-hidden'>
            <p className="text-gray-500 text-center text-[28px] m-0 mb-4 p-0">Solicitudes de activación de cuenta</p>
            <div className='flex flex-col-reverse justify-between text-center'>
              {
                // Mayor que cero porque al no llevar nada, el array es undefined
                Info.length > 0 ?
                  Info.MainInfo.map((el, i) => {
                    let Name = `${el.FirstName} ${el.LastName}`
                    return (
                      <>
                        <div className='flex flex-col w-[100%] h-[12rem] border-cover-2 rounded-lg mb-5'>
                          <div className='flex flex-row h-[65%] w-full'>
                            <div className='w-[40%] h-full'>
                              <div className='bg-[#D6D6D6] h-[25%] table mb-0 rounded-tl-lg'>
                                <span className='table-cell align-middle'>Nombre</span>
                              </div>
                              <div className='h-[75%] table mb-0'>
                                <span className='table-cell align-middle'>{Name}</span>
                              </div>
                            </div>
                            <div className='w-[12%] h-full'>
                              <div className='bg-[#D6D6D6] h-[25%] table mb-0 border-left-division'>
                                <span className='table-cell align-middle'>Dui</span>
                              </div>
                              <div className='h-[75%] table mb-0 border-left-division'>
                                <span className='table-cell align-middle'>{el.Dui}</span>
                              </div>
                            </div>
                            <div className='w-[35%] h-full'>
                              <div className='bg-[#D6D6D6] h-[25%] table mb-0 border-left-division'>
                                <span className='table-cell align-middle'>Correo electrónico</span>
                              </div>
                              <div className='h-[75%] table mb-0 border-left-division'>
                                <span className='table-cell align-middle'>{el.Email}</span>
                              </div>
                            </div>
                            <div className='w-[13%] h-full'>
                              <div className='bg-[#D6D6D6] h-[25%] table mb-0 rounded-tr-lg border-left-division'>
                                <span className='table-cell align-middle'>Creada el:</span>
                              </div>
                              <div className='h-[75%] table mb-0 border-left-division'>
                                <span className='table-cell align-middle'>{new Date(el.createdAt).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                          <div className='h-[35%] w-full flex items-center border-top-division'>
                            <button className='my-auto mx-auto block outline-none border-none px-2 py-2 rounded bg-[#455FB9] text-white' onClick={(e) => {
                              e.preventDefault();
                              setDisplayDetails(true);
                              setParams({
                                MainInfo: Info.MainInfo[i],
                                ExtraInfo: Info.ExtraInfo[i]
                              })
                            }}>Más detalles</button>
                          </div>
                        </div>
                      </>
                    )
                  })
                  :
                  <div className='h-[100%] w-[100%] flex flex-col justify-center items-center'>
                    <img src={no_users_reqs} alt="" className='w-[280px]' />
                    No hay solicitudes de cuentas pendientes
                  </div>
              }
            </div>
          </div>
          :
          <DetailsRequests info={params !== null && params} setDisplayDetails={setDisplayDetails} />
      }
    </>
  )
}
