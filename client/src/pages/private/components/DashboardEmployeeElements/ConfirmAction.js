import axios from 'axios';
import React from 'react'

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

    return (
        <div className='h-full p-[4rem] w-full'>
            <div>
                <h1 className='text-center'>Confirma tu acción</h1>
                <p>Antes de continuar, asegúrate que los datos estén correctos y posteriormente confirma la solicitud con el botón al final.</p>

                <div>
                    <div className='mt-[3rem]'>
                        <h4>Cliente:</h4>
                        <div className='flex'>
                            <img src={props.uPfp} alt="foto de perfil" className='h-[12rem] w-[12rem]' />
                            <div className='ml-[3rem] flex flex-col justify-center'>
                                <p>{props.uFullName}</p>
                                <p>Número de cuenta: {props.uAcc}</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[3rem] flex justify-between'>
                        <div className='basis-[50%]'>
                            <h4>Transacción:</h4>
                            <p>Tipo: Depósito</p>
                            <p>Monto: ${props.amount}</p>
                            <p>Fecha: {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className='basis-[50%]'>
                            <h4>Ejecutor:</h4>
                            <p>{props.eFullName}</p>
                            <p>{props.eId}</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button onClick={handleButton} className="m-[2rem]">CONFIRMAR</button>
                        <button onClick={setActive(false)} className='m-[2rem]'>CANCELAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
