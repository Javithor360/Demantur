import { useDash } from "../../../context/DashboardContext";
import { Link } from 'react-router-dom';
//scss
import './assets/scss/Header_Main.scss'
//icons
import { FaCog, FaBell } from 'react-icons/fa';

export const Header = () => {
  const HeaderImages = require.context('./assets/img/', true);
  const { OptionElement } = useDash();

  return (
    <div className="dashboard-header flex justify-between flex-row h-12 w-100">
      <div className="flex flex-column items-start justify-center w-1/5 text-white ml-5">
        <span className="text-lg">{OptionElement}</span>
        <hr className="w-28 m-0 opacity-100 bg-white mt-1 text-xl" />
      </div>
      <div className="header-icons-grid w-4/5 h-100 justify-end items-center">
        <div className="mx-2 text-2xl">
          <Link to="/" className="header-icon hi-hover-1 flex items-center justify-center">
            <FaBell />
          </Link>
        </div>
        <div className="separate h-100 flex items-center justify-center">
          <hr />
        </div>
        <div className="mx-2 text-2xl">
          <Link to="/" className="header-icon hi-hover-2 text-2xl flex items-center justify-center">
            <FaCog />
          </Link>
        </div>
        <div className="separate h-100 items-center flex justify-center">
          <hr />
        </div>
        <div className="ml-2 user-info flex justify-center items-center">
          <span className="text-white mr-3 my-0">Daniel V.</span>
          <div className="profile-img">
            <img src={HeaderImages('./profile-default.jpg')} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
