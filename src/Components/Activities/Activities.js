import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'
const Activities = (props) => {
  const [activities,setActivities]=useState([])
  useEffect(()=>{
    fetch('activities.json')
    .then(res=>res.json())
    .then(data=>setActivities(data))},[])

  return (
    <div className='activities'>
     {activities.map(a=><Activity updateSelected={props.updateSelected} key={a.id} activity={a}></Activity>)}
      
    </div>
  );
};

export default Activities;