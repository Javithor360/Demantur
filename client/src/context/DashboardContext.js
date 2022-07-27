import { createContext, useContext, useState } from "react"

const dashContext = createContext();

export const useDash = () => {
  const Context = useContext(dashContext);
  return Context
}

export const DashProvider = ({ children }) => {

  const [Option, setOption] = useState(1);
  const [OptionElement, setOptionElement] = useState('Home Page');
  const [SettingsOption, setSettingsOption] = useState(false);


  return (
    <dashContext.Provider value={{
      Option, setOption, OptionElement, setOptionElement, SettingsOption, setSettingsOption
    }}>
      {children}
    </dashContext.Provider>
  )
}