import React, { useState } from 'react'
import './assets/scss/RequestEmployee.scss'
import { BsXCircle } from "react-icons/bs";
import { useDash } from '../../../../context/DashboardContext';
import { useEffect } from 'react';
import { DetailsRequests } from './DetailsRequests';


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
  })

  return (
    <>
      {
        DisplayDetails === false ?
          <div className='request-employee-container w-[90%] mx-auto max-h-fit'>
            <p className="text-gray-500 text-center text-[28px] m-0 p-0">Solicitudes de activación de cuenta</p>
            <div className='flex flex-col-reverse justify-between text-center mx-[10rem]'>
              {
                Info.length !== 0 ?
                  Info.MainInfo.map((el, i) => {
                    let Name = `${el.FirstName} ${el.LastName}`
                    return (
                      <div key={i} className="flex flex-row justify-between border-solid border-1 border-rose-500">
                        <p>Nombre: {Name}</p>
                        <p>Dui: {el.Dui}</p>
                        <p>Correo: {el.Email}</p>
                        <p>Creada el: {new Date(el.createdAt).toLocaleDateString()}</p>
                        <button className='my-auto block outline-none border-none px-2 py-2 rounded bg-[#455FB9] text-white' onClick={(e) => {
                          e.preventDefault();
                          setDisplayDetails(true);
                          setParams({
                            MainInfo: Info.MainInfo[i],
                            ExtraInfo: Info.ExtraInfo[i]
                          })
                        }}>Más detalles</button>
                      </div>
                    )
                  })
                  :
                  <div>No hay solicitudes de cuentas pendientes</div>
              }
            </div>
          </div>
          :
          <DetailsRequests info={params !== null && params} setDisplayDetails={setDisplayDetails} />
      }
    </>
  )
}
