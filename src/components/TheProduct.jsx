import React from "react";

const TheProduct = (props) => {
  return (
    <div className={props.class}>
      <img className="logo" src={props.logo} alt="logo" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis nostrud
        exercitation ullamco
      </p>
      <div className="user">
        <img src={props.user} alt="user" />
        <div>
          <h5>{props.name}</h5>
          <h6>{props.position}</h6>
        </div>
      </div>
    </div>
  );
};

export default TheProduct;
