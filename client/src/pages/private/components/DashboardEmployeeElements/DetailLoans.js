import img1 from './assets/img/platinumCard.png'

export const DetailsLoansRequest = ({ Params, setDisplayDetails }) => {
    console.log(Params)
    console.log(setDisplayDetails);
    return (
    <>
    <div className='cards-employee p-3'>
        <span onClick={() => setDisplayDetails(false)}>cerrar</span>
        <div className='container-employee'>
            <div className='cards-info-employee'>
            <div className='info-employee'>

                <div className='info-employee1'>
                <p>Nombre:</p>
                <p>{Params.Name}</p>

                <div className='line-employee' >
                <hr />
                </div>

              </div>

              <div className='info-employee2'>
                <p>Dui:</p>
                <p>{Params.Dui} </p>

                <div className='line-employee2' >
                  <hr />
                </div>

              </div>

              <div className='info-employee3'>
                <p>Email:</p>
                <p>{Params.Email}</p>

              </div>

            </div>

            <div className='cards-employee'>
              <p>Solicitó la siguiente tarjeta:</p>
            </div>

          </div>
        </div>

        <div className='container-employee-2'>
          <div className='tarjet-1'>
            <p>Demantur Platinum</p>
            <img src={img1} alt='nigger' />
          </div>
          <div className='tarjet-2'>
            <p>Informacion de usuario:</p>
            {/* {Params.Info} */}
          </div>
        </div>
        <div className='button-cards-employee'>
          <div>
            <button className='button-employee'>Aprobar</button>
          </div>
          <div>
            <button className='button-employee'>Denegar</button>
          </div>
        </div>
      </div>
    </>
  )
}
