import { Navigate } from "react-router-dom"


export const OutAuthValidate = ({ children }) => {
  if (localStorage.getItem('authToken')) {
    return <Navigate to='/dashboard' replace />
  }

  return children
}
