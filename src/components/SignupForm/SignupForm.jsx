import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

import Button from "../Button/Button"
import TextField from "../InputFields/TextField/TextField"
import DropDown from "../InputFields/DropDown/DropDown"
import signupFormStyles from "./SignupForm.module.css"

import starIcon from "../../assets/otherIcons/greenStar.svg"

const countryList = ["Ghana", "Nigeria", "Zimbabwe", "Cameroon", "Ethopia"]
const religionList = ["Christainity", "Islam", "Atheism", "Judaism"]

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

  // Step Three Values
  const [country, setCountry] = useState("")
  const [address, setAddress] = useState("")
  const [religion, setReligion] = useState("")
  const [sponsorPhone, setSponsorphone] = useState("")

  const startStepTwo = () => {
    setProcessSteps("stepTwo")
  }

  const startStepThree = () => {
    setProcessSteps("stepThree")
  }

  const history = useHistory()

  const startLogin = () => {
    history.push("/")
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
              action={startStepThree}
            />
          </div>
        </div>
      </div>
    )
  }

  if (processSteps === "stepThree") {
    return (
      <div className={signupFormStyles.container}>
        <div className={signupFormStyles.formContainer}>
          <div className={signupFormStyles.formHeader}>
            <h3>Create your student account</h3>
          </div>
  
          <div className={signupFormStyles.item}>
            <DropDown
              label="Nationality"
              value={country}
              setValue={setCountry}
              data={[...countryList]}
            />
          </div>

          <div className={signupFormStyles.item}>
            <TextField
              label="Address"
              type="text"
              value={address}
              setValue={setAddress}
            />
          </div>

          <div className={signupFormStyles.item}>
            <DropDown
              label="Religion"
              value={religion}
              setValue={setReligion}
              data={[...religionList]}
            />
          </div>

          <div className={signupFormStyles.item}>
            <TextField
              label="Guardian/Parent Phone"
              type="number"
              value={sponsorPhone}
              setValue={setSponsorphone}
            />
          </div>
  
          <div className={signupFormStyles.btn}>
            <Button
              name="Submit" 
              action={startLogin}
            />
          </div>
        </div>
      </div>
    )
  }
 
}

export default SignupForm