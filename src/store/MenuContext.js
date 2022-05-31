import React from "react";

const MenuContext = React.createContext({
  menuItems: [],
  deliveryFee: 0,
  currentMenuItem: {},

  orderPageIsOpen: false,
  openOrderPage: () => {},
  closeOrderPage: () => {},

  cartPageIsOpen: false,
  openCartPage: () => {},
  closeCartPage: () => {},

  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  increaseItemQty: () => {},
  decreaseItemQty: () => {},
});

export default MenuContext;
