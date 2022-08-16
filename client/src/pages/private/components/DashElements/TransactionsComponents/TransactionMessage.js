import { useEffect, useState } from 'react'
import './scss/transaction-message.scss'

export const TransactionMessage = ({ own, Transf, CurrentChat, MyName }) => {

    const [HimName, setHimName] = useState('');

    useEffect(() => {
        let Name = CurrentChat.Name.split(' ');
        setHimName(`${Name[0]} ${Name[2]}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={own ? "message-wrapper own" : "message-wrapper"}>
            <div className={own ? "message-container" : "message-container user"}>
                <div className={own ? "triangle-div-right" : "triangle-div-left"} ></div>
                <div className={own ? "message-user-right" : "message-user-left"}>
                    <p>{own === true ? MyName : HimName}</p>
                </div>
                <div className={own ? "message-time-left" : "message-time-right"}>
                    <p>just now</p>
                </div>
                <div className='message-content'>
                    <p>Monto:</p>
                    <p>${Transf.Amount}</p>
                    <p>Número de cuenta emisora</p>
                    <p>SV {Transf.AccountN}</p>
                </div>
            </div>
        </div>

    )
}
