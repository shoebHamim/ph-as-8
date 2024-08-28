import React from 'react';
import profile from '../../images/me.jpg'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sidebar = (props) => {
  const selected = props.selected
  const updateBreaktime = props.updateBreaktime
  const breaktime = props.breaktime

  let total_time = 0
  selected.forEach(s => {
    total_time += s.duration
  })
  const clickHandler = (e) => {
    const allElements = e.target.parentElement.children
    for (let i = 0; i < allElements.length; i++) {
      allElements[i].classList.remove('selected');
    }
    e.target.classList.add('selected');
  }
  const selection=['','','','']
  const blockSelectionHandler = (time) => {
    let i = 0
    if (time === 10) {
      i = 1
    }
    else if (time === 15) {
      i = 2
    }
    else if (time === 20) {
      i = 3
    }
    else if (time === 25) {
      i = 4
    }
    selection[i]='selected'
  }
  blockSelectionHandler(breaktime)
  const notify = () => toast("Congratulations!🎉");
  return (
    <div className='sidebar'>
      <div className="profile">
        <img src={profile} alt="" />
        <div className="info">
          <p id='name'>Shoeb Islam Hamim</p>
          <p id='location'><FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="detail-container">
        <div className="detail">
          <p><span className='bold-it'>Student</span></p>
          <p>Occupation</p>
        </div>
        <div className="detail">
          <p><span className='bold-it'>Intermediate</span></p>
          <p>XP level</p>
        </div>
        <div className="detail">
          <p><span className='bold-it'>21</span> yrs</p>

          <p>Age</p>
        </div>

      </div>
      <p className='block-title'>Add A Break</p>
      <div className="break-duration">
        <div className={"time-block "+selection[0]} onClick={(e) => {
          clickHandler(e)
          updateBreaktime(5)
        }}>5m</div>
        <div className={"time-block "+selection[1]} onClick={(e) => {
          clickHandler(e)
          updateBreaktime(10)
        }}>10m</div>
        <div className={"time-block "+selection[2]} onClick={(e) => {
          clickHandler(e)
          updateBreaktime(15)
        }}>15m</div>
        <div className={"time-block "+selection[3]} onClick={(e) => {
          clickHandler(e)
          updateBreaktime(20)
        }}>20m</div>
        <div className={"time-block "+selection[4]} onClick={(e) => {
          clickHandler(e)
          updateBreaktime(25)
        }}>25m</div>
      </div>
      <p className='block-title'>Exercise Details </p>
      <div className="exercise-time">
        <p className='bold-it'>Exercise Time</p>
        <p>{total_time} minutes</p>
      </div>
      <div className="break-time">
        <p className='bold-it'>Break Time</p>
        <p>{breaktime} minutes</p>
      </div>
      <button className='complete' onClick={notify}>Activity Completed</button>
  
        <ToastContainer />
    </div>

  );
};

export default Sidebar;