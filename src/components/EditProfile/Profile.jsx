import React, {useState} from "react"

import Button from "../Button/Button"
import TextField from "../InputFields/TextField/TextField"

import styles from "./Profile.module.css"

const Profile = () => {
  const [firstName, setFirstName] = useState("Alonso")
  const [lastName, setLastName] = useState("Xabi")
  const [email, setEmail] = useState("xabialonso@gmail.com")
  const [phone, setPhone] = useState("09065908614")
  const [countryCode, setCountryCode] = useState("234")
  const [address, setAddress] = useState("Block 23A, Ixtapa Avenue")
  const [street, setStreet] = useState("Idimu")
  const [city, setCity] = useState("Ikeja")
  const [currentState, setCurrentState] = useState("Lagos")
  const [country, setCountry] = useState("Mexico")
  const [nin, setNin] = useState("9892673490910")

  const startSave = () => {

  }

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <TextField
          label="First name"
          type="text"
          value={firstName}
          setValue={setFirstName}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Last name"
          type="text"
          value={lastName}
          setValue={setLastName}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Email"
          type="text"
          value={email}
          setValue={setEmail}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Country Code"
          type="number"
          value={countryCode}
          setValue={setCountryCode}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Phone Number"
          type="number"
          value={phone}
          setValue={setPhone}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Address"
          type="text"
          value={address}
          setValue={setAddress}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Street"
          type="text"
          value={street}
          setValue={setStreet}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="City"
          type="text"
          value={city}
          setValue={setCity}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="State"
          type="text"
          value={currentState}
          setValue={setCurrentState}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Country"
          type="text"
          value={country}
          setValue={setCountry}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="NIN"
          type="number"
          value={nin}
          setValue={setNin}
        />
      </div>

      <div className={styles.btn}>
        <Button
          name="Save" 
          action={startSave}
        />
      </div>
    </div>
  )
}

export default Profile