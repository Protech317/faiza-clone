import React from "react";
import MenuItems from "./MenuItems";

export default function MenuCard({ clickedMenu }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      <MenuItems clickedMenu={clickedMenu} />
    </div>
  );
}
