import React, { useState } from "react";
import { MENU } from "../data";
// import Footer from "../components/footer/Footer";
import MenuCard from "../components/menuCard/MenuCard";
import Header from "../components/header/Header";
import CategoriesBtn from "../components/categoriesBtn/CategoriesBtn";
import ModalWindow from "../UI/Modal";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";

export default function FullPage() {
  const [menu, setMenu] = useState(MENU);
  const [clickedCategory, setClickedCategory] = useState(menu);
  const [addedToCard , setAddedToCard] = useState ([]);
  const [inputVal , setInputVal] = useState ('')
 
  // category bar

  const filterCategory = (category) => {
    setClickedCategory(menu);
    if (category === "all") {
      setClickedCategory(menu);
      return;
    }
    const filteredMenu = menu.filter((item) => item.category === category);
    setClickedCategory(filteredMenu);
  };
   
// search bar
// here i have issues with search bar can't pass this function to my menucard if i pass the category will not work 
const filtered = menu.filter((val)=>{
  if (inputVal === ''){
  return val
}else if (val.title.toLowerCase().includes(inputVal.toLowerCase())) 
{ return val}

}

)

  

  return (
    <div>
      <Navbar  setInputVal= {setInputVal} filtered={filtered}/>
      <Header />
      <CategoriesBtn menu={menu} filterCategory={filterCategory} />
      {/* <ModalWindow clickedMenu={clickedCategory}> </ModalWindow> */}
      <MenuCard clickedMenu={clickedCategory}   />
      {/* <Footer /> */}
    </div>
  );
}
