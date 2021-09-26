import React from "react"
import {useHistory} from "react-router-dom"

import crossIcon from "../../assets/sidebarIcons/cross-mark.svg"
import DashboardIcon from "../../assets/sidebarIcons/dashboard"
import ProfileIcon from "../../assets/sidebarIcons/profile"
import ResultIcon from "../../assets/sidebarIcons/result"
import Registration from "../../assets/sidebarIcons/registration"
import PrintOutIcon from "../../assets/sidebarIcons/print"
import GpaIcon from "../../assets/sidebarIcons/gpa"
import DocumentIcon from "../../assets/sidebarIcons/document"
import sidebarStyles from "./SideBar.module.css"

import helpIcon from "../../assets/sidebarIcons/help.svg"
import logoutIcon from "../../assets/sidebarIcons/logout.svg"

// Remember to add the "help" and "logout" btns here

const SideBar = (props) => {
  const history = useHistory()

  const handleToggle = () => {
    props.setOpenSideBar(!props.openSideBar)
  }

  const handleUrlChange =  (url) =>{
    props.setPageUrl(url)
    history.push(`/${url}`)
    props.setOpenSideBar(false)
  }

  const startLogout = () => {
    history.push("/login")
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
        <li 
          className={props.pageUrl === "" ? sidebarStyles.active : sidebarStyles.inactive}
          onClick={() => handleUrlChange("")}
        >
          {
            props.pageUrl === "" ? <DashboardIcon color={"#DF8A09"}/> : <DashboardIcon color={"white"} />
          }
          <p>Dashboard</p>
        </li>

        <li 
          onClick={() => handleUrlChange("profile")}
          className={props.pageUrl === "profile" ? sidebarStyles.active : sidebarStyles.inactive}
        >
          {
            props.pageUrl === "profile" ? <ProfileIcon color={"#DF8A09"}/> : <ProfileIcon color={"white"} />
          }
          <p>Profile</p>
        </li>

        <li 
          onClick={() => handleUrlChange("result")}
          className={props.pageUrl === "result" ? sidebarStyles.active : sidebarStyles.inactive}
        >
          {
            props.pageUrl === "result" ? <ResultIcon color={"#DF8A09"}/> : <ResultIcon color={"white"} />
          }
          <p>Result</p>
        </li>

        <li 
          onClick={() => handleUrlChange("registration")}
          className={props.pageUrl === "registration" ? sidebarStyles.active : sidebarStyles.inactive}
        >
          {
            props.pageUrl === "registration" ? <Registration color={"#DF8A09"}/> : <Registration color={"white"} />
          }
          <p>Course Registration</p>
        </li>

        <li 
          onClick={() => handleUrlChange("print")}
          className={props.pageUrl === "print" ? sidebarStyles.active : sidebarStyles.inactive}
        >
          {
            props.pageUrl === "print" ? <PrintOutIcon color={"#DF8A09"}/> : <PrintOutIcon color={"white"} />
          }
          <p>Print Out</p>
        </li>

        <li 
          onClick={() => handleUrlChange("gpa")}
          className={props.pageUrl === "gpa" ? sidebarStyles.active : sidebarStyles.inactive}
        >
          {
            props.pageUrl === "gpa" ? <GpaIcon color={"#DF8A09"}/> : <GpaIcon color={"white"} />
          }
          <p>Gpa</p>
        </li>

        <li 
          onClick={() => handleUrlChange("document")}
          className={props.pageUrl === "document" ? sidebarStyles.active : sidebarStyles.inactive}
        >
          {
            props.pageUrl === "document" ? <DocumentIcon color={"#DF8A09"}/> : <DocumentIcon color={"white"} />
          }
          <p>Document</p>
        </li>
      </ul>

      <div className={sidebarStyles.containerThree}>
        <div className={sidebarStyles.helpContainer}>
          <img
            alt=""
            src={helpIcon} 
            className={sidebarStyles.help}
            height="25"
            width="25"
          />
          <p>Help</p>
        </div>

        <div onClick={startLogout} className={sidebarStyles.logoutContainer}>
          <img
            alt=""
            src={logoutIcon} 
            className={sidebarStyles.help}
            height="25"
            width="25"
          />
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar;