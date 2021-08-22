import React from "react";
import "./Filter.css";



function Filter({onChange , data , filterLaunch , setFilterLaunch}) {

    const options =['']

    return (
    <div className="sideShift" >
      <div>
      {
        filterLaunch && <select name="launchStatus" onChange={onChange} >
        <option value="All" onClick={(e)=>setFilterLaunch(e.target.value)} >All Launches</option>
        <option value="Upcoming" onClick={(e)=>setFilterLaunch(e.target.value)}  >Upcoming Launches</option>
        <option value="Success" onClick={(e)=>setFilterLaunch(e.target.value)} >Success Launches</option>
        <option value="Failed" onClick={(e)=>setFilterLaunch(e.target.value)} >Failed Launches</option>
      </select>
      }
      </div>

     
    </div>
  )
}

export default Filter;