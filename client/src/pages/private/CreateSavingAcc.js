//scss
import './assets/scss/createSavingAccStyle.scss'
//images
import Icon from './assets/img/icons/new-acc-icon.svg'
import Modal from './components/Modal'
import { CreateSavingAccForm } from './components/CreateSavingAccForm'
//hooks
import { useState, useEffect } from 'react';

export const CreateSavingAcc = () => {
  const [active, setActive] = useState(false);
  const [Chargin, setChargin] = useState(true);
  const isModal = true;

  const toggle = () => {
    setActive(!active)
  }
  useEffect(() => {
    if (active) {
      document.body.style.overflowY = 'hidden'
    }
  }, [active])

  useEffect(() => {
    setTimeout(() => {
      setChargin(false)
    }, 1500)
  }, [])

  return (
    <>
      {Chargin === true &&
        <div className="container-texts">
          <span className="loader"></span>
        </div>
      }
      <div className="w-screen h-screen bg-[#F1F1F1] relative">
        <div className="w-full h-2/5 bg-[#323643] absolute"></div>
        <div className='flex items-center justify-center w-screen h-screen'>
          <div className='relative flex flex-row w-4/5 bg-white shadow-xl h-3/4'>
            <div className='h-[100%] w-[60%] flex flex-col justify-center'>
              <div className="h-[20%] w-[100%] flex justify-center">
                <div className="absolute flex items-center justify-center bg-white shadow-md circle-container -top-14">
                  <img className='w-3/6' src={Icon} alt="" />
                </div>
              </div>
              <div className="h-[80%]">
                <p className="create-account-tittle">Crea tu primera cuenta de ahorros</p>
                <hr className="black-line-2"></hr>
                <p className='px-5 text-center'>
                  Para poder hacer uso de todos nuestros beneficios crea tu primera cuenta de ahorros con nosotros, al hacer esto, recibes acceso a todos los servicios de Demantur, además de que empiezas a tener el control de tu dinero, alcanzando la estabilidad financiera que deseas
                </p>
                <button className='my-10 text-center create-btn' onClick={toggle}>
                  Crear
                </button>
              </div>
            </div>
            <div className='create-acc-bg h-[100%] w-[40%]'></div>
          </div>
          {toggle &&
            <Modal active={active} toggle={toggle} onRequestClose={toggle}>
              <CreateSavingAccForm isModal={isModal} />
            </Modal>
          }
        </div>
      </div>
    </>
  )
}
