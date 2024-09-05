import React from 'react'
import "./button.module.css";

const Button = (props: any) => {
    const className = `button ${props?.variant}`;
  return (
    <button className={className} onClick={props?.onClick}>
      {props?.children}
    </button>
  )
}

export default Button