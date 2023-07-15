import React from 'react'
import { useNavigate } from 'react-router'



const LandingPage = () => {

    const navigate = useNavigate();

    const direaction=(direct)=>{
navigate(direct)
    }

  return (
    <div className='taskBTNSet flex-center-center'>
<span className='taskBTN' onClick={()=>direaction("/Task/1")}>Task 1</span>
<span  className='taskBTN' onClick={()=>direaction("/Task/2")}>Task 2</span>
<span  className='taskBTN' onClick={()=>direaction("/Task/3")}>Task 3</span>
    </div>
  )
}

export default LandingPage