import React, { useState } from "react"

import CourseForm from "../../components/CourseForm/CourseForm"
import SelectedCourse from "../../components/SelectedCourse/SelectedForm"
import Information from "../../components/Information/Information"
import Modal from "./Modal"
import styles from "./Registration.module.css"

const Registration = (props) => {
  const [selectedCourses, setSelectedCourses] = useState([])
  const [registrationPage, setRegistrationPage] = useState(props.match.url.split("/")[2])  
  const [showModal, setShowModal] = useState(false)


  return (
    <div className={styles.container}>
      <Information />

      {
        registrationPage === "select-course" ? 
          <SelectedCourse 
            selectedCourses={selectedCourses}
            setShowModal={setShowModal} 
            setSelectedCourses={setSelectedCourses}
          /> 
          : <CourseForm />
      }
      
      {
        showModal ? <Modal setShowModal={setShowModal} /> : ""
      }
    </div>
  )
}

export default Registration