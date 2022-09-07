import React, { useState } from 'react'
import './assets/scss/RequestEmployee.scss'
import { useDash } from '../../../../context/DashboardContext';
import { useEffect } from 'react';
import { DetailsRequests } from './DetailsRequests';
import no_reqs from './assets/img/icons/no_reqs.png'
import { RiLoader3Fill } from 'react-icons/ri'

export const Requests = () => {
  const { getActivatedAccountRequests } = useDash();
  const [Info, setInfo] = useState([]);
  const [params, setParams] = useState(null);

  const [DisplayDetails, setDisplayDetails] = useState(false);

  const [CharginIco, setCharginIco] = useState(true);

  setTimeout(() => {
    setCharginIco(false);
  }, 2500);

  useEffect(() => {
    (async () => {
      const res = await getActivatedAccountRequests(localStorage.getItem('employeeToken'));
      setInfo({ MainInfo: res.data.data[0], ExtraInfo: res.data.data[1] });
    })()
  }, [])

  return (
    <>
      {
        CharginIco === true ?
          <>
            <div className='flex justify-center items-center w-full h-full bg-white rounded-lg'><RiLoader3Fill className='loading-icon animate-spin-custom h-[8rem] w-[8rem]' /></div>
          </>
          :
          <>
            {
              DisplayDetails === false ?
                <div className='request-employee-container w-[100%] mx-auto h-full overflow-y-auto overflow-x-hidden'>
                  <div className='flex flex-col justify-between text-center h-full'>
                    <p className="text-gray-500 text-center text-[28px] m-0 p-0">Solicitudes de activación de cuenta</p>
                    {
                      Info.MainInfo.length !== 0 ?
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
                        <div className='h-full w-full flex flex-col justify-center items-center'>
                          <img src={no_reqs} alt="" className='w-[280px]' />
                          <p>No hay solicitudes de cuentas pendientes</p>
                        </div>
                    }
                  </div>
                </div>
                :
                <DetailsRequests ArrInfo={Info} setInfo={setInfo} info={params !== null && params} setDisplayDetails={setDisplayDetails} />
            }
          </>
      }
    </>
  )
}
