import React from "react";
import logo from "../../assets/elogrouplogo.png";
import "./styles.css";
export default function Logo(props) {
  return(
    <img src={logo} height={props.height} width={props.width} className="logo-img" alt="Logoelogroup"/>
  );  
}