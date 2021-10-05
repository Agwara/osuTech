import React from "react"
import Chart from "react-apexcharts"

import StudentInfo from "../../components/StudentInfo/StudentInfo"
import StudentProfile from "../../components/StudentProfile/StudentProfile"

import profileStyles from "./Profile.module.css"


const Profile = () => {
  let data = {
    options: {
      labels: [4.29],
      stroke: {
        lineCap: "round"
      },
      colors: ["black"],

      fill: {
        colors:['#219653']
      },

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "50%",
          },
          dataLabels: {
            name: {
              show: true,
              color: "#000",
              fontSize: "20px"
            },
            value: {
              color: "green",
              show: true,
              fontSize: "16px",
            }
          }
        }
      }

    },
    series: [86],
    
    stroke: {
      lineCap: "round"
    },
  }


  return (
    <div className={profileStyles.container}>
      <StudentInfo />

      <div className={profileStyles.containerTwo}>

        <div className={profileStyles.profile}>
          <StudentProfile/>
        </div>

        <div className={profileStyles.calendarGPA}>
          <div className={profileStyles.calendar}></div>
          
          <div className={profileStyles.gpa}>
            <h3>Current CCGPA</h3>
            <div className={profileStyles.containerThree}>
              <p>Remark<br/> <span>Good standing</span></p>
              <Chart 
                options={data.options} 
                series={data.series} 
                type="radialBar" width="220" 
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
