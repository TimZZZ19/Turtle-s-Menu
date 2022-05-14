import "./App.css";
import Header from "./components/sections/Header";
import MenuContextProvider from "./store/MenuContextProvider";

function App() {
  return (
    <MenuContextProvider>
      <Header />
    </MenuContextProvider>
  );
}

export default App;
