import React from 'react'
import Welcome from '../components/welcome.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function welcome() {
    return (
        <div className='wel'>
          <h1 className='h'>Welcome Back!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sit eget feugiat cras feugiat at pellentesque enim.</p>
        <button className='but'>Add Employee</button>
        </div>
    )
}
