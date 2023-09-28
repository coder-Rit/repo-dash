import React, { useEffect, useState } from 'react'
import BarChart from '../coreCharts/BarChart'
import PercentIcon from '@mui/icons-material/Percent';
import  "./persent.css";

const Relev_present = ({ value,points}) => {
  
  return (
    <div className=' flex_col gap0'>
      <div className='persentBox'>
        
      <span className='persentHeading'>{value}</span> 
      <span  >% </span>
      <span  >Relevence</span>
      </div>
      <div className='pointbox'>
        <span >Based on {points} relevance points.</span>
      </div>


    </div>
  )
}

export default Relev_present