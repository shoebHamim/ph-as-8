import React from 'react';
import './Activity.css'
const Activity = (props) => {
  const {name,img,duration,level,added}=props.activity
  let text=''
  if(added){
     text='Added'
  }else{
     text ='Add to list'
  }
  const clickHandler=(e)=>{
    e.target.classList.add('true')
    e.target.innerText='Added'
  }
  return (
    <div className='activity'>
      <img src={img} alt="" />
      <p className='name'>{name}</p>
      <p className={'level '+level}>Level: {level}</p>
      <p className='duration'>Duration: {duration} minutes</p>
      <button onClick={(e)=>{props.updateSelected(props.activity)
      clickHandler(e)}}
       className={'add '+added}>{text}</button>
    </div>
  );
};

export default Activity;