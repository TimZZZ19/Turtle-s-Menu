import "./App.css";
import OrderPage from "./components/order/OrderPage";
import CartPage from "./components/cart/CartPage";
import Header from "./components/sections/Header";
import Menu from "./components/sections/Menu";
import MenuContextProvider from "./store/MenuContextProvider";
import React, { useState } from "react";
import AddedMsg from "./components/sections/AddedMsg";
import EmptyCart from "./components/sections/EmptyCart";

function App() {
  const [addedMsgIsDisplayed, setAddedMsgIsDisplayed] = useState(false);
  const [emptyMsgIsDisplayed, setEmptyMsgIsDisplayed] = useState(false);
  const [cartIsCleared, setCartIsCleared] = useState(false);

  const displayAddedMsg = () => {
    setAddedMsgIsDisplayed(true);
  };

  const hideAddedMsg = () => {
    setAddedMsgIsDisplayed(false);
  };

  const openEmptyMsg = () => {
    setEmptyMsgIsDisplayed(true);
  };

  const hideEmptyMsg = () => {
    setEmptyMsgIsDisplayed(false);
  };

  const emptyCart = () => {
    setEmptyMsgIsDisplayed(false);
    setCartIsCleared(true);
  };

  const resetEmptyMsg = () => {
    setCartIsCleared(false);
  };

  return (
    <MenuContextProvider>
      <React.StrictMode>
        <Header />
        <Menu />
        <OrderPage
          displayAddedMsg={displayAddedMsg}
          hideAddedMsg={hideAddedMsg}
        />
        <AddedMsg addedMsgIsDisplayed={addedMsgIsDisplayed} />
        <CartPage
          openEmptyMsg={openEmptyMsg}
          cartIsCleared={cartIsCleared}
          resetEmptyMsg={resetEmptyMsg}
        />
        <EmptyCart
          emptyMsgIsDisplayed={emptyMsgIsDisplayed}
          hideEmptyMsg={hideEmptyMsg}
          emptyCart={emptyCart}
        />
      </React.StrictMode>
    </MenuContextProvider>
  );
}

export default App;
