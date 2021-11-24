import React, {useReducer} from "react"
import {useHistory} from "react-router-dom"

import reducer from "./sideBarReducer"

import crossIcon from "../../assets/sidebarIcons/cross-mark.svg"
import DashboardIcon from "../../assets/sidebarIcons/dashboard"
import ProfileIcon from "../../assets/sidebarIcons/profile"
import ResultIcon from "../../assets/sidebarIcons/result"
import Registration from "../../assets/sidebarIcons/registration"
import PrintOutIcon from "../../assets/sidebarIcons/print"
import GpaIcon from "../../assets/sidebarIcons/gpa"
import DocumentIcon from "../../assets/sidebarIcons/document"
import RightArrow from "../../assets/sidebarIcons/rightArrow"
import sidebarStyles from "./SideBar.module.css"

import helpIcon from "../../assets/sidebarIcons/help.svg"
import logoutIcon from "../../assets/sidebarIcons/logout.svg"

const initialState = {
  openResultDropDown: false,
  openRegDropDown: false,
  openPrintDropDown: false,
  openGpaDropDown: false,
  openDocDropDown: false,
  useMainUrl: true
}

const SideBar = (props) => {
  const [sideBarState, dispatch] = useReducer(reducer, initialState)

  const toggleResultDropDown = () => {
    dispatch({
      type: "OPEN_RESULT_DROP_DOWN",
      payload: !sideBarState.openResultDropDown,
      useMain: !sideBarState.openResultDropDown ? false : true
    })
  }

  const toggleRegDropDown = () => {
    dispatch({
      type: "OPEN_REG_DROP_DOWN",
      payload: !sideBarState.openRegDropDown,
      useMain: !sideBarState.openRegDropDown ? false : true
    })
  }

  const togglePrintDropDown = () => {
    dispatch({
      type: "OPEN_PRINT_DROP_DOWN",
      payload: !sideBarState.openPrintDropDown,
      useMain: !sideBarState.openPrintDropDown ? false : true
    })
  }

  const toggleGpaDropDown = () => {
    dispatch({
      type: "OPEN_GPA_DROP_DOWN",
      payload: !sideBarState.openGpaDropDown,
      useMain: !sideBarState.openGpaDropDown ? false : true
    })
  }

  const toggleDocDropDown = () => {
    dispatch({
      type: "OPEN_DOC_DROP_DOWN",
      payload: !sideBarState.openDocDropDown,
      useMain: !sideBarState.openDocDropDown ? false : true
    })
  }


  const history = useHistory()

  const handleToggle = () => {
    props.setOpenSideBar(!props.openSideBar)
    props.setStartToggle(true)
  }

  const handleUrlChange =  (url) =>{
    history.push(`/${url}`)
    props.setOpenSideBar(false)
    props.setStartToggle(true)
  }

  const startLogout = () => {
    history.push("/login")
  }

  const stopPropagation = (e, url) => {
    e.stopPropagation() 
    if (url) {
      handleUrlChange(url)
    }
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
        <li           className={history.location.pathname === "/" && sideBarState.useMainUrl ? sidebarStyles.active : sidebarStyles.inactive}
          onClick={() => handleUrlChange("")}
        >
          {
            history.location.pathname === "/" && sideBarState.useMainUrl ? <DashboardIcon color={"#DF8A09"}/> : <DashboardIcon color={"white"} />
          }
          <p>Dashboard</p>
        </li>

        <li 
          onClick={() => handleUrlChange("profile")}
          className={history.location.pathname === "/profile" && sideBarState.useMainUrl ? sidebarStyles.active : sidebarStyles.inactive}
        >
          {
            history.location.pathname === "/profile" && sideBarState.useMainUrl ? <ProfileIcon color={"#DF8A09"}/> : <ProfileIcon color={"white"} />
          }
          <p>Profile</p>
        </li>

        <li 
          onClick={toggleResultDropDown}
          className={sidebarStyles.itemContainer}
        >
          <div className={sideBarState.openResultDropDown ? sidebarStyles.active : sidebarStyles.inactive}>
            {
              sideBarState.openResultDropDown ? <ResultIcon color={"#DF8A09"}/> : <ResultIcon color={"white"} />
            }
            <p>Result</p>

            <div className={sidebarStyles.rightArrow}>
              {sideBarState.openResultDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openResultDropDown ? sidebarStyles.test : sidebarStyles.close}>
            <div className={sidebarStyles.testInner}>
              <p 
                onClick={(e) => stopPropagation(e, "result")} 
                className={sidebarStyles.innerLinkText}
              >
                Result
              </p>
              <p 
                onClick={(e) => stopPropagation(e, "outstanding-result")} 
                className={sidebarStyles.innerLinkText}
              >
                Oustanding
              </p>
            </div>
          </div>
        </li>

        <li 
          onClick={toggleRegDropDown}
          className={sidebarStyles.itemContainer}
        >
          <div className={sideBarState.openRegDropDown ? sidebarStyles.active : sidebarStyles.inactive}>
            {
              sideBarState.openRegDropDown ? <Registration color={"#DF8A09"}/> : <Registration color={"white"} />
            }
            <p>Course Registration</p>

            <div className={sidebarStyles.rightArrow}>
              {sideBarState.openRegDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openRegDropDown ? sidebarStyles.test : sidebarStyles.close}>
            <div className={sidebarStyles.testInner}>
              <p onClick={(e) => stopPropagation(e, "registration/select-course")} className={sidebarStyles.innerLinkText}>Select course</p>
              <p onClick={(e) => stopPropagation(e, "registration/course-form")} className={sidebarStyles.innerLinkText}>Course form</p>
            </div>
          </div>
        </li>

        <li 
          onClick={togglePrintDropDown}
          className={sidebarStyles.itemContainer}
        >
          <div className={sideBarState.openPrintDropDown ? sidebarStyles.active : sidebarStyles.inactive}>
            {
              sideBarState.openPrintDropDown ? <PrintOutIcon color={"#DF8A09"}/> : <PrintOutIcon color={"white"} />
            }
            <p>Print Out</p>
            <div className={sidebarStyles.rightArrow}>
              {sideBarState.openPrintDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openPrintDropDown ? sidebarStyles.test : sidebarStyles.close}>
            <div className={sidebarStyles.testInner}>
              <p onClick={(e) => stopPropagation(e, "print-out/current-semester")} className={sidebarStyles.innerLinkText}>Current semester</p>
              <p onClick={(e) => stopPropagation(e, "print-out/previous-semester")} className={sidebarStyles.innerLinkText}>Previous semester</p>
            </div>
          </div>
        </li>

        <li 
          onClick={toggleGpaDropDown}
          className={sidebarStyles.itemContainer}
        >
          <div className={sideBarState.openGpaDropDown ? sidebarStyles.active : sidebarStyles.inactive}>
            {
              sideBarState.openGpaDropDown ? <GpaIcon color={"#DF8A09"}/> : <GpaIcon color={"white"} />
            }
            <p>Gpa Tool</p>

            <div className={sidebarStyles.rightArrow}>
              {sideBarState.openGpaDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openGpaDropDown ? sidebarStyles.testGpa : sidebarStyles.close}>
            <div className={sidebarStyles.testInner}>
              <p onClick={(e) => stopPropagation(e)} className={sidebarStyles.innerLinkText}>GPA calculator</p>
              <p onClick={(e) => stopPropagation(e)} className={sidebarStyles.innerLinkText}>GPA goal setter</p>
              <p onClick={(e) => stopPropagation(e)} className={sidebarStyles.innerLinkText}>GPA forecaster</p>
            </div>
          </div>
        </li>

        <li 
          onClick={toggleDocDropDown}
          className={sidebarStyles.itemContainer}
        >
          <div className={sideBarState.openDocDropDown ? sidebarStyles.active : sidebarStyles.inactive}>
            {
              sideBarState.openDocDropDown ? <DocumentIcon color={"#DF8A09"}/> : <DocumentIcon color={"white"} />
            }
            <p>Document</p>
            <div className={sidebarStyles.rightArrow}>
            {sideBarState.openDocDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
          </div>
          </div>

          <div className={sideBarState.openDocDropDown ? sidebarStyles.test : sidebarStyles.close}>
            <div className={sidebarStyles.testInner}>
              <p onClick={(e) => stopPropagation(e, "document/download")} className={sidebarStyles.innerLinkText}>Course document</p>
              <p onClick={(e) => stopPropagation(e, "document/upload")} className={sidebarStyles.innerLinkText}>Upload</p>
            </div>
          </div>
        </li>
      </ul>

      <div className={sidebarStyles.containerThree}>
        <div className={sidebarStyles.helpContainer} onClick={() => handleUrlChange("help")}>
          <img
            alt=""
            src={helpIcon} 
            className={sidebarStyles.help}
            height="20"
            width="20"
          />
          <p>Help</p>
        </div>

        <div onClick={startLogout} className={sidebarStyles.logoutContainer}>
          <img
            alt=""
            src={logoutIcon} 
            className={sidebarStyles.help}
            height="20"
            width="20"
          />
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar;