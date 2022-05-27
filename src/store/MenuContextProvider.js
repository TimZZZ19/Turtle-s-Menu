import React, { useEffect, useState, useReducer } from "react";
import MenuContext from "./MenuContext";

// Select the html element for freezing and unfreezing the page
const htmlTag = document.getElementsByTagName("html");

// freeze scrolling
const freezeScrolling = () => {
  htmlTag[0].style.height = "100%";
  htmlTag[0].style.overflowY = "hidden";
};
// unfreeze scrolling
const unfreezeScrolling = () => {
  htmlTag[0].style.height = null;
  htmlTag[0].style.overflowY = null;
};

const cartReducer = (items, action) => {
  switch (action.type) {
    case "ADD":
      return items.concat(action.payload);
    default:
      return [];
  }
};

export default function MenuContextProvider({ children }) {
  const [menuItems, setMenuItems] = useState([]);
  const [orderPageIsOpen, setOrderPageIsOpen] = useState(false);
  const [cartPageIsOpen, setCartPageIsOpen] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState({});
  const [cartItems, dispatchCartAction] = useReducer(cartReducer, []);

  // Open and close the order page
  const openOrderPage = (item) => {
    setCurrentMenuItem(item); // When page is open, we much know what the current menu item is
    setOrderPageIsOpen(true);
    freezeScrolling();
  };
  const closeOrderPage = () => {
    setCurrentMenuItem({}); // Set currentItem back to empty just in case
    setOrderPageIsOpen(false);
    unfreezeScrolling();
  };

  // Open and close the cart page
  const openCartPage = () => {
    setCartPageIsOpen(true);
    freezeScrolling();
  };
  const closeCartPage = () => {
    setCartPageIsOpen(false);
    unfreezeScrolling();
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

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", payload: item });
  };

  const menuContext = {
    menuItems,
    currentMenuItem,

    orderPageIsOpen,
    openOrderPage,
    closeOrderPage,

    cartPageIsOpen,
    openCartPage,
    closeCartPage,

    cartItems,
    addItemToCart,
  };

  return (
    <MenuContext.Provider value={menuContext}>{children}</MenuContext.Provider>
  );
}
