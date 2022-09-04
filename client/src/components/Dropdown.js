import './assets/scss/dropdown.scss'
import { IoMdArrowDropdown as ArrowDown } from 'react-icons/io'
import { useState } from 'react'

//translate
import { useTranslation } from "react-i18next";

export const Dropdown = ({ setElement, elements, Elemento }) => {
  const {t}=useTranslation();
  const [IsSelect, setIsSelect] = useState(false);

  return (
    <div className='dropdown'>
      <div className="dropdown-button" onClick={e => setIsSelect(!IsSelect)}>{Elemento === ''? <span>{t("DashboardNormalUser.Dropdown.tittle")}</span>  : Elemento} <ArrowDown /></div>
      {IsSelect && (
        <div className="dropdown-box-content">
          {elements.map((element) => {
            return <div className="dropdown-box-item" onClick={e => {
              setElement(element)
              setIsSelect(false)
            }} key={element}>
              {element}
            </div>
          })}
        </div>
      )}
    </div>
  )
}
