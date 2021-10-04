import React from "react"

import StudentInfo from "../../components/StudentInfo/StudentInfo"
import StudentProfile from "../../components/StudentProfile/StudentProfile"

import profileStyles from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={profileStyles.container}>
      <StudentInfo />

      <div className={profileStyles.containerTwo}>

        <div className={profileStyles.profile}>
          <StudentProfile/>
        </div>

        <div className={profileStyles.calendar}></div>

      </div>
    </div>
  )
}

export default Profile
