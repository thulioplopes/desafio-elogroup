import React from "react";
import "./styles.css";

const Input = React.forwardRef(({ label, type, ...others }, ref ) => {
  return (
    <div className="flex-center div-inputs" ref={ref}>
      <label className="labels">{label}</label>
      <input className="inputs" type={type} {...others} />
    </div>
  );
});

export default Input;