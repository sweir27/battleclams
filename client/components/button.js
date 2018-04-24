import React from "react";

function Button(props) {
  return <a className='button' id={props.id} href={props.href}>{props.label}</a>;
}

export default Button;
