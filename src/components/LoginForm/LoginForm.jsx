import React from "react"

import loginStyles from "./LoginForm.module.css"

const LoginForm = () => {
  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.form}>
        <h3>Login component</h3>
      </div>
    </div>
  )
}

export default LoginForm
