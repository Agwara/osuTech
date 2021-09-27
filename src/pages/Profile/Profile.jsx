import React from "react"

import profileStyles from "./Profile.module.css"

const Profile = () => {
  const [openTest, setOpenTest] = React.useState(false)
  return (
    <div className={profileStyles.container}>
      <div className={profileStyles.btn} onClick={() => setOpenTest(!openTest)}>

      </div>

      <div className={openTest ? profileStyles.open : profileStyles.close}></div>
    </div>
  )
}

export default Profile
