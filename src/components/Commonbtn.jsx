import React from "react";
const Commonbtn = (props) => {
  return (
    <div>
      <button onClick={props.click}  className=" main-btn white-2 fw-semibold fs-md lh-24 ">
        {props.text}
      </button>
    </div>
  );
};
export default Commonbtn; 