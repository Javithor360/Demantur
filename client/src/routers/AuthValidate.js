import { Navigate } from "react-router-dom"

export const AuthValidate = ({ children }) => {

  if (!localStorage.getItem('authToken')) {
    return <Navigate to='/auth/' replace />
  }

  return children
}
