import React from "react"

import MapContainer from "../../components/MapContainer/MapContainer"
import MapKeys from "../../components/MapKeys/MapKeys"

import styles from "./SchoolMap.module.css"

const SchoolMap = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>University Map</h3>

      <div className={styles.mapContainer}>
        <MapContainer />
      </div>

      <div className={styles.mapKey}>
        <MapKeys />
      </div>
    </div>
  )
}

export default SchoolMap