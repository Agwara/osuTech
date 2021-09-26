import React from "react" 

import Greeting from "../../components/Greeting/Greeting"
import Information from "../../components/Information/Information"
import dashboardStyles from "./Dashboard.module.css"

const Dashboard = () => {
  return (
    <div className={dashboardStyles.container}>
      <Greeting />

      <Information />

      <div className={dashboardStyles.quickAccess}>
        Quick Access
      </div>
    </div>
  )
}

export default Dashboard