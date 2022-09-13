/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDash } from "../../../../../context/DashboardContext";

// Translation
import { useTranslation } from "react-i18next";


export const HistoryWidget = () => {
  const { t } = useTranslation();
  const { GlobalInfo, Contacts, getGlobalInfo, getUsersToAdd } = useDash()

  const [MyTransactions, setMyTransactions] = useState(null);
  const [HimTransactions, setHimTransactions] = useState(null);
  const [UsersToFind, setUsersToFind] = useState(null);

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
    (async () => {
      const { data } = await getUsersToAdd(localStorage.getItem('authToken'));
      setUsersToFind(data.data);
    })()
  }, []);

  useEffect(() => {
    if (GlobalInfo !== null && Object.keys(GlobalInfo).length !== 0) {
      if (GlobalInfo.TransfersHistory.Made.length !== 0) {
        let transaction1 = [];

        let orderByDateMT = sortArrays(GlobalInfo.TransfersHistory.Made);

        orderByDateMT = orderByDateMT.reverse();

        let IndexMax;

        if (orderByDateMT.length < 4) {
          IndexMax = orderByDateMT.length
        } else {
          IndexMax = 4
        }

        for (let index = 0; index < IndexMax; index++) {
          transaction1.push(orderByDateMT[index]);
        }
        setMyTransactions(transaction1);
      }
    }

    if (GlobalInfo !== null && Object.keys(GlobalInfo).length !== 0) {
      if (GlobalInfo.TransfersHistory.Received.length !== 0) {
        let transaction2 = [];

        let orderByDateHT = sortArrays(GlobalInfo.TransfersHistory.Received);

        orderByDateHT = orderByDateHT.reverse();
        let IndexMax;

        if (orderByDateHT.length < 4) {
          IndexMax = orderByDateHT.length
        } else {
          IndexMax = 4
        }

        for (let index = 0; index < IndexMax; index++) {
          transaction2.push(orderByDateHT[index]);
        }
        setHimTransactions(transaction2);
      }
    }
  }, [GlobalInfo]);

  return (
    <>
      <h2 className="text-gray-500 text-[1.5625rem] text-center">{t("DashboardNormalUser.Home.transfers.tittle")}</h2>
      <div className="w-100  flex h-[18rem]">
        <div className="text-center w-1/2 m-2">
          <span className=" text-[#34B1E7] text-2xl">{t("DashboardNormalUser.Home.transfers.tittle2")}</span>
          <div className="box-in-transfer w-100 h-[90%] mt-2 border-2 rounded">
            <div className="div-info-transfer bg-[#F3F3F3] w-full h-[20%] flex justify-evenly items-center border-b-1">
              <span>{t("DashboardNormalUser.Home.transfers.amount")}</span>
              <span>{t("DashboardNormalUser.Home.transfers.beneficiary1")}</span>
              <span>{t("DashboardNormalUser.Home.transfers.account")}</span>
              <span>{t("DashboardNormalUser.Home.transfers.date")}</span>
            </div>
            {
              MyTransactions ?
                MyTransactions.map((SingleTrans, i) => {
                  let Name;
                  UsersToFind?.forEach(element => {
                    if (SingleTrans?.ReciverDui === element.Dui) {
                      Name = `${element.FirstName.split(' ')[0]} ${element.LastName.split(' ')[0]}`
                    }
                  });
                  let time = new Date(SingleTrans?.createdAt)
                  return (
                    <div className={`${i !== 3 && "div-info-transfer"} bg-[#fff] w-full h-[20%] flex justify-evenly items-center`} key={i}>
                      <span>$ {SingleTrans?.Amount}</span>
                      <span>{Name}</span>
                      <span>{SingleTrans?.AccountN}</span>
                      <span>{SingleTrans && time.toLocaleDateString('en-GB')}</span>
                    </div>
                  )
                })
                :
                <>
                  <div className=" flex justify-center items-center w-100 h-[75%]">
                    <span className="text-xl">{t("DashboardNormalUser.Home.transfers2")}</span>
                  </div>
                </>
            }
          </div>
        </div>
        <div className="text-center w-1/2 m-2">
          <span className="text-[#1a2c6b] text-2xl">{t("DashboardNormalUser.Home.transfers.tittle3")}</span>
          <div className="box-in-transfer w-100 h-[90%] mt-2 border-2 rounded">
            <div className="div-info-transfer bg-[#F3F3F3] w-full h-[20%] flex justify-evenly items-center border-b-1">
              <span>{t("DashboardNormalUser.Home.transfers.amount")}</span>
              <span>{t("DashboardNormalUser.Home.transfers.beneficiary2")}</span>
              <span>{t("DashboardNormalUser.Home.transfers.account")}</span>
              <span>{t("DashboardNormalUser.Home.transfers.date")}</span>
            </div>
            {
              HimTransactions ?
                HimTransactions.map((SingleTrans, i) => {
                  let Name;
                  UsersToFind?.forEach(element => {
                    if (SingleTrans?.SenderDui === element.Dui) {
                      Name = `${element.FirstName.split(' ')[0]} ${element.LastName.split(' ')[0]}`
                    }
                  });
                  let time = new Date(SingleTrans?.createdAt)
                  return (
                    <div className={`${i !== 3 && "div-info-transfer"} bg-[#fff] w-full h-[20%] flex justify-evenly items-center`} key={i}>
                      <span>$ {SingleTrans?.Amount}</span>
                      <span>{Name}</span>
                      <span>{SingleTrans?.AccountN}</span>
                      <span>{SingleTrans && time.toLocaleDateString('en-GB')}</span>
                    </div>
                  )
                })
                :
                <>
                  <div className=" flex justify-center items-center w-full h-[75%]">
                    <span className="text-xl">{t("DashboardNormalUser.Home.transfers2")}</span>
                  </div>
                </>
            }
          </div>
        </div>
      </div>
    </>
  );
}