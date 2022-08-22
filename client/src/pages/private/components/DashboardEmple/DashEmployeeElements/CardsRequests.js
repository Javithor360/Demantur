import React from 'react'
import '../assets/scss/CardEmployee.scss'
import img1 from '../assets/img/platinumCard.png'
import img2 from '../assets/img/debitCard.png'


export const CardsRequests = () => {
  return (
    <>
      <div className='cards-employee p-3'>
        <div className='individual-req w-[90%] bg-red-300 flex p-2'>
          <div className='mr-4'>
            <p>ID</p>
            <p>1</p>
          </div>
          <div className='mr-4'>
            <p>Nombre</p>
            <p>Daniel Ernesto Vásquez</p>
          </div>
          <div className='mr-4'>
            <p>Tipo de Tarjeta</p>
            <p>Demantur Classic</p>
          </div>
          <div className='flex items-center'>
            <button className='my-auto block'>Más detalles</button>
          </div>
        </div>
      </div> 
      {/* <div className='container-employee'>
        <div className='cards-info-employee'>
            <div className='info-employee'>

              <div className='info-employee1'>
                <p>Nombre:</p>
                <p>Alvin Josué Meléndez Serrano</p>

                <div className='line-employee' >
                  <hr />
                </div>

              </div>
              
              <div className='info-employee2'>
                <p>Dui:</p>
                <p>123456-7</p>
                
                <div className='line-employee2' >
                  <hr />
                </div>

              </div>
              
              <div className='info-employee3'>
                <p>Email:</p>
                <p>Alvinjosuemelendez@gmail.com</p>
                
              </div>
              
          </div>

          <div className='cards-employee'>
            <p>Solicitó las siguientes tarjetas:</p>
          </div>

        </div>  
        </div>

        <div className='container-employee-2'>
          <div className='tarjet-1'>
            <p>Demantur Platinum</p>
            <img src={img1} />
          </div>
          <div className='tarjet-2'>
            <p>Débita Clásica </p>
            <img src={img2} />
          </div>
        </div>
        <div className='button-cards-employee'>
          <div>
            <button className='button-employee'>Aprobar</button>
          </div>
          <div>
            <button className='button-employee'>Denegar</button>
          </div>
        </div> */}

    </>
  )
}
