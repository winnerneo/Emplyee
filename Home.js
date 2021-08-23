import React from "react";
import Search1 from "./Header";
import Welcome from "./welcome";
import Search from "./search.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Employee() {
  return (
    <div>
      <Welcome />
      <Search1 />
      <div className="left">
        <Router>
          <Link className="home">Home</Link>
          <Link className="Emp">Employee</Link>
          <Link className="Pay"> Payroll</Link>
        </Router>
      </div>
      <div className="card">
  <div className="present">
          <h1 className="card-title">0</h1>
          <h6 className="card-text">Present Today</h6>
        </div>
        <div className="absent">
          <h1 className="card-title">0</h1>
          <h6 className="card-text">Absent Today</h6>
        </div>
        <div className="onLeave">
          <h1 className="card-title">0</h1>
          <h6 className="card-text">On Leave</h6>
        </div>
        <div className="totalEmployee">
          <h1 className="card-title">0</h1>
          <h6 className="card-text">Total Employee</h6>
        </div>
        
      </div>
      <div className="right">
      {/* <div>
            <i class="far fa-bell fa-3x"></i>
          </div> */}
        <div className="taskB">
          Task        0
        </div>
        <div>
          <button className="btnadd">Add Employee</button>
          <button className="btntask">Add Task</button>
          <button className="task">Create Task</button>
        </div>
        <div >
         
        </div>
      </div>
      

  
    </div>
  );
}
