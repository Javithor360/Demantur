import { Navigate } from "react-router-dom"


export const OutAuthValEmployee = ({ children }) => {
  if (localStorage.getItem('employeeToken')) {
    return <Navigate to='/employee/home' replace />
  }

  return children
}
