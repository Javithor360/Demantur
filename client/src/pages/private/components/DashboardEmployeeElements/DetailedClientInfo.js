import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

export const DetailedClientInfo = ({ c, setDisplay }) => {

    console.log(c);

    const grid_column_styles = "mr-4 flex flex-col h-full w-full";
    const table_name_styles = "h-[35%] w-full bg-[#D6D6D6] p-2 flex justify-center items-center";
    const table_content_styles = "h-[65%] bg-white p-2 flex justify-center items-center";
    const table_container_styles_2 = "w-[90%] h-fit flex flex-col items-center mx-auto";
    const table_content_styles_2 = "h-full bg-white p-2 flex justify-center items-center";

    const dataImg = [
        {
            ImgSrc: c[0].PerfilPhoto.url,
            Name: 'Foto de perfil'
        },
        {
            ImgSrc: c[1].ImageOFConstancia.url,
            Name: 'Contancia laboral'
        }
    ];

    const [ImageModal, setImageModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (ImgSrc) => {
        setTempImgSrc(ImgSrc);
        setImageModal(true);
    }

    return (
        <>
            <div className='cards-employee overflow-x-hidden overflow-y-auto'>
                <div className="w-full h-[2rem] flex items-center justify-start">
                    <button className="bg-transparent outline-none border-none mt-4 ml-5" onClick={() => {
                        setDisplay(false)
                    }}>
                        <BsArrowLeft className="text-[2rem] text-[#323643]" />
                    </button>
                </div>
                <div className='mx-auto w-[90%] h-[5rem] border-cover rounded-2xl bg-[#FCFCFC] shadow-sm flex flex-row mb-5 mt-4'>
                    <div className='h-full w-full flex items-center justify-center mx-2'>
                        <p className='text-[20px] m-0 p-0 w-fit'>Buscador de clientes</p>
                    </div>
                </div>
                <div className='m-auto w-[90%] h-fit border-cover rounded-2xl bg-[#FCFCFC] shadow-sm flex flex-col mb-5'>
                    <p className='text-[20px] m-auto my-0 text-center font-semibold mt-4'>Informacion del Cliente</p>

                    <p className='text-[20px] mt-3 ml-4'>Datos Personales</p>
                    <div className={table_container_styles_2}>
                        <div className='individual-req-grid_2 w-[95%] mb-5 rounded-lg h-[8rem] border-cover'>
                            <div className={`${grid_column_styles} border-subdivisions `}>
                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                    <p className='m-0 p-0'>Nombre</p>
                                </div>
                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                    <p className='m-0 p-0'>{c[0].FirstName} {c[0].LastName}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles} border-subdivisions `}>
                                <div className={`${table_name_styles}`}>
                                    <p className='m-0 p-0'>DUI</p>
                                </div>
                                <div className={`${table_content_styles}`}>
                                    <p className='m-0 p-0'>{c[0].Dui}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles}`}>
                                <div className={`${table_name_styles} rounded-tr-lg`}>
                                    <p className='m-0 p-0'>Fecha de Nacimiento</p>
                                </div>
                                <div className={`${table_content_styles} rounded-br-lg`}>
                                    <p className='m-0 p-0'>{c[1].DateBirth}</p>
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
                                    <p className='m-0 p-0'>{c[0].Email}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles}`}>
                                <div className={`${table_name_styles} border-subdivisions`}>
                                    <p className='m-0 p-0'>Número de contacto</p>
                                </div>
                                <div className={`${table_content_styles} border-subdivisions`}>
                                    <p className='m-0 p-0'>{c[1].Number}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles}`}>
                                <div className={`${table_name_styles} rounded-tr-lg`}>
                                    <p className='m-0 p-0'>Dirección</p>
                                </div>
                                <div className={`${table_content_styles} rounded-br-lg`}>
                                    <p className='m-0 p-0'>{c[1].Adress}</p>
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
                                    <p className='m-0 p-0'>{c[1].LaboralSituation}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles} border-subdivisions`}>
                                <div className={`${table_name_styles}`}>
                                    <p className='m-0 p-0'>Lugar de Trabajo</p>
                                </div>
                                <div className={`${table_content_styles}`}>
                                    <p className='m-0 p-0'>{c[1].WorkPlace}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles}`}>
                                <div className={`${table_name_styles} rounded-tr-lg`}>
                                    <p className='m-0 p-0'>Rango Salarial</p>
                                </div>
                                <div className={`${table_content_styles} rounded-br-lg`}>
                                    <p className='m-0 p-0'>Entre {c[1].Salary}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-[20px] mt-3 ml-4'>Información del beneficiario</p>
                    <div className={table_container_styles_2}>
                        <div className='individual-req-grid_4 w-[95%] mb-5 rounded-lg h-[8rem] border-cover' >
                            <div className={`${grid_column_styles} border-subdivisions `}>
                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                    <p className='m-0 p-0'>Nombre</p>
                                </div>
                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                    <p className='m-0 p-0'>{c[1].DatosBeneficiario.Nombres} {c[1].DatosBeneficiario.Apellidos}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles} border-subdivisions`}>
                                <div className={`${table_name_styles}`}>
                                    <p className='m-0 p-0'>DUI</p>
                                </div>
                                <div className={`${table_content_styles}`}>
                                    <p className='m-0 p-0'>{c[1].DatosBeneficiario.Dui}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles}`}>
                                <div className={`${table_name_styles} rounded-tr-lg`}>
                                    <p className='m-0 p-0'>Teléfono</p>
                                </div>
                                <div className={`${table_content_styles} rounded-br-lg`}>
                                    <p className='m-0 p-0'>{c[1].DatosBeneficiario.Number}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-[20px] mt-3 ml-4'>Cuentas bancarias</p>
                    {
                        c[2].length !== 0 ?
                            c[2].map((el, i) => {
                                return (
                                    <div key={i} className={table_container_styles_2}>
                                        <div className='individual-req-grid_6 w-[95%] mb-5 rounded-lg h-[8rem] border-cover'>
                                            <div className={`${grid_column_styles} border-subdivisions `}>
                                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                                    <p className='m-0 p-0'>Cuenta de ahorros</p>
                                                </div>
                                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                                    <p className='m-0 p-0'>{el.activated === true ? "Activa" : "Inhabilitada"}</p>
                                                </div>
                                            </div>

                                            <div className={`${grid_column_styles} border-subdivisions `}>
                                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                                    <p className='m-0 p-0'>N° cuenta</p>
                                                </div>
                                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                                    <p className='m-0 p-0'>{el.accountNumber}</p>
                                                </div>
                                            </div>

                                            <div className={`${grid_column_styles} border-subdivisions `}>
                                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                                    <p className='m-0 p-0'>Saldo</p>
                                                </div>
                                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                                    <p className='m-0 p-0'>${el.balance.$numberDecimal.toLocaleString()}</p>
                                                </div>
                                            </div>

                                            <div className={`${grid_column_styles} border-subdivisions `}>
                                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                                    <p className='m-0 p-0'>Intereses</p>
                                                </div>
                                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                                    <p className='m-0 p-0'>{el.interest}%</p>
                                                </div>
                                            </div>

                                            <div className={`${grid_column_styles} border-subdivisions `}>
                                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                                    <p className='m-0 p-0'>Fecha de creación</p>
                                                </div>
                                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                                    <p className='m-0 p-0'>{new Date(el.createdAt).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div>u2je2km</div>
                    }

                    <p className='text-[20px] mt-3 ml-4'>Información financiera</p>
                    <div className={table_container_styles_2}>
                        <div className='individual-req-grid_3 w-[95%] mb-5 rounded-lg h-[8rem] border-cover'>
                            <div className={`${grid_column_styles} border-subdivisions `}>
                                <div className={`${table_name_styles} rounded-tl-lg`}>
                                    <p className='m-0 p-0'>Préstamo</p>
                                </div>
                                <div className={`${table_content_styles} rounded-bl-lg`}>
                                    <p className='m-0 p-0'>{c[3].LoanRequestCount === true ? "Con préstamo" : "Sin préstamo"}</p>
                                </div>
                            </div>
                            <div className={`${grid_column_styles} border-subdivisions `}>
                                <div className={`${table_name_styles}`}>
                                    <p className='m-0 p-0'>Tarjetas</p>
                                </div>
                                <div className={`${table_content_styles}`}>
                                    <p className='m-0 p-0'>{c[4].CardRequestCount === true ? "Con tarjeta" : "Sin tarjeta"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-[20px] mt-3 ml-4'>Anexos</p>
                    <div className='flex justify-center'>
                        <div className='grid-layout_4 w-[95%] mb-5 flex'>
                            {dataImg.map((item, index) => {
                                return (
                                    <>
                                        <div className={`${grid_column_styles} `}>
                                            <div className={`${table_name_styles} border-subdivisions`}>
                                                <p className='m-0 p-0'>{item.Name}</p>
                                            </div>
                                            <div className={`${table_content_styles_2} border-subdivisions`} >
                                                <img src={item.ImgSrc} alt="" className='hover:cursor-pointer hover:brightness-110 hover:ease-in ease-in duration-200 w-[20rem] py-5' key={index} onClick={() => getImg(item.ImgSrc)} />
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
