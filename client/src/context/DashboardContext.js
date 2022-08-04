import { createContext, useContext, useState } from "react"
import { creatElements, getInfo, getContactsQuery, getUsersToFRQuery } from "../api/Queries";

const dashContext = createContext();

export const useDash = () => {
  const Context = useContext(dashContext);
  return Context
}

export const DashProvider = ({ children }) => {

  const [Option, setOption] = useState(1);
  const [OptionElement, setOptionElement] = useState('Home Page');
  const [SettingsOption, setSettingsOption] = useState(false);

  const [Info, setInfo] = useState({});
  const [GlobalInfo, setGlobalInfo] = useState({});

  const PrivateConfig = (Token) => {
    return {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": Token,
      },
    }
  };

  const GeneralInfoQuery = async (Token) => {
    try {
      const Res = await getInfo(PrivateConfig(Token))
      setInfo(Res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const CreateElements = async (Token) => {
    try {
      const Res = await creatElements(PrivateConfig(Token));
      // console.log(Res);
    } catch (error) {
      console.log(error);
    }
  }

  const getContacts = async (Token) => {
    try {
      const res = await getContactsQuery(PrivateConfig(Token));
      setGlobalInfo(res.data.data)
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
  }

  return (
    <dashContext.Provider value={{
      Option, setOption, OptionElement, setOptionElement, SettingsOption, setSettingsOption,
      GeneralInfoQuery, Info, CreateElements, getContacts, GlobalInfo, getUsersToFriendReq
    }}>
      {children}
    </dashContext.Provider>
  )
}