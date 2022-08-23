/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDash } from "../../../../../context/DashboardContext";
import { format } from 'timeago.js'


export const HistoryWidget = () => {
  const { GlobalInfo, Contacts, getGlobalInfo } = useDash()

  const [MyTransactions, setMyTransactions] = useState(null);
  const [HimTransactions, setHimTransactions] = useState(null);

  const sortArrays = (Ar) => {
    return Ar.sort((a, b) => {
      let D_A = new Date(a.createdAt).getTime()
      let D_B = new Date(b.createdAt).getTime()

      if (D_A < D_B) {
        return -1
      } else {
        return 1
      }
    })
  }

  useEffect(() => {
    getGlobalInfo(localStorage.getItem('authToken'));
  }, []);

  useEffect(() => {
    if (GlobalInfo !== null && Object.keys(GlobalInfo).length !== 0) {
      if (GlobalInfo.TransfersHistory.Made.length !== 0 || GlobalInfo.TransfersHistory.Received.length !== 0) {
        let transaction1 = [];
        let transaction2 = [];

        let orderByDateMT = sortArrays(GlobalInfo.TransfersHistory.Made);
        let orderByDateHT = sortArrays(GlobalInfo.TransfersHistory.Received);

        orderByDateMT = orderByDateMT.reverse();
        orderByDateHT = orderByDateHT.reverse();

        for (let index = 0; index < 4; index++) {
          transaction1.push(orderByDateMT[index]);
          transaction2.push(orderByDateHT[index]);
        }
        setMyTransactions(transaction1);
        setHimTransactions(transaction2);
      }
    }
  }, [GlobalInfo]);

  return (
    <>
      <h2 className="text-gray-500 text-[1.5625rem] text-center">Últimas Transferencias</h2>
      <div className="w-100  flex h-[20rem]">
        <div className="text-center w-1/2 m-2">
          <span className=" text-[#34B1E7] text-2xl">Hechas</span>
          <div className="box-in-transfer w-100 h-[90%] mt-2 border-2 rounded">
            <div className="div-info-transfer bg-[#F3F3F3] w-full h-[20%] flex justify-evenly items-center border-b-1">
              <span>Monto</span>
              <span>Beneficiario</span>
              <span>Numero de cuenta</span>
              <span>Fecha</span>
            </div>
            {
              MyTransactions ?
                MyTransactions.map((SingleTrans, i) => {
                  let Name = () => {
                    for (let index = 0; index < Contacts.length; index++) {
                      if (SingleTrans?.ReciverDui === Contacts[index].Dui) return `${Contacts[index].Name.split(' ')[0]} ${Contacts[index].Name.split(' ')[2]}`
                    }
                  }
                  return (
                    <div className={`${i !== 3 && "div-info-transfer"} bg-[#fff] w-full h-[20%] flex justify-evenly items-center`} key={i}>
                      <span>{SingleTrans?.Amount}</span>
                      <span>{Name()}</span>
                      <span>{SingleTrans?.AccountN}</span>
                      <span>{SingleTrans && format(SingleTrans?.createdAt)}</span>
                    </div>
                  )
                })
                :
                <>
                  <div className=" flex justify-center items-center w-100 h-[75%]">
                    <span className="text-xl">No hay ninguna transferencia</span>
                  </div>
                </>
            }
          </div>
        </div>
        <div className="text-center w-1/2 m-2">
          <span className="text-[#1a2c6b] text-2xl">Recibidas</span>
          <div className="box-in-transfer w-100 h-[90%] mt-2 border-2 rounded">
            <div className="div-info-transfer bg-[#F3F3F3] w-full h-[20%] flex justify-evenly items-center border-b-1">
              <span>Monto</span>
              <span>Benefactor</span>
              <span>Numero de cuenta</span>
              <span>Fecha</span>
            </div>
            {
              HimTransactions ?
                HimTransactions.map((SingleTrans, i) => {
                  let Name = () => {
                    for (let index = 0; index < Contacts.length; index++) {
                      if (SingleTrans?.SenderDui === Contacts[index].Dui) return `${Contacts[index].Name.split(' ')[0]} ${Contacts[index].Name.split(' ')[2]}`
                    }
                  }
                  return (
                    <div className={`${i !== 3 && "div-info-transfer"} bg-[#fff] w-full h-[20%] flex justify-evenly items-center`} key={i}>
                      <span>{SingleTrans?.Amount}</span>
                      <span>{Name()}</span>
                      <span>{SingleTrans?.AccountN}</span>
                      <span>{SingleTrans && format(SingleTrans?.createdAt)}</span>
                    </div>
                  )
                })
                :
                <>
                  <div className=" flex justify-center items-center w-100 h-[75%]">
                    <span className="text-xl">No hay ninguna transferencia</span>
                  </div>
                </>
            }
          </div>
        </div>
      </div>
    </>
  );
}