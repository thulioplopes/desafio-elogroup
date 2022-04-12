import React from "react";

import "./styles.css";

const Checkbox = React.forwardRef(({ ...others }, ref ) => {
  return (
    <div className="flex-center div-checkbox" ref={ref}>
      <input type="checkbox" className="checkbox" {...others} />
    </div>
  );
});

export default Checkbox;
