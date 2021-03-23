import React from "react";
import { Link } from "react-router-dom";

function Lside()
{
    return <div id="wrapper">
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

     
     <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
         <div className="sidebar-brand-icon rotate-n-15">
             <i className="fas fa-laugh-wink"></i>
         </div>
         <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
     </a>
     <hr className="sidebar-divider my-0"/>
     <li className="nav-item active"><Link to="/">
     <span className="nav-link"><i className="fas fa-fw fa-tachometer-alt"></i>Dashboard</span>
     </Link></li><hr className="sidebar-divider"/>
     <li className="nav-item active"><Link to="/user">
    <span className="nav-link"><i class="fas fa-user"></i>  User</span></Link>
     </li><hr className="sidebar-divider my-0"/>
     <li className="nav-item active">
    <span className="nav-link"><i class="fas fa-user-plus"></i> Create User</span>
     </li>
     <hr className="sidebar-divider my-0"/>
     <li className="nav-item active">
         
         <span className="nav-link"><i class="fas fa-user-cog"></i> Edit User</span>
 </li>
 <hr className="sidebar-divider my-0"/>
     
     </ul>
   </div>    
}

export default Lside;