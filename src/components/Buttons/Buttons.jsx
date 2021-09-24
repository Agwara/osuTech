import React from "react";

import buttonStyles from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <buttons className={buttonStyles.btn}>
      {props.name}
    </buttons>
  )
}

export default Buttons
