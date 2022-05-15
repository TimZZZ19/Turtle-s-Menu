import React, { useEffect, useState } from "react";
import MenuContext from "./MenuContext";

export default function MenuContextProvider({ children }) {
  const [menuItems, setMenuItems] = useState([]);

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
  const menuContext = { menuItems };

  return (
    <MenuContext.Provider value={menuContext}>{children}</MenuContext.Provider>
  );
}
