import React from "react"

import styles from "./MapKeys.module.css"

import church from "../../assets/mapKeys/church.svg"
import hospital from "../../assets/mapKeys/hospital.svg"
import lectureHall from "../../assets/mapKeys/lectureHall.svg"
import library from "../../assets/mapKeys/library.svg"
import mosque from "../../assets/mapKeys/mosque.svg"
import senate from "../../assets/mapKeys/senate.svg"

const icons = [
  {
    "name": "Church",
    "icon": church
  },
  {
    "name": "Hosipital",
    "icon": hospital
  },
  {
    "name": "Lecture Hall",
    "icon": lectureHall
  },
  {
    "name": "Library",
    "icon": library
  },
  {
    "name": "Mosque",
    "icon": mosque
  },
  {
    "name": "Senate",
    "icon": senate
  }
]

const MapKeys = () => {

  return (
    <div className={styles.container}>
      {
        icons.map((icon) => {
          return (
            <div key={icon.name} className={styles.containerTwo}>
              <img
                alt=""
                src={icon.icon} 
                className={styles.icon}
              />

              <p className={styles.iconText}>{icon.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default MapKeys