import React from "react";
import classes from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={`${classes.main_div} ${props.className}`}>
      {props.children}
    </div>
  );
}
