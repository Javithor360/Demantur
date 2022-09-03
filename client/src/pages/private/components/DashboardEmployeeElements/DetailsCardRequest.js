import './assets/scss/CardEmployee.scss'
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineZoomIn, AiOutlineZoomOut, AiOutlineCompress, AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { TransformComponent, TransformWrapper } from '@pronestor/react-zoom-pan-pinch'
import Modal from '../Modal'
import { ConfirmCardReq } from './ConfirmCardReq'


export const DetailsCardRequest = ({ Params, setDisplayDetails }) => {
  const [confirmData, setConfirmData] = useState({});

  console.log(Params)
  console.log(setDisplayDetails);
  const grid_column_styles = "mr-4 flex flex-col h-full w-full";
  const table_name_styles = "max-h-[35%] w-full bg-[#D6D6D6] p-2 flex justify-center items-center";
  const table_content_styles = "h-[65%] bg-white p-2 flex justify-center items-center";
  const table_container_styles_2 = "w-[90%] h-fit flex flex-col items-center mx-auto";
  const table_content_styles_2 = "h-full bg-white p-2 flex justify-center items-center";

  const [active, setActive] = useState();
  const toggle = () => {
    setActive(!active)
  }
  useEffect(() => {
    if (active) {
        document.body.style.overflowY = 'hidden'
    }
  }, [active])

  const dataImg = [
    {
      ImgSrc: Params.DuiFrontImg,
      Name: 'Fotocopia de DUI frontal'
    },
    {
      ImgSrc: Params.DuiBackImg,
      Name: 'Fotocopia de DUI trasera'
    },
    {
      ImgSrc: Params.NitImg,
      Name: 'Fotocopia de NIT'
    },
    {
      ImgSrc: Params.SalaryEvidenceImg,
      Name: 'Constancia de salario'
    },
  ]

  const [ImageModal, setImageModal] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')
  const getImg = (ImgSrc) => {
    setTempImgSrc(ImgSrc);
    setImageModal(true);
  }
  return (
    <>
      <div className='cards-employee overflow-x-hidden overflow-y-auto'>
        <div className="w-full h-[2rem] flex items-center justify-start">
          <button className="bg-transparent outline-none border-none mt-4 ml-5" onClick={() => {
            setDisplayDetails(false)
          }}>
            <BsArrowLeft className="text-[2rem] text-[#323643]" />
          </button>
        </div>
        <div className='mx-auto w-[90%] h-[9rem] border-cover rounded-2xl bg-[#FCFCFC] shadow-sm flex flex-row mb-5 mt-4'>
          <div className='h-full w-[60%] flex items-center justify-center'>
            <p className='text-[20px] m-0 p-0'>Solicitud de tarjeta de crédito <span className='font-semibold'> Demantur {Params.Type}</span></p>
          </div>
          <div className='h-full w-[40%] flex items-center justify-center'>
            <img src={Params.CloudCardImage} alt="" className='w-[11.25rem]'/>
          </div>
        </div> 

        <div className='m-auto w-[90%] h-fit border-cover rounded-2xl bg-[#FCFCFC] shadow-sm flex flex-col mb-5'>
          <p className='text-[20px] m-auto my-0 text-center font-semibold mt-4'>Informacion del Usuario Solicitante</p>
          <p className='text-[20px] mt-3 ml-4'>Datos Personales</p>
          <div className={ table_container_styles_2 }>
            <div className='individual-req-grid_2 w-[95%] mb-5 rounded-lg h-[8rem] border-cover' >
              <div className={ `${grid_column_styles} border-subdivisions ` }>
                <div className={ `${table_name_styles} rounded-tl-lg` }>
                  <p className='m-0 p-0'>Nombre</p>
                </div>
                <div className={`${table_content_styles} rounded-bl-lg`}>
                  <p className='m-0 p-0'>{Params.Name}</p>
                </div>
              </div>
              <div className={ `${grid_column_styles} border-subdivisions ` }>
                  <div className={ `${table_name_styles}` }>
                    <p className='m-0 p-0'>DUI</p>
                  </div>
                  <div className={`${table_content_styles}`}>
                    <p className='m-0 p-0'>{Params.Dui}</p>
                  </div>
              </div>
              <div className={ `${grid_column_styles}` }>
                  <div className={ `${table_name_styles} rounded-tr-lg` }>
                    <p className='m-0 p-0'>Fecha de Nacimiento</p>
                  </div>
                  <div className={`${table_content_styles} rounded-br-lg`}>
                    <p className='m-0 p-0'>{Params.DateBirth}</p>
                  </div>
              </div>
            </div>
          </div>

          <p className='text-[20px] mt-3 ml-4'>Información de contacto</p>
          <div className={ table_container_styles_2 }>
            <div className='individual-req-grid_3 w-[95%] mb-5 rounded-lg h-[8rem] border-cover' >
              <div className={ `${grid_column_styles} border-subdivisions ` }>
                <div className={ `${table_name_styles} rounded-tl-lg` }>
                  <p className='m-0 p-0'>Correo Electronico</p>
                </div>
                <div className={`${table_content_styles} rounded-bl-lg`}>
                  <p className='m-0 p-0'>{Params.Email}</p>
                </div>
              </div>
              <div className={ `${grid_column_styles}` }>
                  <div className={ `${table_name_styles} rounded-tr-lg` }>
                    <p className='m-0 p-0'>Número de contacto</p>
                  </div>
                  <div className={`${table_content_styles} rounded-br-lg`}>
                    <p className='m-0 p-0'>{Params.CelNum}</p>
                  </div>
              </div>
            </div>
          </div>


          <p className='text-[20px] mt-3 ml-4'>Información Laboral</p>
          <div className={ table_container_styles_2 }>
            <div className='individual-req-grid_4 w-[95%] mb-5 rounded-lg h-[8rem] border-cover' >
              <div className={ `${grid_column_styles} border-subdivisions ` }>
                <div className={ `${table_name_styles} rounded-tl-lg` }>
                  <p className='m-0 p-0'>Estatus Laboral</p>
                </div>
                <div className={`${table_content_styles} rounded-bl-lg`}>
                  <p className='m-0 p-0'>{Params.LaboralStatus}</p>
                </div>
              </div>
              <div className={ `${grid_column_styles} border-subdivisions` }>
                  <div className={ `${table_name_styles}` }>
                    <p className='m-0 p-0'>Lugar de Trabajo</p>
                  </div>
                  <div className={`${table_content_styles}`}>
                    <p className='m-0 p-0'>{Params.WorkPlace}</p>
                  </div>
              </div>
              <div className={ `${grid_column_styles}` }>
                  <div className={ `${table_name_styles} rounded-tr-lg` }>
                    <p className='m-0 p-0'>Rango Salarial</p>
                  </div>
                  <div className={`${table_content_styles} rounded-br-lg`}>
                    <p className='m-0 p-0'>Entre {Params.UserSalary}</p>
                  </div>
              </div>
            </div>
          </div>

          <p className='text-[20px] mt-3 ml-4'>Anexos</p>
          <div className='flex justify-center'>
            <div className='grid-layout_4 w-[95%] mb-5 flex'>
              {dataImg.map((item, index)=>{
                return(
                  <>
                  <div className={ `${grid_column_styles} ` }>
                    <div className={ `${table_name_styles} border-subdivisions` }>
                      <p className='m-0 p-0'>{item.Name}</p>
                    </div>
                    <div className={`${table_content_styles_2} border-subdivisions`} >
                      <img src={item.ImgSrc} alt="" className='hover:cursor-pointer hover:brightness-110 hover:ease-in ease-in duration-200 w-[20rem] py-5'key={index} onClick={()=>getImg(item.ImgSrc)} />
                    </div>
                  </div>
                  </>
                )
              })}
            </div>
          </div>
          {/* ImageModal */}
          <div className={ImageModal? "Image-modal open" : "Image modal"}>
            <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}centerZoomedOut={true} limitToBounds={true}>
              {({ zoomIn, zoomOut, resetTransform, ...rest}) => (
                <>
                  <div className='my-2'>
                    <button className='border-none outline-none bg-transparent' onClick={() => zoomIn()}><AiOutlineZoomIn className='text-[white] text-[2rem]'/></button>
                    <button className='border-none outline-none bg-transparent mx-4' onClick={() => zoomOut()}><AiOutlineZoomOut className='text-[white] text-[2rem]'/></button>
                    <button className='border-none outline-none bg-transparent' onClick={() => resetTransform()}><AiOutlineCompress className='text-[white] text-[2rem]'/></button>
                  </div>
                    <TransformComponent limitToBounds={true}centerZoomedOut={true} centerZoomedIn={true}>
                        <img src={tempImgSrc} alt=""/>
                    </TransformComponent>
                </>
              )}
            </TransformWrapper>
            <button className='text-white absolute top-0 right-0 border-none outline-none bg-transparent m-2' onClick={()=>setImageModal(false)}><AiOutlineClose className='text-[white] text-[2rem]'/></button>
          </div>
          {/* ImageModal */}
        </div>

        <div className='m-auto w-[60%] h-[6rem] border-cover rounded-2xl bg-[#FCFCFC] shadow-sm flex flex-row mb-5'>
          <div className='h-full w-[50%] flex items-center justify-center'>
            <button className='my-auto block outline-none border-none px-5 py-3 rounded bg-[#727C9F] text-white' onClick={() =>{
              setConfirmData(
                {
                  Name: Params.Name,
                  Dui: Params.Dui,
                  Email: Params.Email,
                  CelNum: Params.CelNum
                }
              )
              toggle()
            }
            }>Aceptar</button>
          </div>
          <div className='h-full w-[50%] flex items-center justify-center'>
            <button className='my-auto block outline-none border-none px-5 py-3 rounded bg-[#455FB9] text-white'>Denegar</button>
          </div>
        </div> 
        {toggle &&
          <Modal active={active} toggle={toggle} onRequestClose={toggle}>
              <ConfirmCardReq props={confirmData} setActive={setActive}/>
          </Modal>
        }
      </div>
    </>
  )
}
