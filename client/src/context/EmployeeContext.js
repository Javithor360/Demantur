import { createContext, useContext, useState } from "react";
import { getCardRequest, getEmployeeData } from "../api/Queries";

const employeeContext = createContext();

export const useEmpConx = () => {
  const Context = useContext(employeeContext);
  return Context;
}

export const EmployeeProvider = ({ children }) => {
  const [Test, setTest] = useState(null);
  const [Info, setInfo] = useState({});

  const PrivateConfig = (Token) => {
    return {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": Token,
      },
    };
  };

  const EmployeeInfoQuery = async (Token) => {
    try {
      const Res = await getEmployeeData(PrivateConfig(Token));
      setInfo(Res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getCardReq = async (Token) => {
    try {
      return await getCardRequest(PrivateConfig(Token))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <employeeContext.Provider value={{
      getCardReq, EmployeeInfoQuery, Info
    }}>
      {children}
    </employeeContext.Provider>
  )
}