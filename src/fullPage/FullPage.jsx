import React, { useState } from "react";
import { MENU } from "../data";
import Footer from "../components/footer/Footer";
import MenuCard from "../components/menuCard/MenuCard";
import Header from "../components/header/Header";
import CategoriesBtn from "../components/categoriesBtn/CategoriesBtn";
import ModalWindow from "../UI/Modal";

export default function FullPage() {
  const [menu, setMenu] = useState(MENU);
  const [clickedCategory, setClickedCategory] = useState(menu);

  const filterCategory = (category) => {
    setClickedCategory(menu);
    if (category === "all") {
      setClickedCategory(menu);
      return;
    }
    const filteredMenu = menu.filter((item) => item.category === category);
    setClickedCategory(filteredMenu);
  };
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <CategoriesBtn menu={menu} filterCategory={filterCategory} />
      {/* <ModalWindow clickedMenu={clickedCategory}> </ModalWindow> */}
      <MenuCard clickedMenu={clickedCategory} />
      <Footer />
    </div>
  );
}
