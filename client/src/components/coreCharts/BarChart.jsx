// components/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
function BarChart({ chartData ,chartName,chartText}) {
  return (
    <div className="chart-container"  style={{height:"370px"}}>
      <h2 style={{ textAlign: "center" }}>{chartName}</h2>
      <Bar
        data={chartData}
        options={{
            responsive: true,
          plugins: {
            title: {
              display: true,
              text: chartText
            },
            legend: {
              display: false
            },
            

          },
          
          maintainAspectRatio:false

        }}
      />
    </div>
  );
}
export default BarChart;