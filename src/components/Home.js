import React from 'react'
import  Search1 from './search1';
import Welcome from './welcome'
import Search from './search.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Employee() {
    return (

     
        <div>
          
          
       <Welcome />
      <Search1 />
       <div  className="left">
        <Router>
       <Link className='home'>Home</Link>
        <Link className='Emp'>Employee</Link>
        <Link className='Pay'> Payroll</Link>
       </Router>
       
       </div>
       <div className="right">
       <div>
        <button className="btnadd">Add Employee</button>
        <button className="btntask">Add Task</button>    
              </div>
       
       
       </div>

       <div class="card" style={{width: '18rem;'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick examp.</p>
  </div>
</div>


     
 </div>
   


    )
}
