
import React from "react";
import Header1 from "./Header1.css";

function Header() {
  const d = new Date();

  return (
    <>
      <section className="emp-con">
        <div>
          <div >
            <input className="date" type="text" placeholder="Search for employees"/>
            <span style={{ marginLeft: "30px" }}>{d.toDateString()}</span>
          </div>
        </div>
       
      </section>
  
    </>
  );
}

export default Header;


