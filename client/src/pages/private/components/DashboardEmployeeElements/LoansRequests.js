/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useEmpConx } from '../../../../context/EmployeeContext';
import React from 'react'
import './assets/scss/CardEmployee.scss'
import { DetailsLoansRequest } from './DetailLoans'


export const LoansRequests = () => {
  const { getLoanReq } = useEmpConx()
  const [LoanRqs, setLoanRqs] = useState([]);
  const [DisplayDetails, setDisplayDetails] = useState(false);
  const [Params, setParams] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await getLoanReq(localStorage.getItem('secretToken'));
      if (resp.data.data) {
        setLoanRqs(resp.data.data);
      }
    })()
  }, []);
  
  return (
    <>
      {
        DisplayDetails === false ?
          <>
            { 
              LoanRqs.length !== 0 ?
              LoanRqs.map((SingReq, i) => {
                  console.log(SingReq);
                  console.log(LoanRqs);
                  let Name = SingReq.RequestGuarantor.FirstName + SingReq.RequestGuarantor.LastName
                  let Type = SingReq.RequestGuarantor.CardType
                  return (
                    <>
                      <div className='cards-employee p-3' key={i}>
                        <div className='individual-req w-[90%] bg-red-300 flex p-2'>
                          <div className='mr-4'>
                            <p>ID</p>
                            <p>1</p>
                          </div>
                          <div className='mr-4'>
                            <p>Nombre</p>
                            <p>{Name}</p>
                          </div>
                          <div className='mr-4'>
                            <p>Tipo de Tarjeta</p>
                            <p>Demantur {Type}</p>
                          </div>
                          <div className='flex items-center'>
                            <button className='my-auto block' onClick={() => {
                              setParams({
                                Name,
                                Dui: SingReq.RequestGuarantor.Dui,
                                Email: SingReq.RequestGuarantor.Email,
                                Type,
                                Info: SingReq.LoansRequest,
                                // PerfilPhoto: SingReq.RequestOwner.PerfilPhoto.url
                              })
                              setDisplayDetails(true);
                            }}>Más detalles</button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                  
                })
                
              : 
                <>
                  no hay
                </>
            }
          </>
          :
          <>
            <DetailsLoansRequest Params={Params !== null && Params} setDisplayDetails={setDisplayDetails} />
          </>
      }
    </>
  ) 
}
