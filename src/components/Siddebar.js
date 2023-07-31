import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <AiFillHome />,
    },
    {
      path: "/dashBoard",
      name: "DashBoard",
      icon: <BiSolidDashboard />,
    },
  ];
  // 
    const navigate = useNavigate();
  const { logOut } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {}
  };
  return (
    <div className="container">
      <div
        style={{
          width: isOpen ? "200px" : "50px",
          zIndex: "999",

          justifyContent: "space-between",
        }}
        className="sidebar flex__column"
      >
        <div>
          {" "}
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Logo
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>

        <div className="flex cursor__pointer" onClick={handleLogout} style={{paddingBottom:'2rem'}}>
          <div className="icon">
            <AiOutlineLogout className="logout "  />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none", marginLeft: "12px" }}
            className="link_text"
          >
            LogOut
          </div>
        </div>
      </div>
      <main style={{ marginLeft: "50px" }} onClick={() => setIsOpen(false)}>
        <div className=" mb20">{children}</div>
      </main>
    </div>
  );
};

export default Sidebar;
