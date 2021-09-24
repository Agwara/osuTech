import React from "react";

import buttonStyles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={buttonStyles.btn}>
      {props.name}
    </button>
  )
}

export default Button
