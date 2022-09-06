import './assets/scss/HomePageEmployee.scss'
import { useEmpConx } from '../../../../context/EmployeeContext';
import { GiReceiveMoney } from 'react-icons/gi'
import { FaUserClock } from 'react-icons/fa'
import { BsCreditCard2BackFill } from 'react-icons/bs'

export const HomePageEmployee = () => {

  const { Info } = useEmpConx();

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden scroll-home">
      <div className="flex gap-3 my-1 mb-4">
        <div className=" bg-white basis-[100%] rounded-[0.75rem] shadow-sm">
          <div className='h-[5rem] table mb-0 w-fit mx-auto'>
            <p className='text-[1.8rem] table-cell align-middle m-0 mb-0'>¡Bienvenido de nuevo {`${Info.FirstNames} ${Info.LastNames}`}!</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 my-1">
        <div className="flex flex-col gap-3 basis-[50%]">
          <div className="basis-[50%] bg-white rounded-[0.75rem] text-center">
            <p className='text-[1.6rem] mt-[2rem] text-[#6C757D]'>Solicitudes de prestamos pendientes</p>
            <div className='flex flex-row w-[90%] h-[60%] mx-auto mt-[1rem]'>
              <div className='w-[40%]'>
                <div className="h-[10rem] w-[10rem] my-auto mx-auto p-[10px] bg-[#396EB0] rounded-[100%] flex justify-center items-center">
                  <GiReceiveMoney className="text-[6rem] text-white" />
                </div>
              </div>
              <div className='w-[60%] flex justify-start items-center'>
                <p className='text-[4rem] text-[#606470]'>5</p>
              </div>
            </div>
          </div>
          <div className="basis-[50%] bg-white rounded-[0.75rem] text-center">
            <p className='text-[1.6rem] mt-[2rem] text-[#6C757D]'>Solicitudes de tarjetas pendientes</p>
            <div className='flex flex-row w-[90%] h-[60%] mx-auto mt-[1rem]'>
              <div className='w-[40%]'>
                <div className="h-[10rem] w-[10rem] my-auto mx-auto p-[10px] bg-[#396EB0] rounded-[100%] flex justify-center items-center">
                  <BsCreditCard2BackFill className="text-[6rem] text-white" />
                </div>
              </div>
              <div className='w-[60%] flex justify-start items-center'>
                <p className='text-[4rem] text-[#606470]'>10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[40rem] w-[50%] flex flex-col gap-3 basis-[50%]">
          <div className="basis-[50%] bg-white rounded-[0.75rem] text-center">
            <p className='text-[1.6rem] mt-[2rem] mb-0 text-[#6C757D]'>Solicitudes de activación cuentas</p>
            <div className='flex flex-row w-[90%] h-[60%] mx-auto mt-[1rem]'>
              <div className='w-[40%]'>
                <div className="h-[10rem] w-[10rem] my-auto mx-auto p-[10px] bg-[#396EB0] rounded-[100%] flex justify-center items-center">
                  <FaUserClock className="text-[6rem] text-white" />
                </div>
              </div>
              <div className='w-[60%] flex justify-start items-center'>
                <p className='text-[4rem] text-[#606470]'>8</p>
              </div>
            </div>
          </div>
          <div className="basis-[50%] bg-white rounded-[0.75rem] text-center overflow-y-auto flex flex-col">

            <p className='h-[10%] text-[1.6rem] mt-3 text-[#6C757D]'>Ultimos depositos realizados</p>

            <div className='w-[70%] h-[90%] mt-2 mb-3 rounded mx-auto border-cover-2 rounded-t-lg'>
              <div className="bg-[#F3F3F3] w-full h-[20%] flex justify-evenly items-center">
                <span className='w-1/2'>Monto</span>
                <span className='w-1/2'>Número de cuenta</span>
              </div>
              <div className={`bg-[#fff] w-full h-[20%] flex justify-evenly items-center tborder`}>
                <span className='w-1/2'>$ 200</span>
                <span className='w-1/2'>1232443</span>
              </div>
              <div className={`bg-[#fff] w-full h-[20%] flex justify-evenly items-center tborder`}>
                <span className='w-1/2'>$ 200</span>
                <span className='w-1/2'>1232443</span>
              </div>
              <div className={`bg-[#fff] w-full h-[20%] flex justify-evenly items-center tborder`}>
                <span className='w-1/2'>$ 200</span>
                <span className='w-1/2'>1232443</span>
              </div>
              <div className={`bg-[#fff] w-full h-[20%] flex justify-evenly items-center tborder rounded-b-lg`}>
                <span className='w-1/2'>$ 200</span>
                <span className='w-1/2'>1232443</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
