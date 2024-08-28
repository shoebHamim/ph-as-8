import { useState } from 'react';
import './App.css';
import Activities from './Components/Activities/Activities';
import QA from './Components/QA/QA';
import Sidebar from './Components/Sidebar/Sidebar';
import { loadBreaktime, updateBreaktime_local } from './utilities/managedb';

function App() {
  const [selected,setSelected]=useState([])
  const updateSelected=(new_selected)=>{
    setSelected([...selected,new_selected])
  }

  const stored_breaktime=loadBreaktime()
  const [breaktime,setBreaktime]=useState(stored_breaktime)
  const updateBreaktime=(breaktime)=>{
    updateBreaktime_local(breaktime)
    setBreaktime(breaktime)
  }
  loadBreaktime(updateBreaktime,breaktime)
  return (
    <div className="App">
      <div className='left'>
        <h1 id='title'>🎯Laser-Focused-Club</h1>
        <h4 id='select-session'>Select your Focus Session</h4>
        <Activities updateSelected={updateSelected}></Activities>
      </div>
      <div className="sidebar">
      <Sidebar selected={selected} updateBreaktime={updateBreaktime} breaktime={breaktime}></Sidebar>
      </div>
      <div className="qa">

      <QA></QA>
      </div>
    </div>
  );
}

export default App;
