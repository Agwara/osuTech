import React from "react";

import crossIcon from "../../assets/sidebarIcons/cross-mark.svg"
import DashboardIcon from "../../assets/sidebarIcons/dashboard"
import ProfileIcon from "../../assets/sidebarIcons/profile"
import ResultIcon from "../../assets/sidebarIcons/result"
import Registration from "../../assets/sidebarIcons/registration"
import PrintOutIcon from "../../assets/sidebarIcons/print"
import GpaIcon from "../../assets/sidebarIcons/gpa"
import DocumentIcon from "../../assets/sidebarIcons/document"
import sidebarStyles from "./SideBar.module.css"

// Remember to add the "help" and "logout" btns here

const SideBar = (props) => {
  const handleToggle = () => {
    props.setOpenSideBar(!props.openSideBar)
  }
  return (
    <div className={sidebarStyles.container}>
      <div className={sidebarStyles.containerTwo}>
        <h3 className={sidebarStyles.containerTwoText}>UNIGIG</h3>
        <img
          alt=""
          src={crossIcon} 
          onClick={handleToggle} 
          className={sidebarStyles.cross}
        />
      </div>

      <ul className={sidebarStyles.nav}>
        <li><DashboardIcon color={"white"} /></li>
        <li><ProfileIcon color={"white"} /></li>
        <li><ResultIcon color={"white"} /></li>
        <li><Registration color={"white"} /></li>
        <li><PrintOutIcon color={"white"} /></li>
        <li><GpaIcon color={"white"} /></li>
        <li><DocumentIcon color={"white"} /></li>
      </ul>
    </div>
  )
}

export default SideBar;