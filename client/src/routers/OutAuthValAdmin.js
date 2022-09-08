import { Navigate } from "react-router-dom"


export const OutAuthValAdmin = ({ children }) => {
  if (localStorage.getItem('secretToken')) {
    return <Navigate to='/admin/home' replace />
  }

  return children
}
