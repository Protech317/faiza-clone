import React from "react";
import CardList  from "./CardList";
import { useState } from "react";
import "./navbar.css"
export default function Navbar() {
  const [card , setCard] = useState(false)
  return <main>

    <div className="list-section" >
      <ul>
        <li> <a href='#'> HOME </a> </li>
        <li> <a href='#'> ABOUT US </a> </li>
        <li > <a href='#'> Card </a> </li>
      </ul>
    </div>


  </main>;
}
