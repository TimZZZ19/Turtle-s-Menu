import "./App.css";
import OrderPage from "./components/order/OrderPage";
import CartPage from "./components/cart/CartPage";
import Header from "./components/sections/Header";
import Menu from "./components/sections/Menu";
import MenuContextProvider from "./store/MenuContextProvider";

function App() {
  return (
    <MenuContextProvider>
      <Header />
      <Menu />
      <OrderPage />
      <CartPage />
    </MenuContextProvider>
  );
}

export default App;
