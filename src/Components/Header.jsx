import React from "react";
import { HiSearch } from "react-icons/hi";
import "../style/header.css";
const Header = () => {
  return (
    <header className="header-content">
      <div className="logo-sec">
        <a href="index.html" className="brand-logo">
          <img className="logo-abbr" src="../images/logo-white.png" alt />
        </a>
      </div>
      <ul className="navbar-nav header-right">
        <li className="input-holder">
          <input type="text" class="search-input" placeholder="Search" />
          <button class="search-icon">
            <span className="search-button">
              <HiSearch />
            </span>
          </button>
        </li>
        <li className="nav-item dropdown notification_dropdown">
          <a className="nav-link bell dz-fullscreen link-name" href="#">
            <svg
              id="icon-full"
              viewBox="0 0 24 24"
              width={20}
              height={20}
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <path
                d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                style={{ strokeDasharray: "37, 57", strokeDashoffset: 0 }}
              />
            </svg>
            {/* <svg
              id="icon-minimize"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-minimize"
            >
              <path
                d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
                style={{ strokeDasharray: "37, 57", strokeDashoffset: 0 }}
              />
            </svg> */}
          </a>
        </li>

        <li className="nav-item dropdown header-profile">
          <a
            className="nav-link link-name"
            href="#"
            role="button"
            data-toggle="dropdown"
          >
            <img src="images/profile/pic1.jpg" width={20} alt />
            <div className="header-info">
              <span>
                Hey, <strong>Joshua</strong>
              </span>
              <small>Business Profile</small>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            {/* <a href="#" className="dropdown-item ai-icon">
              <svg
                id="icon-user1"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                  style={{ strokeDasharray: "25, 45", strokeDashoffset: 0 }}
                />
                <path
                  d="M8,7A4,4 0,1,1 16,7A4,4 0,1,1 8,7"
                  style={{ strokeDasharray: "26, 46", strokeDashoffset: 0 }}
                />
              </svg>
              <span className="ml-2">Profile </span>
            </a> */}
            {/* <a href="#" className="dropdown-item ai-icon">
              <svg
                id="icon-logout"
                xmlns="http://www.w3.org/2000/svg"
                className="text-danger"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                  style={{ strokeDasharray: "29, 49", strokeDashoffset: 0 }}
                />
                <path
                  d="M16,17L21,12L16,7"
                  style={{ strokeDasharray: "15, 35", strokeDashoffset: 0 }}
                />
                <path
                  d="M21,12L9,12"
                  style={{ strokeDasharray: "12, 32", strokeDashoffset: 0 }}
                />
              </svg>
              <span className="ml-2">Logout </span>
            </a> */}
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
