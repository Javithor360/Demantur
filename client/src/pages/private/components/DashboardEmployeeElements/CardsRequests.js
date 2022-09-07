/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useEmpConx } from '../../../../context/EmployeeContext';
import React from 'react'
import './assets/scss/CardEmployee.scss'
import { DetailsCardRequest } from './DetailsCardRequest'
import no_cards_req from './assets/img/icons/no_cards_reqs.png'
import { RiLoader3Fill } from 'react-icons/ri'

export const CardsRequests = () => {
  const { getCardReq } = useEmpConx()
  const [CardRqs, setCardRqs] = useState([]);
  const [DisplayDetails, setDisplayDetails] = useState(false);
  const [Params, setParams] = useState(null);
  const grid_column_styles = "mr-4 flex flex-col h-full w-full";
  const table_name_styles = "h-[35%] w-full bg-[#D6D6D6] p-2 flex justify-center items-center";
  const table_content_styles = "h-[65%] bg-white p-2 fex justify-center items-center";

  const [CharginIco, setCharginIco] = useState(true);

  setTimeout(() => {
    setCharginIco(false);
  }, 2200);

  useEffect(() => {
    (async () => {
      const resp = await getCardReq(localStorage.getItem('secretToken'));
      if (resp.data.data) {
        setCardRqs(resp.data.data);
      }
    })()
  }, []);

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
              <div className='cards-employee flex flex-col px-5 py-5 overflow-x-hidden overflow-y-auto'>
                {
                  CardRqs.length !== 0 ?
                    CardRqs.map((SingReq, i) => {
                      let Name = `${SingReq.RequestOwner.FirstName} ` + `${SingReq.RequestOwner.LastName}`
                      let Type = SingReq.CardRequest.CardType
                      let Dui = SingReq.RequestOwner.Dui
                      return (
                        <>
                          <h1>Solicitudes de Tarjetas</h1>
                          <div className='individual-req w-[95%] mb-5 rounded-lg h-[8rem] border-cover' key={i}>
                            <div className={`${grid_column_styles} border-subdivisions `}>
                              <div className={`${table_name_styles} rounded-tl-lg`}>
                                <p className='m-0 p-0'>Nombre</p>
                              </div>
                              <div className={`${table_content_styles} rounded-bl-lg`}>
                                <p className='m-0 p-0'>{Name}</p>
                              </div>
                            </div>
                            <div className={`${grid_column_styles} border-subdivisions `}>
                              <div className={`${table_name_styles}`}>
                                <p className='m-0 p-0'>DUI</p>
                              </div>
                              <div className={`${table_content_styles}`}>
                                <p className='m-0 p-0'>{Dui}</p>
                              </div>
                            </div>
                            <div className={`${grid_column_styles} border-subdivisions `}>
                              <div className={`${table_name_styles}`}>
                                <p className='m-0 p-0'>Tipo de Tarjeta</p>
                              </div>
                              <div className={`${table_content_styles}`}>
                                <p className='m-0 p-0'>Demantur {Type}</p>
                              </div>
                            </div>
                            <div className='flex flex-col items-center justify-center h-full'>
                              <button className='my-auto block outline-none border-none px-2 py-2 rounded bg-[#455FB9] text-white' onClick={() => {
                                setParams({
                                  Name,
                                  Dui: SingReq.RequestOwner.Dui,
                                  DateBirth: SingReq.ExtraInfo.DateBirth,
                                  Email: SingReq.RequestOwner.Email,
                                  CelNum: SingReq.ExtraInfo.Number,
                                  LaboralStatus: SingReq.CardRequest.UserLaboralStatus,
                                  UserSalary: SingReq.CardRequest.UserSalary,
                                  WorkPlace: SingReq.ExtraInfo.WorkPlace,
                                  Type,
                                  Info: SingReq.CardRequest,
                                  DuiFrontImg: SingReq.CardRequest.annexes.DuiFrontImg.url,
                                  DuiBackImg: SingReq.CardRequest.annexes.DuiBackImg.url,
                                  NitImg: SingReq.CardRequest.annexes.NitImg.url,
                                  SalaryEvidenceImg: SingReq.CardRequest.annexes.SalaryEvidenceImg.url,
                                  PerfilPhoto: SingReq.RequestOwner.PerfilPhoto.url,
                                  CloudCardImage: SingReq.CardRequest.annexes.CloudCardImage
                                })
                                setDisplayDetails(true)
                              }}>Más detalles</button>
                            </div>
                          </div>
                        </>
                      );

                    })

                    :
                    <>
                      <div className='h-full w-full bg-white rounded-xl flex flex-col items-center justify-center'>
                        <img src={no_cards_req} alt="" className='w-[15.625rem] mb-3' />
                        <p className='text-[#606470] text-[1.2rem]'>Cuando hayan solicitudes se mostrarán aqui</p>
                      </div>
                    </>
                }
              </div>
              :
              <>
                <DetailsCardRequest Params={Params !== null && Params} setDisplayDetails={setDisplayDetails} setCardRqs={setCardRqs} CardRqs={CardRqs} />
              </>
          }
        </>
      }
    </>
  )

}
