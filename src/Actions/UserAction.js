import axios from "axios"
import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_more_USER_REQUEST, LOAD_more_USER_SUCCESS, SET_SELECTED_USER_INDEX } from "../Constants/userConstants"



export const getUserList=(count,oldUsers)=>async(dispatch)=>
{
try {

    if (typeof oldUsers ==="undefined") {
        
        dispatch({type:LOAD_USER_REQUEST})
    }else{
        dispatch({type:LOAD_more_USER_REQUEST,payload:oldUsers})

    }

    
    let bufferList =[]
    let i=1;

     while (i<=count) {
         const {data} = await axios.get("https://random-data-api.com/api/v2/users")
        
        bufferList.push(data)
        ++i
    }

    if (typeof oldUsers ==="undefined") {
        
        dispatch({type:LOAD_USER_SUCCESS,payload:bufferList})
    }else{
        dispatch({type:LOAD_more_USER_SUCCESS,newpayload:[ ...oldUsers,...bufferList]})

    }

    
} catch (error) {
    console.log(error);
    dispatch({type:LOAD_USER_FAIL,payload:null})
    
}
}


export const storeUser =(index)=>(dispatch)=>{
    dispatch({type:SET_SELECTED_USER_INDEX,userIndex:index})

}