import React, {useState} from "react"
import {useHistory} from "react-router-dom"

import EmailIcon from "../../assets/dashboard/email"
import TimetbleIcon from "../../assets/dashboard/timetable"
import LibraryIcon from "../../assets/dashboard/library"
import SocialMediaicon from "../../assets/dashboard/socialMedia"
import NewsIcon from "../../assets/dashboard/news"
import StudentIcon from "../../assets/dashboard/studentUnion"
import MapIcon from "../../assets/dashboard/map"
import HelpIcon from "../../assets/dashboard/help"
import quickAccessStyles from "./QuickAccess.module.css"

const QuickAccess = (props) => {
  const [hoverItem, setHoverItem] = useState("")

  const history = useHistory()

  const handleHoverChange = (item) => {
    setHoverItem(item)
  }

  const handlePageChange = (url) => {
    props.setStartToggle(false)
    history.push(url)
  }

  return (
    <div className={quickAccessStyles.container}>
      <h3 className={quickAccessStyles.title}>Quick Access</h3>

      <ul className={quickAccessStyles.containerTwo}>
        <li 
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("email")} 
          className={quickAccessStyles.item}
        >
          {hoverItem === "email" ? <EmailIcon color="#DF8A09" /> : <EmailIcon color="#2D0353" />}
          <p className={quickAccessStyles.name}>Email</p>
        </li>
        <li 
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("timetable")} 
          className={quickAccessStyles.item}
        >
          {hoverItem === "timetable" ? <TimetbleIcon color="#DF8A09" /> : <TimetbleIcon color="#2D0353" />}
          <p className={quickAccessStyles.name}>Time Table</p>
        </li>
        <li 
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("library")} 
          className={quickAccessStyles.item}
        >
          {hoverItem === "library" ? <LibraryIcon color="#DF8A09" /> : <LibraryIcon color="#2D0353" />}
          <p className={quickAccessStyles.name}>Library</p>
        </li>
        <li 
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("media")} 
          className={quickAccessStyles.item}
        >
          {hoverItem === "media" ? <SocialMediaicon color="#DF8A09" /> : <SocialMediaicon color="#2D0353" />}
          <p className={quickAccessStyles.name}>Social Media</p>
        </li>
        <li 
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("news")} 
          className={quickAccessStyles.item}
        >
          {hoverItem === "news" ? <NewsIcon color="#DF8A09" /> : <NewsIcon color="#2D0353" />}
          <p className={quickAccessStyles.name}>News</p>
        </li>
        <li 
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("union")} 
          className={quickAccessStyles.item}
        >
          {hoverItem === "union" ? <StudentIcon color="#DF8A09" /> : <StudentIcon color="#2D0353" />}
          <p className={quickAccessStyles.name}>Student Union</p>
        </li>
        <li 
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("map")} 
          className={quickAccessStyles.item}
        >
          {hoverItem === "map" ? <MapIcon color="#DF8A09" /> : <MapIcon color="#2D0353" />}
          <p className={quickAccessStyles.name}>Campus Map</p>
        </li>

        <li 
          onClick={() => handlePageChange("/help")}
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("help")} 
          className={quickAccessStyles.item}
        >
          {hoverItem === "help" ? <HelpIcon color="#DF8A09" /> : <HelpIcon color="#2D0353" />}
          <p className={quickAccessStyles.name}>Help</p>
        </li>
      </ul>
    </div>
  )
}

export default QuickAccess