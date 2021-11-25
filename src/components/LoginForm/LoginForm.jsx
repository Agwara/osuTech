import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

import Button from "../Button/Button"
import TextField from "../InputFields/TextField/TextField"
import loginStyles from "./LoginForm.module.css" 

const LoginForm = () => {
  const [studentNumber, setStudentNumber] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()
  
  const startLogin = () => {
    history.push("/")
  }

  const goToForgotPassword = () => {
    history.push("/forgot-password")
  }

  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.signupLinkContainer}>
        <p className={loginStyles.linkText}>
          Are you a new student?  
          <Link to="/signup" className={loginStyles.link}>Sign up here</Link>
        </p>
      </div>
      <div className={loginStyles.formContainer}>
        <div className={loginStyles.formHeader}>
          <h3>Log in to your account</h3>
        </div>

        <div className={`${loginStyles.studentNumber} ${loginStyles.formInputWidth}`}>
          <TextField
            label="Student Number"
            type="number"
            value={studentNumber}
            setValue={setStudentNumber}
          />
        </div>

        <div className={`${loginStyles.password} ${loginStyles.formInputWidth}`}>
          <TextField
            label="Password"
            type="password"
            value={password}
            setValue={setPassword}
          />
        </div>

        <div className={`${loginStyles.loginBtn} ${loginStyles.formInputWidth}`}>
          <Button
            name="Log in" 
            action={startLogin}
          />
        </div>

        <div className={`${loginStyles.forgotPassword} ${loginStyles.formInputWidth}`}>
          <p onClick={goToForgotPassword}>Forgot your password?</p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
