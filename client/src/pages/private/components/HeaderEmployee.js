import { useDash } from "../../../context/DashboardContext";
import './DashboardEmployeeElements/assets/scss/Header_Employee.scss'
import { useEmpConx } from '../../../context/EmployeeContext';
import { useState, useEffect } from "react";

export const Header = () => {
  const HeaderImages = require.context('./assets/img/', true);
  const { OptionElement, setSettingsOption } = useDash();

  const { Info } = useEmpConx();

  const Capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  }
  const [NameToHeader, setNameToHeader] = useState('')

  useEffect(() => {
    if (Object.keys(Info).length !== 0) {
      let Name = Info.FirstNames.split(' ');
      let LastName = Info.LastNames.split(' ');
      LastName = LastName[0];
      setNameToHeader(`${Capitalize(Name[0])} ${LastName[0].toUpperCase()}.`);
    }
  }, [Info])

  return (
    <div className="dashboard-header flex justify-between flex-row h-12 w-100">
      <div className="flex flex-column items-start justify-center w-1/5 text-white ml-5">
        <span className="text-xl text-[#323643]">{OptionElement}</span>
        <hr className="w-28 m-0 opacity-100 bg-[#323643] mt-1 text-xl" />
      </div>
      <div className="emp-header-icons-grid w-4/5 h-100 justify-end items-center">
        
        <div className="ml-2 user-info flex justify-center items-center">
          <span className="text-[#323643] mr-3 my-0 text-[1.2rem]">{NameToHeader}</span>
          <div className="profile-img">
            <img src={HeaderImages('./profile-default.jpg')} alt="" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
