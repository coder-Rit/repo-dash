import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router'



const LandingPage = () => {
  const { users, selectedIndex } = useSelector((state) => state.usersList);


    const navigate = useNavigate();

    const direaction=(direct)=>{
     
      if (direct==="/Task/3") {
        if (selectedIndex) {
          navigate(direct)
          
        }
      }else{
        navigate(direct)

      }
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