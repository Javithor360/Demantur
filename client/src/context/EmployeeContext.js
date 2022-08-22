import { createContext, useContext, useState } from "react";
import { getCardRequest } from "../api/Queries";

const employeeContext = createContext();

export const useEmpConx = () => {
  const Context = useContext(employeeContext);
  return Context;
}

export const EmployeeProvider = ({ children }) => {
  const [Test, setTest] = useState(null);

  const PrivateConfig = (Token) => {
    return {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": Token,
      },
    };
  };

  const getCardReq = async (Token) => {
    try {
      return await getCardRequest(PrivateConfig(Token))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <employeeContext.Provider value={{
      getCardReq
    }}>
      {children}
    </employeeContext.Provider>
  )
}