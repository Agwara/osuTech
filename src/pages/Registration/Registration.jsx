import React, { useState } from "react"
import { useHistory } from "react-router"

import RightArrowIcon from "../../assets/sidebarIcons/rightArrow"

import CourseForm from "../../components/Registration/CourseForm/CourseForm"
import SelectedCourse from "../../components/Registration/SelectedCourse/SelectedForm"
import Information from "../../components/Information/Information"
import styles from "./Registration.module.css"
import rightArrowIcon from "../../assets/sidebarIcons/rightArrow"

const Registration = (props) => {
  const [registrationPage, setRegistrationPage] = useState(props.match.url.split("/")[2])  

  const history = useHistory()

  const goBackFunc = () => {
    history.push("/registration/select-course")
  }

  return (
    <div className={styles.container}>
      <Information />

      {
        !(registrationPage === "select-course") ? 
          <div className={styles.goBack} onClick={goBackFunc}>
            <div className={styles.arrowContainer}>
              <RightArrowIcon color="#250444" />
            </div>
            <p className={styles.goBackText}>Back</p>
          </div>
          : <div></div>
      }

      {
        registrationPage === "select-course" ? <SelectedCourse/> : <CourseForm/>
      }
      
    </div>
  )
}

export default Registration