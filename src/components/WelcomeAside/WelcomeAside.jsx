import React from "react"

import QuoteCarousel from "../QuoteCarousel/QuoteCarousel"
import welcomeStyles from "./WelcomeAside.module.css"

const WelcomeAside = () => {
  return (
    <div className={welcomeStyles.container}>
      <div className={welcomeStyles.imageOne}>
        <h3 className={welcomeStyles.headerText}>UNIGIG</h3>
      </div>
      <div className={welcomeStyles.imageGallery}>
        <p className={welcomeStyles.welcomeText}>Welcome</p>
        <div className={welcomeStyles.quoteCarousel}><QuoteCarousel /></div>
        <div className={welcomeStyles.imageTwo}></div>
        <div className={welcomeStyles.imageThree}></div>
        <div className={welcomeStyles.imageFour}></div>
      </div>
    </div>
  )
}

export default WelcomeAside