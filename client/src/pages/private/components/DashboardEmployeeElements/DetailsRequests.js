import './assets/scss/CardEmployee.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineZoomIn, AiOutlineZoomOut, AiOutlineCompress, AiOutlineClose } from 'react-icons/ai';
import { TransformComponent, TransformWrapper } from '@pronestor/react-zoom-pan-pinch';
import { useState } from 'react';

import axios from 'axios';

export const DetailsRequests = ({ info, setDisplayDetails }) => {

    const grid_column_styles = "mr-4 flex flex-col h-full w-full";
    const table_name_styles = "max-h-[35%] w-full bg-[#D6D6D6] p-2 flex justify-center items-center";
    const table_content_styles = "h-[65%] bg-white p-2 flex justify-center items-center";
    const table_container_styles_2 = "w-[90%] h-fit flex flex-col items-center mx-auto";
    const table_content_styles_2 = "h-full bg-white p-2 flex justify-center items-center";

    const dataImg = [
        {
            ImgSrc: info.ExtraInfo.ImageOFConstancia.url,
            Name: "Constancia laboral"
        }
    ]

    const [ImageModal, setImageModal] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = (ImgSrc) => {
        setTempImgSrc(ImgSrc);
        setImageModal(true);
    }

    const handleAccept = async (e) => {
        e.preventDefault();
        try {

            await axios.post('http://localhost:4000/api/accounts/activate-account',
                {
                    AccountId: info.MainInfo._id
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": localStorage.getItem('employeeToken')
                    }
                });

            setDisplayDetails(false);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDenny = async (e) => {
        e.preventDefault();

        try {
            await axios.delete('http://localhost:4000/api/accounts/decline-account',
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": localStorage.getItem('employeeToken')
                    },
                    data: {
                        AccountId: info.MainInfo._id
                    }
                });
            setDisplayDetails(false);
        } catch (error) {
            console.error(error);
        }
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
                <div className='mx-auto w-[90%] h-[5rem] border-cover rounded-2xl bg-[#FCFCFC] shadow-sm flex flex-row mb-5 mt-4'>
                    <div className='h-full flex items-center justify-center mx-2'>
                        <p className='text-[20px] m-0 p-0'>Solicitud de activación de cuenta</p>
                    </div>
                </div>
                <div className='m-auto w-[90%] h-fit border-cover rounded-2xl bg-[#FCFCFC] shadow-sm flex flex-col mb-5'>
                    <p className='text-[20px] m-auto my-0 text-center font-semibold mt-4'>Informacion del Usuario Solicitante</p>
                    <p className='text-[20px] mt-3 ml-4'>Datos Personales</p>
                    <div className={table_container_styles_2}>
                        <div className='individual-req-grid_2 w-[95%] mb-5 rounded-lg h-[8rem] border-cover' >
                            <div className={`${grid_column_styles} border-subdivisions `}>
                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                    <p className='m-0 p-0'>Nombre</p>
                                </div>
                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                    <p className='m-0 p-0'>{`${info.MainInfo.FirstName}  ${info.MainInfo.LastName}`}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles} border-subdivisions `}>
                                <div className={`${table_name_styles}`}>
                                    <p className='m-0 p-0'>DUI</p>
                                </div>
                                <div className={`${table_content_styles}`}>
                                    <p className='m-0 p-0'>{info.MainInfo.Dui}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles}`}>
                                <div className={`${table_name_styles} rounded-tr-lg`}>
                                    <p className='m-0 p-0'>Fecha de Nacimiento</p>
                                </div>
                                <div className={`${table_content_styles} rounded-br-lg`}>
                                    <p className='m-0 p-0'>{info.ExtraInfo.DateBirth}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-[20px] mt-3 ml-4'>Información de contacto</p>
                    <div className={table_container_styles_2}>
                        <div className='individual-req-grid_4 w-[95%] mb-5 rounded-lg h-[8rem] border-cover' >
                            <div className={`${grid_column_styles} border-subdivisions `}>
                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                    <p className='m-0 p-0'>Correo Electronico</p>
                                </div>
                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                    <p className='m-0 p-0'>{info.MainInfo.Email}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles}`}>
                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                    <p className='m-0 p-0'>Número de contacto</p>
                                </div>
                                <div className={`${table_content_styles} rounded-br-lg`}>
                                    <p className='m-0 p-0'>{info.ExtraInfo.Number}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles}`}>
                                <div className={`${table_name_styles} rounded-tr-lg`}>
                                    <p className='m-0 p-0'>Dirección</p>
                                </div>
                                <div className={`${table_content_styles} rounded-br-lg`}>
                                    <p className='m-0 p-0'>{info.ExtraInfo.Adress}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-[20px] mt-3 ml-4'>Información Laboral</p>
                    <div className={table_container_styles_2}>
                        <div className='individual-req-grid_4 w-[95%] mb-5 rounded-lg h-[8rem] border-cover' >
                            <div className={`${grid_column_styles} border-subdivisions `}>
                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                    <p className='m-0 p-0'>Estatus Laboral</p>
                                </div>
                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                    <p className='m-0 p-0'>{info.ExtraInfo.LaboralSituation}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles} border-subdivisions`}>
                                <div className={`${table_name_styles}`}>
                                    <p className='m-0 p-0'>Lugar de Trabajo</p>
                                </div>
                                <div className={`${table_content_styles}`}>
                                    <p className='m-0 p-0'>{info.ExtraInfo.WorkPlace}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles}`}>
                                <div className={`${table_name_styles} rounded-tr-lg`}>
                                    <p className='m-0 p-0'>Rango Salarial</p>
                                </div>
                                <div className={`${table_content_styles} rounded-br-lg`}>
                                    <p className='m-0 p-0'>Entre {info.ExtraInfo.Salary}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-[20px] mt-3 ml-4'>Datos del Beneficiario</p>
                    <div className={table_container_styles_2}>
                        <div className='individual-req-grid_2 w-[95%] mb-5 rounded-lg h-[8rem] border-cover' >
                            <div className={`${grid_column_styles} border-subdivisions `}>
                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                    <p className='m-0 p-0'>Nombre</p>
                                </div>
                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                    <p className='m-0 p-0'>{`${info.ExtraInfo.DatosBeneficiario.Nombres} ${info.ExtraInfo.DatosBeneficiario.Apellidos}`}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles} border-subdivisions `}>
                                <div className={`${table_name_styles}`}>
                                    <p className='m-0 p-0'>DUI</p>
                                </div>
                                <div className={`${table_content_styles}`}>
                                    <p className='m-0 p-0'>{info.ExtraInfo.DatosBeneficiario.Dui}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles}`}>
                                <div className={`${table_name_styles} rounded-tr-lg`}>
                                    <p className='m-0 p-0'>Número de contacto</p>
                                </div>
                                <div className={`${table_content_styles} rounded-br-lg`}>
                                    <p className='m-0 p-0'>{info.ExtraInfo.DatosBeneficiario.Number}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-[20px] mt-3 ml-4'>Anexos</p>
                    <div className='flex justify-center'>
                        <div className='grid-layout_1 w-[95%] mb-5 flex'>
                            {dataImg.map((item, index) => {
                                return (
                                    <>
                                        <div className={`${grid_column_styles}`} key={index}>
                                            <div className={`${table_name_styles} border-subdivisions`}>
                                                <p className='m-0 p-0'>{item.Name}</p>
                                            </div>
                                            <div className={`${table_content_styles_2} border-subdivisions`}>
                                                <img src={item.ImgSrc} alt="" className='hover:cursor-pointer hover:brightness-110 hover:ease-in ease-in duration-200 w-[20rem] py-5' key={index} onClick={() => getImg(item.ImgSrc)} />
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* Image View */}
                <div className={ImageModal ? "Image-modal open" : "Image modal"}>
                    <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200} centerZoomedOut={true} limitToBounds={true}>
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <>
                                <div className='my-2'>
                                    <button className='border-none outline-none bg-transparent' onClick={() => zoomIn()}><AiOutlineZoomIn className='text-[white] text-[2rem]' /></button>
                                    <button className='border-none outline-none bg-transparent mx-4' onClick={() => zoomOut()}><AiOutlineZoomOut className='text-[white] text-[2rem]' /></button>
                                    <button className='border-none outline-none bg-transparent' onClick={() => resetTransform()}><AiOutlineCompress className='text-[white] text-[2rem]' /></button>
                                </div>
                                <TransformComponent limitToBounds={true} centerZoomedOut={true} centerZoomedIn={true}>
                                    <img src={tempImgSrc} alt="" />
                                </TransformComponent>
                            </>
                        )}
                    </TransformWrapper>
                    <button className='text-white absolute top-0 right-0 border-none outline-none bg-transparent m-2' onClick={() => setImageModal(false)}><AiOutlineClose className='text-[white] text-[2rem]' /></button>
                </div>

                <div className='m-auto w-[60%] h-[6rem] border-cover rounded-2xl bg-[#FCFCFC] shadow-sm flex flex-row mb-5'>
                    <div className='h-full w-[50%] flex items-center justify-center'>
                        <button className='my-auto block outline-none border-none px-5 py-3 rounded bg-[#727C9F] text-white' onClick={handleAccept}>Aceptar</button>
                    </div>
                    <div className='h-full w-[50%] flex items-center justify-center'>
                        <button className='my-auto block outline-none border-none px-5 py-3 rounded bg-[#455FB9] text-white' onClick={handleDenny}>Denegar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
