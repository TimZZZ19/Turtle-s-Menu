import "./App.css";
import Header from "./components/sections/Header";
import Menu from "./components/sections/Menu";
import MenuContextProvider from "./store/MenuContextProvider";

function App() {
  return (
    <MenuContextProvider>
      <Header />
      <Menu />
    </MenuContextProvider>
  );
}

export default App;
