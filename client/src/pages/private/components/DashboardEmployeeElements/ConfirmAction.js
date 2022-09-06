import axios from 'axios';
import React from 'react'
import './assets/scss/DepositsEmployee.scss'

export const ConfirmAction = ({ props, setActive, setSuccess }) => {
    const handleButton = async () => {
        try {
            setActive(false);

            const res = await axios.post('http://localhost:4000/api/requests/deposit', { AccountNumber: props.uAcc, Amount: props.amount, Accountable: props.eDbId });
            setSuccess(true);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };

    const closeButton = () => {
        try {
            setActive(false);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='h-full p-[4rem] w-[55rem]'>
            <div className='container-confir_action'>
                <h1 className='text-center mb-4'>Confirma tu acción</h1>
                <p className='mb-3'>Antes de continuar, asegúrate que los datos estén correctos y posteriormente confirma la solicitud con el botón al final.</p>
                <hr />
                <div>
                    <div className='mb-[1.5rem]'>
                        <h4 className='mb-4 mt-4'>Cliente:</h4>
                        <p><strong>Foto de Perfil:</strong></p> 
                        <div className='flex flex-col justify-center'>
                            <img src={props.uPfp} alt="" className='h-[12rem] w-[12rem]  mb-3' />
                            <div className='flex flex-col justify-center number-account-employee'>
                                <p><strong>Nombre: </strong>{props.uFullName}</p>
                                <p><strong>Número de cuenta: </strong> {props.uAcc}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-[3rem] mb-[1.7rem] flex justify-between'>
                        <div className='basis-[50%]'>
                            <h4 className='mb-4'>Transacción:</h4>
                            <p><strong>Tipo:</strong> Depósito</p>
                            <p><strong>Monto:</strong> <span className='text-[1.5   rem]'>${props.amount}</span></p>
                            <p><strong>Fecha:</strong> {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className='basis-[50%]'>
                            <h4 className='mb-4'>Ejecutor:</h4>
                            <p><strong>Nombre: </strong>{props.eFullName}</p>
                            <p><strong>ID: </strong>{props.eId}</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-center mt-[3rem]'>
                        <button className='text-white rounded-lg border-none outline-none bg-[#455FB9] hover:bg-[#4f6acb] px-[1rem] py-[.5rem] mr-10' onClick={handleButton}>Confirmar</button>
                        <button className='text-white rounded-lg border-none outline-none bg-[#1a2c6b] px-[1rem] py-[.5rem] hover:bg-[#22388a]' onClick={handleButton}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
