import React, { useEffect, useState } from "react";
import MenuContext from "./MenuContext";

export default function MenuContextProvider({ children }) {
  const [menuItems, setMenuItems] = useState([]);
  const [orderPageIsOpen, setOrderPageIsOpen] = useState(false);

  const [currentMenuItem, setCurrentMenuItem] = useState({});

  // Select the html element for freezing and unfreezing the page
  const htmlTag = document.getElementsByTagName("html");

  // Open and close the order page
  const openOrderPage = (item) => {
    setCurrentMenuItem(item); // When page is open, we much know what the current menu item is
    setOrderPageIsOpen(true);
    // freeze scrolling
    htmlTag[0].style.height = "100%";
    htmlTag[0].style.overflowY = "hidden";
  };
  const closeOrderPage = () => {
    setCurrentMenuItem({}); // Set currentItem back to empty just in case
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
    currentMenuItem,
    orderPageIsOpen,
    openOrderPage,
    closeOrderPage,
  };

  return (
    <MenuContext.Provider value={menuContext}>{children}</MenuContext.Provider>
  );
}
