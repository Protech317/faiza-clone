import React from "react";
import { Button } from "@mui/material";

export default function CategoriesBtn({ menu }) {
  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
  console.log(allCategories);

  return (
    <>
      {allCategories.map((item) => (
        <Button size="large">{item}</Button>
      ))}
    </>
  );
}
