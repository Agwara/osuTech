import React, { useState } from "react"

import CourseForm from "../../components/CourseForm/CourseForm"
import SelectedCourse from "../../components/SelectedCourse/SelectedForm"
import Information from "../../components/Information/Information"
import styles from "./Registration.module.css"

const Registration = (props) => {
  const [registrationPage, setRegistrationPage] = useState(props.match.url.split("/")[2])  

  return (
    <div className={styles.container}>
      <Information />

      {
        registrationPage === "select-course" ? <SelectedCourse/> : <CourseForm/>
      }
      
    </div>
  )
}

export default Registration