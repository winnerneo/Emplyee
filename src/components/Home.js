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
        <div className="left">
      <Router>
        <Link className='home'>Home</Link>
        <Link className='Emp'>Employee</Link>
        <Link className='Pay'> Payroll</Link>
        
        
        </Router>
       
        <Welcome/>
      
      
    </div>
    )
}
