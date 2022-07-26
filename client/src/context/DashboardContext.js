import { createContext, useContext, useState } from "react"

const dashContext = createContext();

export const useDash = () => {
  const Context = useContext(dashContext);
  return Context
}

export const DashProvider = ({ children }) => {

  const [Option, setOption] = useState(1);
  const [OptionElement, setOptionElement] = useState('Home Page');


  return (
    <dashContext.Provider value={{
      Option, setOption, OptionElement, setOptionElement
    }}>
      {children}
    </dashContext.Provider>
  )
}