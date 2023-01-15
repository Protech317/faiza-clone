import React from "react";
import MENU from "../data";
import Footer from "../components/footer/Footer";
import MenuCard from "./menuCard/MenuCard";
import Header from "./header/Header"

export default function FullPage() {
  const [menu , setMenu]= useState(MENU)
  return (
    <div>
       {/* <Navbar /> */}
      <Header />
      {/* <CategoriesBtn /> */}
      <MenuCard menu={menu}/>
      <Footer />  
    </div>
  );
}
