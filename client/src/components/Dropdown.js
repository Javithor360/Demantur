import './assets/scss/dropdown.scss'
import { IoMdArrowDropdown as ArrowDown } from 'react-icons/io'
import { useState } from 'react'

export const Dropdown = ({ setSelectDrop, elements }) => {

  const [IsSelect, setIsSelect] = useState(false);

  return (
    <div className='dropdown'>
      <div className="dropdown-button" onClick={e => setIsSelect(!IsSelect)}>Seleccionar <ArrowDown /></div>
      {IsSelect &&
        <div className="dropdown-box-content">
          {elements.map(element => {
            <div className="dropdown-box-item" onClick={e => { setSelectDrop(element) }}>
              {element}
            </div>
          })}
        </div>
      }
    </div>
  )
}
