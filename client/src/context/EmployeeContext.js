import { createContext, useContext, useState } from "react";
import { getCardRequest, getEmployeeData, getLoanRequests, AcceptCardReqQuery, DeclineCardReqQuery, declineLoanRequestQuery, AcceptLoanReqQuery, getWidgets, SimulateCardQuery } from "../api/Queries";

const employeeContext = createContext();

export const useEmpConx = () => {
  const Context = useContext(employeeContext);
  return Context;
}

export const EmployeeProvider = ({ children }) => {
  // const [Test, setTest] = useState(null);
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

  const getEmployeeWidgets = async (Token) => {
    try {
      return await getWidgets(PrivateConfig(Token))
    } catch (error) {
      console.log(error)
    }
  }

  const getCardReq = async (Token) => {
    try {
      return await getCardRequest(PrivateConfig(Token))
    } catch (error) {
      console.log(error);
    }
  }

  const getLoanReq = async (Token) => {
    try {
      return await getLoanRequests(PrivateConfig(Token))
    } catch (error) {
      console.log(error)
    }
  }

  const declineLoan = async (Token, Dui) => {
    try {
      return await declineLoanRequestQuery(PrivateConfig(Token), Dui)
    } catch (error) {
      console.log(error)
    }
  }

  const AcceptCardReq = async (Token, Dui) => {
    try {
      return await AcceptCardReqQuery(PrivateConfig(Token), Dui)
    } catch (error) {
      console.log(error)
    }
  }

  const DeclineCardReq = async (Token, Dui) => {
    try {
      return await DeclineCardReqQuery(PrivateConfig(Token), Dui)
    } catch (error) {
      console.log(error)
    }
  }

  const AcceptLoanReq = async (Token, Dui) => {
    try {
      return await AcceptLoanReqQuery(PrivateConfig(Token), Dui)
    } catch (error) {
      console.log(error)
    }
  }

  const SimulateCard = async (Token, CardNumber, Gasto) => {
    try {
      return await SimulateCardQuery(PrivateConfig(Token), CardNumber, Gasto)
    } catch (error) {
      return error
    }
  }

  return (
    <employeeContext.Provider value={{
      getCardReq, EmployeeInfoQuery, getLoanReq, Info, AcceptCardReq, DeclineCardReq, declineLoan, AcceptLoanReq, getEmployeeWidgets, SimulateCard
    }}>
      {children}
    </employeeContext.Provider>
  )
}