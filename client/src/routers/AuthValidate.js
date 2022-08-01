import { Navigate } from "react-router-dom"

export const AuthValidate = ({ children }) => {

  if (!localStorage.getItem('authToken')) {
    return <Navigate to='/no-hay-token' replace />
  }

  return children
}
