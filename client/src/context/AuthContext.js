import { createContext, useContext } from "react"

// creando el context
const authContext = createContext();

// custom hook del context
export const useAuth = () => {
  const Context = useContext(authContext);
  return Context
}

// funciones del context
export const AuthProvider = ({ children }) => {
  const configPublic = {
    header: {
      "Content-Type": "application/json",
    },
  }


  return (
    <authContext.Provider value={{ configPublic }}>
      {children}
    </authContext.Provider>
  )
}