import { useDash } from "../../../context/DashboardContext";
//scss
import './DashboardEmployeeElements/assets/scss/Header_Employee.scss'
//icons
import { FaCog, FaBell } from 'react-icons/fa';

export const Header = () => {
  const HeaderImages = require.context('./assets/img/', true);
  const { OptionElement, setSettingsOption } = useDash();

  return (
    <div className="dashboard-header flex justify-between flex-row h-12 w-100">
      <div className="flex flex-column items-start justify-center w-1/5 text-white ml-5">
        <span className="text-xl text-[#323643]">{OptionElement}</span>
        <hr className="w-28 m-0 opacity-100 bg-[#323643] mt-1 text-xl" />
      </div>
      <div className="emp-header-icons-grid w-4/5 h-100 justify-end items-center">
        
        <div className="ml-2 user-info flex justify-center items-center">
          {/* <span className="text-white mr-3 my-0">{NameToHeader}</span> */}
          <span className="text-[#323643] mr-3 my-0">Steve S.</span>
          <div className="profile-img">
            {/* <img src={HeaderImages('./profile-default.jpg')} alt="" className="h-full w-full" /> */}
            <img src={HeaderImages('./profile-default.jpg')} alt="" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
