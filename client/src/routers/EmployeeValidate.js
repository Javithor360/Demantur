import { Navigate } from "react-router-dom"

export const EmployeeValidate = ({ children }) => {

  if (!localStorage.getItem('employeeToken')) {
    return <Navigate to='/index' replace />
  }

  return children
}
