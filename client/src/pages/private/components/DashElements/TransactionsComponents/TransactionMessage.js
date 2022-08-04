import './scss/transaction-message.scss'

export default function TransactionMessage({own}) {
  return (
    <div className={ own ? "message-wrapper own" : "message-wrapper"}> 
        <div className={own ? "message-container" : "message-container user"}>
            <div className={own ? "triangle-div-right" : "triangle-div-left"} ></div>
            <div className={own ? "message-user-right" : "message-user-left"}>
                <p>Daniel Vásquez</p>
            </div>
            <div className={own ? "message-time-left" : "message-time-right"}>
                <p>7:46 PM, Martes</p>
            </div>
            <div className='message-content'>
                <p>Monto:</p>
                <p>$150.00</p>
                <p>Número de cuenta emisora</p>
                <p>SV 32 0 1020009300254245</p>
            </div>
        </div>
    </div>
    
  )
}
