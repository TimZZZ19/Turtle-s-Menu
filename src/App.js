import "./App.css";
import OrderPage from "./components/order/OrderPage";
import CartPage from "./components/cart/CartPage";
import Header from "./components/sections/Header";
import Menu from "./components/sections/Menu";
import MenuContextProvider from "./store/MenuContextProvider";
import React, { useState } from "react";
import AddedMsg from "./components/sections/AddedMsg";

function App() {
  const [addedMsgIsDisplayed, setAddedMsgIsDisplayed] = useState(false);

  const displayAddedMsg = () => {
    setAddedMsgIsDisplayed(true);
  };

  const hideAddedMsg = () => {
    setAddedMsgIsDisplayed(false);
  };

  return (
    <MenuContextProvider>
      <Header />
      <Menu />
      <OrderPage
        displayAddedMsg={displayAddedMsg}
        hideAddedMsg={hideAddedMsg}
      />
      <AddedMsg addedMsgIsDisplayed={addedMsgIsDisplayed} />
      <CartPage />
    </MenuContextProvider>
  );
}

export default App;
