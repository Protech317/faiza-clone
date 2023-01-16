import React from "react";
import { Button } from "@mui/material";

export default function CategoriesBtn({
  menu,
  filterCategory,
  clickedCategory,
}) {
  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

  return (
    <>
      {allCategories.map((item) => (
        <Button
          variant="contained"
          key={item}
          size="large"
          onClick={() => filterCategory(item)}
          style={{ backgroundColor: "tomato", margin: "10px" }}
        >
          {item}
        </Button>
      ))}
    </>
  );
}
