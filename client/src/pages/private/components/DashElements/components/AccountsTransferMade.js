import React, { useState } from 'react'
import { useDash } from "../../../../../context/DashboardContext";
import no_transfers_made from '../../assets/img/accounts-icons/no_transfers_made.png'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const AccountsTransferMade = ({ data }) => {
    const { Contacts, Info } = useDash();

    const [CharginIco, setCharginIco] = useState(true);

    setTimeout(() => {
        setCharginIco(false);
    }, 2500);

    return (  
        <>
            {
                CharginIco === true ? 
                <>
                    <div className='flex justify-center items-center w-full h-full bg-white rounded-lg'><AiOutlineLoading3Quarters className='loading-icon animate-spin-custom h-[3rem] w-[3rem]' /></div>
                </>
                :
                <>
                    <div className='flex flex-col justify-between text-center h-full overflow-y-auto'> 
                        {
                            data.length !== 0 ?
                                data.map((el, i) => {
                                    let name;
                                    Contacts.forEach(element => {
                                        if(el.ReciverDui == element.Dui){
                                            name = element.Name;
                                        }
                                    });

                                    return(
                                        <div key={i} className='border-solid border-1 border-cover-2 rounded-lg w-[95%] min-h-full mx-auto mt-3 mb-5 flex flex-col'>
                                            <div className="w-[100%] h-[34.33rem] flex flex-row">
                                                <div className="h-full w-[15%]">
                                                    <div className="rounded-tl-lg w-full h-[30%] table mb-0 bg-[#D6D6D6]">
                                                        <span className='table-cell align-middle font-semibold text-[1.0625rem]'>N°</span>
                                                    </div>
                                                    <div className="w-full h-[70%] table mb-0 text-[1.5rem]">
                                                        <span className='table-cell align-middle'>{i + 1}</span>
                                                    </div>
                                                </div>
                                                <div className="h-full w-[85%] border-left-division">
                                                    <div className='h-[30%] table mb-0 border-bottom-division'>
                                                        <span className='table-cell align-middle font-semibold text-[1.0625rem]'>Datos Generales</span>
                                                    </div>
                                                    <div className='h-[70%] flex flex-row'>
                                                        <div className="w-1/2 h-full">
                                                            <div className="w-full h-[30%] table mb-0 bg-[#D6D6D6]">
                                                                <span className='table-cell align-middle'>Monto</span>
                                                            </div>
                                                            <div className="w-full h-[70%] table mb-0">
                                                                <span className='table-cell align-middle'>{el.Amount}</span>
                                                            </div>
                                                        </div>
                                                        <div className="w-1/2 h-full border-left-division">
                                                            <div className="w-full h-[30%] table mb-0 bg-[#D6D6D6]">
                                                                <span className='table-cell align-middle'>Fecha de realización</span>
                                                            </div>
                                                            <div className="w-full h-[70%] table mb-0">
                                                                <span className='table-cell align-middle'>{new Date(el.createdAt).toLocaleDateString()}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[100%] h-[34.33rem]">
                                                <div className='h-[30%] w-full table mb-0 border-top-division border-bottom-division'>
                                                    <span className='table-cell align-middle font-semibold text-[1.0625rem]'>Datos del emisor</span>
                                                </div>
                                                <div className="h-[70%] flex flex-row">
                                                    <div className="w-[50%] h-full">
                                                        <div className="w-full h-[30%] table mb-0 bg-[#D6D6D6]">
                                                            <span className='table-cell align-middle'>Nombre</span>
                                                        </div>
                                                        <div className="w-full h-[70%] table mb-0">
                                                            <span className='table-cell align-middle'>{`${Info.FirstName} ${Info.LastName}`}</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-[25%] h-full ">
                                                        <div className="border-left-division w-full h-[30%] table mb-0 bg-[#D6D6D6]">
                                                            <span className='table-cell align-middle'>DUI</span>
                                                        </div>
                                                        <div className="border-left-division w-full h-[70%] table mb-0">
                                                            <span className='table-cell align-middle'>{el.SenderDui}</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-[25%] h-full">
                                                        <div className="border-left-division w-full h-[30%] table mb-0 bg-[#D6D6D6]">
                                                            <span className='table-cell align-middle'>Cuenta</span>
                                                        </div>
                                                        <div className="border-left-division w-full h-[70%] table mb-0">
                                                            <span className='table-cell align-middle'>{el.AccountN}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[100%] h-[34.33rem]">
                                                <div className='h-[30%] w-full table mb-0 border-top-division border-bottom-division'>
                                                    <span className='table-cell align-middle font-semibold text-[1.0625rem]'>Datos del receptor</span>
                                                </div>
                                                <div className="h-[70%] flex flex-row">
                                                    <div className="w-[50%] h-full">
                                                        <div className="w-full h-[30%] table mb-0 bg-[#D6D6D6]">
                                                            <span className='table-cell align-middle'>Nombre</span>
                                                        </div>
                                                        <div className="w-full h-[70%] table mb-0">
                                                            <span className='table-cell align-middle'>{name && name}</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-[25%] h-full">
                                                        <div className="border-left-division w-full h-[30%] table mb-0 bg-[#D6D6D6]">
                                                            <span className='table-cell align-middle'>DUI</span>
                                                        </div>
                                                        <div className="border-left-division w-full h-[70%] table mb-0">
                                                            <span className='table-cell align-middle'>{el.ReciverDui}</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-[25%] h-full">
                                                        <div className="border-left-division w-full h-[30%] table mb-0 bg-[#D6D6D6]">
                                                            <span className='table-cell align-middle'>Cuenta</span>
                                                        </div>
                                                        <div className="border-left-division w-full h-[70%] table mb-0">
                                                            <span className='table-cell align-middle'>{el.AccountReceiver}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <div className='my-auto h-full w-full bg-white rounded-xl flex flex-col items-center justify-center'>
                                    <img src={ no_transfers_made } alt="" className='w-[200px] mb-3'/>
                                    <p className='text-[#606470] text-[1.2rem]'>Aún no hay historial de transferencias realizadas</p>
                                </div>
                        }
                    </div>
                </>
            }    
        </>

    )
}
