/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useEmpConx } from '../../../../context/EmployeeContext';
import React from 'react'
import './assets/scss/CardEmployee.scss'
import { DetailsLoansRequest } from './DetailLoans'
import no_cards_req from './assets/img/icons/no_cards_reqs.png'

export const LoansRequests = () => {
  const { getLoanReq } = useEmpConx()
  const [LoanRqs, setLoanRqs] = useState([]);
  const [DisplayDetails, setDisplayDetails] = useState(false);
  const [Params, setParams] = useState(null);
  const grid_column_styles = "mr-4 flex flex-col h-full w-full";
  const table_name_styles = "h-[35%] w-full bg-[#D6D6D6] p-2 flex justify-center items-center";
  const table_content_styles = "h-[65%] bg-white p-2 flex justify-center items-center";


  useEffect(() => {
    (async () => {
      try {
        const resp = await getLoanReq(localStorage.getItem('secretToken'));
        console.log(resp)
      if (resp.data.data) {
        setLoanRqs(resp.data.data);
      }
      } catch (error) {
        console.log(error)
      }
    })()
  }, []);

  return (
    <>
      {
        DisplayDetails === false ?
          <div className='cards-employee flex flex-col px-5 py-5 overflow-x-hidden overflow-y-auto'>
            { 
              LoanRqs.length !== 0 ?
              LoanRqs.map((SingReq, i) => {
                  console.log(SingReq);
                  console.log(LoanRqs);
                  let Name = `${SingReq.Request_guarantor.FirstName}` +  ` ${SingReq.Request_guarantor.LastName}`
                  let Type = SingReq.LoanRequest.LoanType
                  let Dui = SingReq.Request_guarantor.Dui
                  return (
                    <>
                        <div className='individual-req w-[95%] mb-5 rounded-lg h-[8rem] border-cover' key={i}>
                          <div className={ `${grid_column_styles} border-subdivisions ` }>
                            <div className={ `${table_name_styles} rounded-tl-lg` }>
                              <p className='m-0 p-0'>Nombre</p>
                            </div>
                            <div className={`${table_content_styles} rounded-bl-lg`}>
                              <p className='m-0 p-0'>{Name}</p>
                            </div>
                          </div>
                          <div className={ `${grid_column_styles} border-subdivisions ` }>
                              <div className={ `${table_name_styles}` }>
                                <p className='m-0 p-0'>DUI</p>
                              </div>
                              <div className={`${table_content_styles}`}>
                                <p className='m-0 p-0'>{Dui}</p>
                              </div>
                          </div>
                          <div className={ `${grid_column_styles} border-subdivisions ` }>
                              <div className={ `${table_name_styles}` }>
                                <p className='m-0 p-0'>Tipo de préstamo</p>
                              </div>
                              <div className={`${table_content_styles}`}>
                                <p className='m-0 p-0'>Demantur {Type}</p>
                              </div>
                          </div>
                          <div className='flex flex-col items-center justify-center h-full'>
                            <button className='my-auto block outline-none border-none px-2 py-2 rounded bg-[#455FB9] text-white' onClick={() => {
                              setParams({
                                Name,
                                Dui: SingReq.Request_guarantor.Dui,
                                DateBirth: SingReq.ExtraInfo.DateBirth,
                                Email: SingReq.Request_guarantor.Email,
                                CelNum: SingReq.ExtraInfo.Number,
                                UserSalary: SingReq.LoanRequest.UserSalary,
                                UserStatus: SingReq.LoanRequest.UserStatus,
                                Amountrequest: SingReq.LoanRequest.Amountrequest,
                                WorkPlace: SingReq.ExtraInfo.WorkPlace,
                                Type,
                                Info: SingReq.LoanRequest,
                                DuiFrontImg: SingReq.LoanRequest.anex.DuiFrontImg.url,
                                DuiBackImg: SingReq.LoanRequest.anex.DuiBackImg.url,
                                ConstancyImg: SingReq.LoanRequest.anex.ConstancyImg.url,
                                SalaryEvidenceImg: SingReq.LoanRequest.anex.SalaryEvidenceImg.url,
                                PerfilPhoto: SingReq.Request_guarantor.PerfilPhoto.url,
                                CloudLoansImage: SingReq.LoanRequest.anex.CloudLoansImage
                                
                              })
                              setDisplayDetails(true);
                            }}>Más detalles</button>
                          </div>
                        </div>
                    </>
                  );
                  
                })
                
              : 
                <>
                  <div className='h-full w-full bg-white rounded-xl flex flex-col items-center justify-center'>
                    <img src={ no_cards_req } alt="" className='w-[15.625rem] mb-3'/>
                    <p className='text-[#606470] text-[1.2rem]'>No hay solicitudes pendientes</p>
                  </div>
                </>
            }
          </div>
          :
          <>
          
            <DetailsLoansRequest Params={Params !== null && Params} setDisplayDetails={setDisplayDetails} />
          </>
      }
    </>
  )
  
}
