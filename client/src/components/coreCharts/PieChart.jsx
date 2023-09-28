import React, { useEffect } from 'react'
import { Pie } from "react-chartjs-2";
const PieChart = ({chartData,chartName,chartText,position}) => {
  useEffect(() => {
  }, [ chartData])
  
  return (
    <div className="chart-container" style={{height:"350px"}}>
    <h2 style={{ textAlign: "center" }}>{chartName}</h2>
    <Pie
      data={chartData}
      options={{
        
        plugins: {
          title: {
            display: true,
            text: chartText
          },
          legend: {
            display:true,
            position
          },
          tooltip:{
            usePointStyle: true, 
          }
        },
        maintainAspectRatio:false
      }}
    />
  </div>
  )
}

export default PieChart