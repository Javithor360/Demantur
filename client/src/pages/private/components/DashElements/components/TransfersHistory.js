import { useEffect, useState } from 'react';
import { useDash } from '../../../../../context/DashboardContext';
import '../../../assets/scss/accounts.scss';
import { AccountsTransferMade } from './AccountsTransferMade';
import { AccountsTransferReceived } from './AccountsTransferReceived';
import { ScrollToTop } from '../../../../../components/ScrollToTop'

export const TransfersHistory = ({ accNum }) => {
  const { getAccountsHistory } = useDash();
  const [transfersMade, setTransfersMade] = useState([]);
  const [transfersReceived, setTransfersReceived] = useState([]);
  const scrollTop = () =>{   window.scrollTo({top: 0, behavior: 'smooth'});};

  const [BoxHandler, setBoxHandler] = useState(1);
  const renderBox = () => {
    switch (BoxHandler) {
      case 1:
        return <AccountsTransferMade data={transfersMade}/>
      case 2:
        return <AccountsTransferReceived data={transfersReceived}/>
      default:
        return <AccountsTransferMade data={transfersMade}/>
    }
  }

  useEffect(() => {
    (async () => {
      const res = await getAccountsHistory(localStorage.getItem('authToken'), accNum);
      setTransfersMade(res.data.data[2][0].TransferMade)
      setTransfersReceived(res.data.data[3][0].TransferReceived)
    })()
  }, [])


  return (
      <div className='flex flex-col h-[100%]'>
        <div className='flex w-[80%] bg-[#f7f7f7] p-2 rounded-sm shadow-sm justify-center  mx-auto h-[10%]'>
          <div className={`dash_acc-nav-type ${BoxHandler === 1 && `dash_acc-nav-type-active`}`} onClick={() => { setBoxHandler(1) } }>
            <span>Hechas</span>
          </div>
          <div className={`dash_acc-nav-type ${BoxHandler === 2 && `dash_acc-nav-type-active`}`} onClick={() => { setBoxHandler(2)} }>
            <span>Recibidas</span>
          </div>
        </div>

        <div className='h-[90%] overflow-y-hidden'>
          <section className={`w-[90%] h-[100%] mx-auto`}>
              {renderBox()}
            </section>
        </div>
        
      </div>
      
    
  )
}