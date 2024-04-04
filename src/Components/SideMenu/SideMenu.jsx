// Sidebar.js
import React from "react";
import "./SideMenu.css"; // Import CSS for styling
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import home from "../../assets/images/home.svg";
import settings from "../../assets/images/settings.svg";
import notification from "../../assets/images/notification.svg";
import support from "../../assets/images/support.svg";
import { useLocation } from "react-router-dom";
import avatar from "../../assets/images/avatar.svg";
import more from "../../assets/images/more.svg";
const SideMenu = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="sidebar-main">
      <div className="p-5">
        <div className="p-2.5">
          <img src={logo} alt="Logo" />
        </div>
        <div className="side-menu mt-5 mb-5">
          <ul>
            <li className="mb-1">
              <Link
                style={{
                  color: pathName === "/home" ? "#C7EA46" : "",
                }}
                className="flex items-center"
                to="/home"
              >
                <img className="mr-2.5" src={home} alt="home-icon" />
                <span>Home</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                style={{ color: pathName === "/organization" ? "#C7EA46" : "" }}
                to="/organization"
                className="flex items-center"
              >
                <img className="mr-2.5" src={home} alt="home-icon" />
                <span>Organization</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                style={{ color: pathName === "/assets" ? "#C7EA46" : "" }}
                to="/assets"
                className="flex items-center"
              >
                <img className="mr-2.5" src={home} alt="home-icon" />
                <span>Assets</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="side-footer mt-5">
          <ul>
            <li className="flex items-center mt-2">
              <img className="mr-2.5" src={notification} alt="home-icon" />
              Notification
            </li>
            <li className="flex items-center mt-2">
              {" "}
              <img className="mr-2.5" src={support} alt="home-icon" />
              Support
            </li>
            <li className="flex items-center mt-2">
              {" "}
              <img className="mr-2.5" src={settings} alt="home-icon" />
              Settings
            </li>
          </ul>
        </div>
        <div className="side-logged-user">
          <div className="side-user p-3 flex items-center justify-between">
            <div className="flex items-center">
              {" "}
              <img src={avatar} className="mr-2" /> <span>Carbon Cell</span>
            </div>
            <img src={more} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
