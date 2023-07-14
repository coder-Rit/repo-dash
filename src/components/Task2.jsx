import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList, storeUser } from "../Actions/UserAction";
import { useNavigate } from "react-router";
import LoopIcon from '@mui/icons-material/Loop';

const Task2 = () => {
  const dispatch = useDispatch();
  const navaigate = useNavigate()
  const { is_user_list_ready, loading, users,newLoading } = useSelector(
    (state) => state.usersList
  );

  const loadmore =()=>{
    dispatch(getUserList(5,users));

  }

  const redirectToProfile =(index)=>{
    dispatch(storeUser(index))
navaigate("/task/3")  

  }

  useEffect(() => {
if(!is_user_list_ready){ 
  dispatch(getUserList(5));
} 
  }, []);

  

  return (
    <div>

    <div className="cards-container">
      
      {!loading ? (
        users.map((user,index) => {
          const { id, first_name, last_name, avatar, employment } = user;
          return (
            <div className="card " onClick={()=>redirectToProfile(index)}>
              <div>
                <img src={avatar} className="avatar" alt="" />
              </div>
              <div className="details">
                <h2 class="employee-id">Employee ID: {id}</h2>
                <h1 class="employee-name">{first_name + " " + last_name}</h1>
                <h3 class="employee-title">{employment.title}</h3>
              </div>
            </div>
          );
        })
        ) : (
          <span>Loading</span>
          )}
          </div>
          <button class="load-more-button" onClick={()=>loadmore()}>{!newLoading?"Load More":<LoopIcon className="loader"></LoopIcon>}</button>
    </div>
  );
};

export default Task2;
