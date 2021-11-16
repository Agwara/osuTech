import React, {useState, useEffect} from "react"

import {useSelector} from "react-redux"

import CourseItem from "../../CourseItem/CourseItem"
import Button from "../../Button/Button"
import Modal from "./Modal"

import printerIcon from "../../../assets/otherIcons/printout.svg"

import styles from "./styles.module.css"

const CourseForm = () => {

  const [loadingState, setLoadingState] = useState("loading")

  const [ showModal, setShowModal] = useState(false)

  const [tempCourse, setTempCourse] = useState([])
  
  const [mounted, setMounted] = useState(true)

  const registeredCourses = useSelector(state => state.registeredCourses)

  function getSum(total, course) {
    return total + course["unit"];
  }

  const normalUnits = useSelector(state => state.registeredCourses.reduce(getSum, 0))
  const carryOverUnits = carryOverCourses.reduce(getSum, 0)

  const totalUnits = normalUnits + carryOverUnits

  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        setLoadingState("success")
      }, 2000)
    }

    return () => {
      setMounted(false)
    }
  })

  useEffect(() => {
    setTempCourse([...registeredCourses])
  }, [])

  const goToCourseForm = () => {
    setShowModal(true)
  }

  const renderUiState = () => {
    if (loadingState === "loading") {
      return (
        <div className={styles.loadingAnimation}>
          <h3>Loading Data...</h3>
          <div className={styles.loader}></div>
        </div>
      )
    } else if (loadingState === "error") {
      return (
        <div className={styles.errorInLoading}>

        </div>
      ) 
    } else if (loadingState === "success") {
      return (
        <div className={styles.resultItems}>
          {
            carryOverCourses.map((course, i) => {
              if (((i + 1) % 2) === 0) {
                return <CourseItem 
                  key={`${i}`} bg="#FAFAFA" 
                  course={course} 
                  showCheckbox={false}
                  textColor="red"
                />
              } else {
                return <CourseItem 
                  key={`${i}`} 
                  bg="#FFFFFF" 
                  course={course}
                  showCheckbox={false}
                  textColor="red"
                />
              }
            })
          }

          { 
            tempCourse.map((course, i) => {
              if (((i + 1) % 2) === 0) {
                return <CourseItem 
                  key={`${i}`} bg="#FAFAFA" 
                  course={course} 
                  showCheckbox={true}
                  textColor="#787878"
                />
              } else {
                return <CourseItem 
                  key={`${i}`} 
                  bg="#FFFFFF" 
                  course={course}
                  showCheckbox={true}
                  textColor="#787878"
                />
              }
            })
          }
          <div className={styles.totalUnitSection}>
            <p className={styles.totalUnitText}>Total Unit</p>

            <p className={styles.totalUnitValue}>{totalUnits}</p>
          </div>
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
          <p className={styles.tableHeaderText}>Semester</p>
          <p className={styles.tableHeaderText}>Level</p>
        </div>
        
        {renderUiState()}

        <div className={styles.courseForm}>
          <div className={styles.btnContainer}>
            <Button 
              action={goToCourseForm}
              name ="Submit course form"
            />
          </div>

          <div className={styles.printCourse}>
            <img
              alt=""
              src={printerIcon} 
            />
            <p className={styles.printCourseText}>Print course form</p>
          </div>
        </div>
      </div>

      {
        showModal ? <Modal setShowModal={setShowModal} /> : ""
      }
    </div>
  )
}

export default CourseForm

const carryOverCourses = [
  {
    "courseCode": "STA 111",
    "department": "Statistics",
    "courseTitle": "Introduction to statistics and maths",
    "unit": 4,
    "semester": "First",
    "level": 100
  },

  {
    "courseCode": "PHY 203",
    "department": "Biology",
    "courseTitle": "Introduction to biology",
    "unit": 3,
    "semester": "First",
    "level": 100
  }
]