import { createContext, useContext, useState } from "react"
import { getInfo } from "../api/Queries";

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

  const Query = async () => {
    try {
      const Res = await getInfo()
      setInfo(Res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const QueryCreateSavingsAccount = async () => {
    try {
      return await getInfo();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <dashContext.Provider value={{
      Option, setOption, OptionElement, setOptionElement, SettingsOption, setSettingsOption,
      Query, Info, setInfo, QueryCreateSavingsAccount
    }}>
      {children}
    </dashContext.Provider>
  )
}

export const DatabaseQuery = ({}) => {

}