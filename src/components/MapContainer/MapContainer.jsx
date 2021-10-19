import React from 'react'
import GoogleMapReact from 'google-map-react'

import MapMarker from "../MapMarker/MapMarker"
import lectureHallIcon from "../../assets/mapKeys/lectureHall.svg"
import library from "../../assets/mapKeys/library.svg"
import hospital from "../../assets/mapKeys/hospital.svg"
import styles from "./MapContainer.module.css"

import {REACT_APP_GOOGLE_API_KEY} from "../../keys"

const MapContainer = () => {

  const center = {
    lat: 6.57732,
    lng: 3.27846
  }

  const zoom = 18

  return (
    <div className={styles.container}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: REACT_APP_GOOGLE_API_KEY}}
        defaultCenter={center}
        defaultZoom={zoom}
      >

        <MapMarker
          lat={6.57785}
          lng={3.27816}
          placeName="Nnamdi Azikwe Lecture Hall"
          icon={lectureHallIcon}
        />

        <MapMarker
          lat= {6.57732}
          lng= {3.27846}
          placeName="Engineering Building"
          icon={lectureHallIcon}
        />

        <MapMarker
          lat= {6.57767}
          lng= {3.27719}
          placeName="Mechanical Engineering Library"
          icon={library}
        />

        <MapMarker
          lat={6.57633}
          lng={3.27732}
          placeName="Hospital"
          icon={hospital}
        />

      </GoogleMapReact>
    </div>
  );
  
}

export default MapContainer;