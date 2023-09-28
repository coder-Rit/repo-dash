import React, { useEffect } from 'react'
import { Line } from "react-chartjs-2";
const LineChart = ({chartData,chartName,chartText,position}) => {
   
  
  return (
    <div className="chart-container" style={{height:"350px"}}>
    <h2 style={{ textAlign: "center" }}>{chartName}</h2>
    <Line
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

export default LineChart