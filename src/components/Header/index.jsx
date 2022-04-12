import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

import "./styles.css";

export default function Header(){
  return( 
    <div className="header-div">
      <Logo className="logo" height="150px" width="450px"/>
      <Link to={'/'} className="header-link">Login</Link>
      <Link to={'/leads'} className="header-link">Leads</Link>
    </div>
  )
}