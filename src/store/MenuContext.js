import React from "react";

const MenuContext = React.createContext({
  menuItems: [],
  currentMenuItem: {},
  orderPageIsOpen: false,
  openOrderPage: () => {},
  closeOrderPage: () => {},
});

export default MenuContext;
