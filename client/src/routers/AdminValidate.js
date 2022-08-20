import { Navigate } from "react-router-dom"

export const AdminValidate = ({ children }) => {

  if (!localStorage.getItem('secretToken')) {
    return <Navigate to='/index' replace />
  }

  return children
}
