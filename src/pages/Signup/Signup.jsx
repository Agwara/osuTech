import React from "react"

import SignupForm from "../../components/SignupForm/SignupForm"
import WelcomeAside from "../../components/WelcomeAside/WelcomeAside"

import signupStyles from "./Signup.module.css"

const Signup = () => {
  return (
    <div className={signupStyles.container}>
      <div className={signupStyles.item1}>
        <WelcomeAside />
      </div>
      <div className={signupStyles.item2}>
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup