import React from "react";

const MenuContext = React.createContext({
  menuItems: [],
  currentMenuItem: {},

  orderPageIsOpen: false,
  openOrderPage: () => {},
  closeOrderPage: () => {},

  cartPageIsOpen: false,
  openCartPage: () => {},
  closeCartPage: () => {},

  cartItems: [],
  addItemToCart: () => {},

  increaseItemQty: () => {},
  decreaseItemQty: () => {},
  removeItemFromCart: () => {},
  editCartItem: () => {},
});

export default MenuContext;
