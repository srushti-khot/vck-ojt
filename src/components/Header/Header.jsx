import React from "react";
import './Header.css'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <header class="demo">
        <h2>Vivekanand College</h2>


        <nav>
                
          <Link to="/homepage" id="main">Home</Link>
          <Link to="/aboutpage" id="main">About</Link>
          <Link to="/coursespage" id="main">Courses</Link>
          <Link to="/contactpage" id="main">Contact</Link>
          <Link to="/addmissionpage" id="main1"><b>Apply Now!</b></Link>

        </nav>

      </header>
    </div>
    
  )
}


export default Header;