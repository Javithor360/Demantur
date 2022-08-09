import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useDash } from "../context/DashboardContext";


export const FirstLogVal = ({ children }) => {
  const { GeneralInfoQuery, Info } = useDash();

  useEffect(() => {
    GeneralInfoQuery(localStorage.getItem('authToken'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (Info.AccountRuning === false) {
    return <Navigate to='/normal-user/starting' replace />
  }

  return children
}
