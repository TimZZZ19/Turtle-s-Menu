import React, { useEffect, useState } from "react";
import MenuContext from "./MenuContext";

export default function MenuContextProvider({ children }) {
  const [menuItems, setMenuItems] = useState([]);
  const [orderPageIsOpen, setOrderPageIsOpen] = useState(false);

  // Select the html element for freezing and unfreezing the page
  const htmlTag = document.getElementsByTagName("html");

  // Open and close the order page
  const openOrderPage = () => {
    setOrderPageIsOpen(true);
    // freeze scrolling
    htmlTag[0].style.height = "100%";
    htmlTag[0].style.overflowY = "hidden";
  };
  const closeOrderPage = () => {
    setOrderPageIsOpen(false);
    // unfreeze scrolling
    htmlTag[0].style.height = null;
    htmlTag[0].style.overflowY = null;
  };

  useEffect(() => {
    fetch("https://turtle-s-menu-default-rtdb.firebaseio.com/MenuItems.json")
      .then((response) => {
        if (!response.ok) throw new Error("Something went wrong!");
        return response.json();
      })
      .then((data) => {
        setMenuItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const menuContext = {
    menuItems,
    orderPageIsOpen,
    openOrderPage,
    closeOrderPage,
  };

  return (
    <MenuContext.Provider value={menuContext}>{children}</MenuContext.Provider>
  );
}
