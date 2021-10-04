import React from "react"
import {useHistory} from "react-router-dom"

import stutendImage from "../../assets/profile/student.png"
import styles from "./StudentProfile.module.css"

const data = {
  "image": stutendImage,
  "department": "statistics",
  "matricNum": "STA/19/7009"
}

const StudentProfile = () => {
  const history = useHistory()

  const goToEdit = () => {
    history.push("/edit-profile")
  }
  return (
    <div className={styles.container}>
      <div className={styles.pictureContainer}>
        <div className={styles.containerTwo}>
          <img
            alt="" 
            src={data["image"]}
            className={styles.studentImage}
          />
          <div className={styles.containerThree}>
            <div>
              <p className={styles.variable}>Department</p>
              <p className={styles.variableValue}>{data["department"]}</p>
            </div>
            
            <div>
              <p className={styles.variable}>Matric No:</p>
              <p className={styles.variableValue}>{data["matricNum"]}</p>
            </div>
          </div>
        </div>

        <div onClick={goToEdit} className={styles.editBtn}>Edit Profile</div>
      </div>

      <div className={styles.mainDetails}></div>
    </div>
  )
}

export default StudentProfile