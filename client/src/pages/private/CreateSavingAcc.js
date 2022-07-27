import './assets/scss/createSavingAccStyle.scss'
import Icon from './assets/img/icons/new-acc-icon.svg'
import { Navbar, Footer } from '../../components'
import Modal from './components/Modal'
import { useState, useEffect } from 'react'

export const CreateSavingAcc = () => {

  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active)
  }
  useEffect(() => {
    if (active) {
      document.body.style.overflowY = 'hidden'
    }
  }, [active])
  
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-[#F1F1F1] relative">
        <div className="w-full h-2/5 bg-[#323643] absolute"></div>
        <div className='w-screen h-screen flex items-center justify-center'>
          <div className='h-3/4 w-4/5 bg-white shadow-xl relative flex flex-row'>
            <div className='h-[100%] w-[60%] flex flex-col justify-center'>
              <div className="h-[20%] w-[100%] flex justify-center">
                <div className="circle-container absolute bg-white -top-14 shadow-md flex justify-center items-center">
                  <img className='w-3/6' src={Icon} alt="" />
                </div>
              </div>
              <div className="h-[80%]">
                <p className="create-account-tittle">Crea tu primera cuenta de ahorros</p>
                <hr className="black-line-2"></hr>
                <p className='text-center px-5 text-sm 2xl:text-base md:text-base'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <button className='create-btn my-10 text-center' onClick={toggle}>
                  Crear
                </button>
              </div>
            </div>
            <div className='create-acc-bg h-[100%] w-[40%]'></div>
          </div>

            <Modal active={active} toggle={toggle}>
              <div className='p-10 h-[50rem] w-[50rem]'>
                <h1>Lorem ipsum</h1>
              </div>
            </Modal>
        </div>
        
      </div>
      <Footer />
    </>
    
    
  )
}
