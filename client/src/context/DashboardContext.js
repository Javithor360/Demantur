/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
// import { format } from "timeago.js";

import {
  creatElements, getInfo, getGlobalInfoQuery, getUsersToFRQuery, addFriendReq, cancelFrReq, AcceptFriendReq, DeclineFriendReq, DeleteFriendRequest, DoATransferQuery, getMyCardReqREQ, getContactsWPReq, getMyLoanReqREQ, getSavingAcctsReq, UpdatePhotoReq, getNametoNavQuery, getEveryAccQuery, getAccHistory, ChangeEmailQuery, EmailCodeVerQuery, getPendingAccounts,
  CancelChangeEm, VerifyOldPassQuery, ChangePassQuery, VerifyCodePassQuery, CancelChangePassQuery, PendingFrQuery, FriendRequestsQuery, UsersToAddQuery, getMyCardQuery, getMyDebitCardQuery, PayCCDebtQuery, CreateDebitCardQuery, getMyLoanReqQuery, PayLoanQuery
} from "../api/Queries";


const dashContext = createContext();

export const useDash = () => {
  const Context = useContext(dashContext);
  return Context;
};

export const DashProvider = ({ children }) => {
  const [NPName, setNPName] = useState(null);

  const [Option, setOption] = useState(1);
  const [OptionElement, setOptionElement] = useState("Home Page");
  const [SettingsOption, setSettingsOption] = useState(false);
  const [TransactionsArr, setTransactionsArr] = useState([]);


  const [Info, setInfo] = useState({});
  const [GlobalInfo, setGlobalInfo] = useState({});
  const [PedingFriendReq, setPedingFriendReq] = useState([]);
  const [Contacts, setContacts] = useState([]);
  const [FriendRequest, setFriendRequest] = useState([]);

  const [ReloadState, setReloadState] = useState(false);
  const [ReloadStateTwo, setReloadStateTwo] = useState(false);
  const [CurrentChat, setCurrentChat] = useState(null);
  const [MyTransfers, setMyTransfers] = useState([]);
  const [HimTranfers, setHimTranfers] = useState([]);
  const [SavingAccounts, setSavingAccounts] = useState([]);
  const [clientBalance, setClientBalance] = useState(0);
  const [ChangeBox2, setChangeBox2] = useState(false);

  const [SimpleLoan, setSimpleLoan] = useState(null);
  const [LoanParametro, setLoanParametro] = useState(null);

  const [DebitCard, setDebitCard] = useState(null);
  const [CardsParametros, setCardsParametros] = useState(null);

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (SavingAccounts.length !== 0) {
      let newBalance = 0;
      SavingAccounts.forEach((element, i) => {
        newBalance = newBalance + parseFloat(element.balance.$numberDecimal)
        SavingAccounts[i].balance = parseFloat(element.balance.$numberDecimal)
      });
      setClientBalance(newBalance.toFixed(2));
    }
  }, [SavingAccounts])


  const PrivateConfig = (Token) => {
    return {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": Token,
      },
    };
  };

  const GeneralInfoQuery = async (Token) => {
    try {
      const Res = await getInfo(PrivateConfig(Token));
      setInfo(Res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const CardsRequestsForm = async (token) => {
    try {
      return await getInfo(PrivateConfig(token));
    } catch (error) {
      console.log(error);
    }
  };
  const LoansRequestsForm = async (token) => {
    try {
      return await getInfo(PrivateConfig(token));
    } catch (error) {
      console.log(error);
    }
  };


  const CreateElements = async (Token) => {
    try {
      await creatElements(PrivateConfig(Token));
    } catch (error) {
      console.log(error);
    }
  };

  const getContacsWP = async (Token) => {
    try {
      const res = await getContactsWPReq(PrivateConfig(Token));
      setContacts(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getGlobalInfo = async (Token) => {
    try {
      const res = await getGlobalInfoQuery(PrivateConfig(Token));
      setGlobalInfo(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GlobalInfoSetReq = async (Token) => {
    try {
      return await getGlobalInfoQuery(PrivateConfig(Token));
    } catch (error) {
      console.log(error);
    }
  }

  const getUsersToFriendReq = async (Token) => {
    try {
      return await getUsersToFRQuery(PrivateConfig(Token));
    } catch (error) {
      console.log(error);
    }
  };

  const addFriendRequest = async (Token, el) => {
    try {
      await addFriendReq(PrivateConfig(Token), el);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelFriendReq = async (Token, el) => {
    try {
      await cancelFrReq(PrivateConfig(Token), el);
      // console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  const AcceptFriend = async (Token, el) => {
    try {
      await AcceptFriendReq(PrivateConfig(Token), el);
    } catch (error) {
      console.log(error);
    }
  };

  const QueryCreateSavingsAccount = async (Token) => {
    try {
      return await getInfo(PrivateConfig(Token))
    } catch (error) {
      console.log(error)
    }
  }

  const DeclineFriend = async (Token, el) => {
    try {
      return await DeclineFriendReq(PrivateConfig(Token), el);
    } catch (error) {
      console.log(error)
    }
  }

  const DeleteFriendReq = async (Token, el) => {
    try {
      // console.log(el);
      return await DeleteFriendRequest(PrivateConfig(Token), el);
    } catch (error) {
      console.log(error)
    }
  }

  const DoATransfer = async (Token, transaction) => {
    try {
      return await DoATransferQuery(PrivateConfig(Token), transaction)
    } catch (error) {
      console.log(error)
    }
  }

  const getMyCardReq = async (Token) => {
    try {
      return await getMyCardReqREQ(PrivateConfig(Token))
    } catch (error) {
      console.log(error)
    }
  }

  const getMyLoanReq = async (Token) => {
    try {
      return await getMyLoanReqREQ(PrivateConfig(Token))
    } catch (error) {
      console.log(error)
    }
  }


  const getSavingAccts = async (Token) => {
    try {
      const res = await getSavingAcctsReq(PrivateConfig(Token))
      setSavingAccounts(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  const UpdatePhoto = async (Token, Form) => {
    try {
      return await UpdatePhotoReq(Token, Form);
    } catch (error) {
      console.log(error)
    }
  }

  const getNametoNav = async (Token) => {
    try {
      return await getNametoNavQuery(PrivateConfig(Token));
    } catch (error) {
      console.log(error);
    }
  }

  const getEveryAcc = async (Token) => {
    try {
      return await getEveryAccQuery(PrivateConfig(Token));
    } catch (error) {
      console.log(error);
    }
  }

  const ChangeEmail = async (Token, Email) => {
    try {
      return await ChangeEmailQuery(PrivateConfig(Token), Email)
    } catch (error) {
      return error;
    }
  }

  const EmailCodeVer = async (Token, Code, Email) => {
    try {
      return await EmailCodeVerQuery(PrivateConfig(Token), Code, Email)
    } catch (error) {
      return error;
    }
  }

  const getAccountsHistory = async (Token, accNum) => {
    try {
      return await getAccHistory(Token, accNum);
    } catch (error) {
      console.log(error);
    }
  }

  const getActivatedAccountRequests = async (Token) => {
    try {
      return await getPendingAccounts(PrivateConfig(Token));
    } catch (error) {
      console.log(error);
    }
  }

  const CancelChangeEmail = async (Token, Code) => {
    try {
      return await CancelChangeEm(PrivateConfig(Token), Code)
    } catch (error) {
      console.log(error)
    }
  }

  const VerifyOldPass = async (Token, OldPass) => {
    try {
      return await VerifyOldPassQuery(PrivateConfig(Token), OldPass);
    } catch (error) {
      return error;
    }
  }

  const ChangePass = async (Token, NewPass) => {
    try {
      return await ChangePassQuery(PrivateConfig(Token), NewPass);
    } catch (error) {
      return error
    }
  }

  const VerifyCodePass = async (Token, Code) => {
    try {
      return await VerifyCodePassQuery(PrivateConfig(Token), Code)
    } catch (error) {
      return error
    }
  }

  const CancelChangePass = async (Token, Code) => {
    try {
      return await CancelChangePassQuery(PrivateConfig(Token), Code)
    } catch (error) {
      return error
    }
  }

  const PendingFr = async (Token) => {
    try {
      const res = await PendingFrQuery(PrivateConfig(Token));
      setPedingFriendReq(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMyFriendReq = async (Token) => {
    try {
      const res = await FriendRequestsQuery(PrivateConfig(Token));
      setFriendRequest(res.data.data);
    } catch (error) {
      console.log(error)
    }
  }

  const getUsersToAdd = async (Token) => {
    try {
      return await UsersToAddQuery(PrivateConfig(Token))
    } catch (error) {
      console.log(error)
    }
  }

  const getMyCard = async (Token) => {
    try {
      return await getMyCardQuery(PrivateConfig(Token))
    } catch (error) {
      console.log(error)
    }
  }

  const getMyDebitCard = async (Token) => {
    try {
      return await getMyDebitCardQuery(PrivateConfig(Token))
    } catch (error) {
      console.log(error)
    }
  }

  const PayCCDebt = async (Token, AccountN, Amount) => {
    try {
      return await PayCCDebtQuery(PrivateConfig(Token), AccountN, Amount)
    } catch (error) {
      return error
    }
  }

  const CreateDebitCard = async (Token, NumberAcc) => {
    try {
      return await CreateDebitCardQuery(PrivateConfig(Token), NumberAcc);
    } catch (error) {
      return error
    }
  }

  const getMyLoan = async (Token) => {
    try {
      return await getMyLoanReqQuery(PrivateConfig(Token))
    } catch (error) {
      return error
    }
  }

  const PayLoan = async (Token, accountNumber) => {
    try {
      return await PayLoanQuery(PrivateConfig(Token), accountNumber)
    } catch (error) {
      return error
    }
  }

  return (
    <dashContext.Provider value={{
      Option, setOption, OptionElement, setOptionElement, SettingsOption, setSettingsOption,
      GeneralInfoQuery, Info, CreateElements, getGlobalInfo, GlobalInfo, getUsersToFriendReq, addFriendRequest,
      Contacts, PedingFriendReq, FriendRequest, setPedingFriendReq, cancelFriendReq, ReloadStateTwo, setReloadStateTwo,
      QueryCreateSavingsAccount, DeclineFriend, ReloadState, setReloadState, AcceptFriend, CardsRequestsForm, LoansRequestsForm, setContacts,
      setFriendRequest, DeleteFriendReq, CurrentChat, setCurrentChat, TransactionsArr, setTransactionsArr,
      MyTransfers, setMyTransfers, HimTranfers, setHimTranfers, DoATransfer, setGlobalInfo, socket, setSocket,
      getMyCardReq, getMyLoanReq, GlobalInfoSetReq, getContacsWP, SavingAccounts, getSavingAccts, UpdatePhoto, clientBalance,
      NPName, setNPName, setSavingAccounts, setClientBalance, getNametoNav, getEveryAcc, ChangeEmail, getAccountsHistory, EmailCodeVer, getActivatedAccountRequests,
      CancelChangeEmail, VerifyOldPass, ChangePass, VerifyCodePass, CancelChangePass, setInfo, PendingFr, getMyFriendReq, getUsersToAdd, getMyCard,
      CardsParametros, setCardsParametros, getMyDebitCard, ChangeBox2, setChangeBox2, PayCCDebt, CreateDebitCard, DebitCard, setDebitCard, getMyLoan, PayLoan
    }}>
      {children}
    </dashContext.Provider>
  )
}
