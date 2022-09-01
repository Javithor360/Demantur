import React from 'react'
import { useDash } from '../../../../../context/DashboardContext'

export const AccountsTransferReceived = ({ data }) => {
    const { Contacts, Info } = useDash();
    return (
        <div className='flex flex-col-reverse justify-between text-center mx-[10rem]'>
            {
                data.length !== 0 ?
                    data.map((el, i) => {
                        let name;
                        Contacts.forEach(element => {
                            if (el.SenderDui == element.Dui) {
                                name = element.Name
                            }
                        });
                        return (
                            <div key={i} className='border-solid border-1 border-rose-500 m-[2rem]'>
                                <h2>{i + 1}</h2>

                                <h4>Datos generales: </h4>
                                <p>Monto: {el.Amount}</p>
                                <p>Fecha: {new Date(el.createdAt).toLocaleDateString()}</p>

                                <h4>Datos del emisor:</h4>
                                <p>Nombre: {name && name}</p>
                                <p>Dui: {el.SenderDui}</p>
                                <p>Cuenta: {el.AccountN}</p>

                                <h4>Datos del receptor:</h4>
                                <p>Nombre: {`${Info.FirstName} ${Info.LastName}`}</p>
                                <p>Dui: {el.ReciverDui}</p>
                                <p>Cuenta: {el.AccountReceiver}</p>
                            </div>
                        )
                    })
                    :
                    <div>No hay transferencias recibidas</div>
            }
        </div>
    )
}
