import React, {useState} from "react"
import {Link} from "react-router-dom"

import Button from "../Button/Button"
import TextField from "../InputFields/TextField/TextField"
import signupFormStyles from "./SignupForm.module.css"

import starIcon from "../../assets/otherIcons/greenStar.svg"

const SignupForm = () => {
  // Step One values
  const [surname, setSurname] = useState("")
  const [firstName, setFirstname] = useState("")
  const [regNum, setRegNum] = useState("")
  const [email, setEmail] = useState("")

  // Step Two Values
  const [firstPassword, setFirstPassword] = useState("")
  const [secondPassword, setSecondPassword] = useState("")
  const [processSteps, setProcessSteps] = useState("stepOne")
  const [showVerification, setShowVerification] = useState(true)



  const startStepTwo = () => {
    setProcessSteps("stepTwo")
  }

  if (processSteps === "stepOne") {
    return (
      <div className={signupFormStyles.container}>
        <div className={signupFormStyles.signupLinkContainer}>
          <p className={signupFormStyles.linkText}>
            Are you a returning student?  
            <Link to="/login" className={signupFormStyles.link}>Log in here</Link>
          </p>
        </div>
  
        <div className={signupFormStyles.formContainer}>
          <div className={signupFormStyles.formHeader}>
            <h3>Sign up as a new student here</h3>
          </div>
  
          <div className={signupFormStyles.item}>
            <TextField
              label="Surname"
              type="text"
              value={surname}
              setValue={setSurname}
            />
          </div>
  
          <div className={signupFormStyles.item}>
            <TextField
              label="First Name"
              type="text"
              value={firstName}
              setValue={setFirstname}
            />
          </div>
  
          <div className={signupFormStyles.item}>
            <TextField
              label="Jamb Reg No"
              type="number"
              value={regNum}
              setValue={setRegNum}
            />
          </div>
  
          <div className={signupFormStyles.item}>
            <TextField
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
            />
          </div>
  
          <div className={signupFormStyles.btn}>
            <Button
              name="Sign up" 
              action={startStepTwo}
            />
          </div>
        </div>
      </div>
    )
  }

  if (processSteps === "stepTwo") {
    return (
      <div className={signupFormStyles.container}>
        <div 
          className={showVerification ? signupFormStyles.verification : signupFormStyles.closeVerification}
        >
          <p className={signupFormStyles.verificationText}>Your email {email} have been verified</p>
          <img
            alt=""
            src={starIcon} 
            className={signupFormStyles.img}
            onClick={() => setShowVerification(false)}
          />
        </div>

        <div className={signupFormStyles.formContainerTwo}>
          <div className={signupFormStyles.formHeader}>
            <h3>Create a new login password</h3>
          </div>
  
          <div className={signupFormStyles.item}>
            <TextField
              label="Enter your new password"
              type="password"
              value={firstPassword}
              setValue={setFirstPassword}
            />
          </div>

          <div className={signupFormStyles.item}>
            <TextField
              label="Re-enter password"
              type="password"
              value={secondPassword}
              setValue={setSecondPassword}
            />
          </div>
  
          <div className={signupFormStyles.btn}>
            <Button
              name="Log in" 
              action={startStepTwo}
            />
          </div>
        </div>
      </div>
    )
  }
 
}

export default SignupForm