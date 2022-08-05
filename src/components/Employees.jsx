import React from 'react'

const Employees = (props) => {
  return (
    <div className={props.class}>
      <img src={props.img} alt="employees" />
      <span>
        <h6>{props.pos}</h6>
        <p>{props.res}</p>
      </span>
    </div>
  )
}

export default Employees