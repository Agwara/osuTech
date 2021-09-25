import React from "react";

import sidebarStyles from "./SideBar.module.css"

// Remember to add the "help" and "logout" btns here

const SideBar = (props) => {
  const handleToggle = () => {
    props.setOpenSideBar(!props.openSideBar)
  }
  return (
    <div className={sidebarStyles.container}>
      <div onClick={handleToggle} className={sidebarStyles.test}></div>
    </div>
  )
}

export default SideBar;