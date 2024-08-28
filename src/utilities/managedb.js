const loadBreaktime=()=>{
  if(!localStorage.getItem('break_time')){
    localStorage.setItem('break_time',JSON.stringify(0));
    return 0
  }
  else{
    const stored_breaktime=parseInt(JSON.parse(localStorage.getItem('break_time')));
    return stored_breaktime
  }
}
const updateBreaktime_local=(time)=>{
  localStorage.setItem('break_time',JSON.stringify(time));

}

export {loadBreaktime,updateBreaktime_local}