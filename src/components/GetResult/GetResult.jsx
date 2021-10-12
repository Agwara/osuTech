import React from "react"

import styles from "./GetResult.module.css"

const GetResult = (props) => {

  const renderDataFetchState = () => {
    if (props.fetchResultState === "loading") {
      return (
        <div className={styles.loadingAnimation}>
          <h3>Loading Data...</h3>
          <div className={styles.loader}></div>
        </div>
      )
    } else if ((props.fetchResultState === "loaded") && props.fetchedCourses.length > 0) {
      return (
        <div className={styles.resultItems}>
          Result Items
        </div>
      )
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.getResult}>
        <div className={styles.resultHeader}>
          <p className={`${styles.tableHeaderText} ${styles.paddingLeft}`}>Course Code</p>
          <p className={styles.tableHeaderText}>Department</p>
          <p className={styles.tableHeaderText}>Course Title</p>
          <p className={styles.tableHeaderText}>Unit</p>
          <p className={styles.tableHeaderText}>Score</p>
          <p className={styles.tableHeaderText}>Grade</p>
          <p className={styles.tableHeaderText}>Point</p>
        </div>

        {renderDataFetchState()}
      </div>
    </div>
  )
}

export default GetResult