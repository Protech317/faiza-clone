import React, { useState } from "react";
import { MENU } from "../data";
import Footer from "../components/footer/Footer";
import MenuCard from "../components/menuCard/MenuCard";
import Header from "../components/header/Header";
import CategoriesBtn from "../components/categoriesBtn/CategoriesBtn";

export default function FullPage() {
  const [menu, setMenu] = useState(MENU);
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <CategoriesBtn menu={menu} />
      <MenuCard menu={menu} />
      <Footer />
    </div>
  );
}
