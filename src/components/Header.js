import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
const Header = () => {
  return (
    <div style={{background:'white'}}>
      {" "}
      <header className="dash__header flex justify__between align__center width80">
        <div class="search-box">
          <input
            class="search-input"
            type="text"
            placeholder="Search something.."
          />
          <button class="search-btn">
            <BiSearchAlt />
          </button>
        </div>
        <ul className="flex gap__20px">
          <li className="gray__typography500 fs16">You have 12 new alerts</li>
          <li>
            <IoMdNotifications className="fs20" />
          </li>
          <li>
            <RxAvatar className="fs20" />
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
