/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useEmpConx } from '../../../../context/EmployeeContext';
import React from 'react'
import './assets/scss/CardEmployee.scss'
import { DetailsCardRequest } from './DetailsCardRequest'


export const CardsRequests = () => {
  const { getCardReq } = useEmpConx()
  const [CardRqs, setCardRqs] = useState([]);
  const [DisplayDetails, setDisplayDetails] = useState(false);
  const [Params, setParams] = useState(null);

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
        DisplayDetails === false ?
          <>
            { 
              CardRqs.length !== 0 ?
                CardRqs.map((SingReq, i) => {
                  console.log(SingReq);
                  console.log(CardRqs);
                  let Name = SingReq.RequestOwner.FirstName + SingReq.RequestOwner.LastName
                  let Type = SingReq.CardRequest.CardType
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
                                Dui: SingReq.RequestOwner.Dui,
                                Email: SingReq.RequestOwner.Email,
                                Type,
                                Info: SingReq.CardRequest,
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
            <DetailsCardRequest Params={Params !== null && Params} setDisplayDetails={setDisplayDetails} />
          </>
      }
    </>
  )
  
}
