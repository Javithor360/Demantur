import { FiX } from 'react-icons/fi'
import { useDash } from '../../../context/DashboardContext'

export const Settings = ({ hidden }) => {
  const { setSettingsOption } = useDash()

  return (
    <div className={`absolute top-0 right-0 settings-div h-full ${hidden !== undefined ? hidden : ''} div-settings-modal`}  >
      <div className="w-[100%] h-[100%] relative">
        <div className="X-Settings absolute right-0">
          <FiX className="" onClick={() => { setSettingsOption(false) }} />
        </div>
        <div className="MainDiv-settings">
          <span className="">Configuraciones</span>
        </div>
      </div>
    </div>
  )
}
