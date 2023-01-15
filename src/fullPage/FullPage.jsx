import React from "react";
import MENU from "../data";

export default function FullPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <CategoriesBtn />
      <MenuCard>
        <menuitems but />
      </MenuCard>
      <Footer />
    </div>
  );
}
