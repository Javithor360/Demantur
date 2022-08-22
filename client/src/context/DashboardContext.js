import { createContext, useContext, useEffect, useState } from "react";
import { creatElements, getInfo, getGlobalInfoQuery, getUsersToFRQuery, addFriendReq, cancelFrReq, AcceptFriendReq, DeclineFriendReq, DeleteFriendRequest, DoATransferQuery } from "../api/Queries";

const dashContext = createContext();

export const useDash = () => {
  const Context = useContext(dashContext);
  return Context;
};

export const DashProvider = ({ children }) => {
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

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    if (GlobalInfo !== null) {
      setContacts(GlobalInfo.Contacts);
      setPedingFriendReq(GlobalInfo.PendingFriendReq);
      setFriendRequest(GlobalInfo.FriendRequests);
    }
  }, [GlobalInfo]);

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

  const DematurClassicForm = async () => {
    try {
      return await getInfo();
    } catch (error) {
      console.log(error);
    }
  };

  const CreateElements = async (Token) => {
    try {
      await creatElements(PrivateConfig(Token));
      // console.log(Res);
    } catch (error) {
      console.log(error);
    }
  };

  const getGlobalInfo = async (Token) => {
    try {
      const res = await getGlobalInfoQuery(PrivateConfig(Token));
      setGlobalInfo(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <dashContext.Provider value={{
      Option, setOption, OptionElement, setOptionElement, SettingsOption, setSettingsOption,
      GeneralInfoQuery, Info, CreateElements, getGlobalInfo, GlobalInfo, getUsersToFriendReq, addFriendRequest,
      Contacts, PedingFriendReq, FriendRequest, setPedingFriendReq, cancelFriendReq, ReloadStateTwo, setReloadStateTwo,
      QueryCreateSavingsAccount, DeclineFriend, ReloadState, setReloadState, AcceptFriend, DematurClassicForm, setContacts,
      setFriendRequest, DeleteFriendReq, CurrentChat, setCurrentChat, TransactionsArr, setTransactionsArr,
      MyTransfers, setMyTransfers, HimTranfers, setHimTranfers, DoATransfer, setGlobalInfo, socket, setSocket
    }}>
      {children}
    </dashContext.Provider>
  )
}
