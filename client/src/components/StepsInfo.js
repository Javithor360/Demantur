import { useAuth } from '../context/AuthContext'
import { useTranslation } from "react-i18next";

export const StepsInfo = () => {
  const { pageTitle, page, pageInfo } = useAuth()

  return (
    <>
      <div className='step-info'>
        <h3>{pageTitle[page - 1]}</h3>
        <p>{pageInfo[page - 1]}</p>
      </div>
    </>
  )
}
