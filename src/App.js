import "./App.css";
import OrderPage from "./components/order/OrderPage";
import Header from "./components/sections/Header";
import Menu from "./components/sections/Menu";
import MenuContextProvider from "./store/MenuContextProvider";

function App() {
  return (
    <MenuContextProvider>
      <Header />
      <Menu />
      {<OrderPage />}
    </MenuContextProvider>
  );
}

export default App;
