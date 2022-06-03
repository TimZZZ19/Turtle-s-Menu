import React, { useEffect, useState, useReducer } from "react";
import MenuContext from "./MenuContext";

// Select the html element for freezing and unfreezing the page
const htmlTag = document.getElementsByTagName("html");

// freeze scrolling
const freezeScrolling = () => {
  htmlTag[0].style.height = "100%";
  htmlTag[0].style.overflowY = "hidden";
};
// unfreeze scrolling
const unfreezeScrolling = () => {
  htmlTag[0].style.height = null;
  htmlTag[0].style.overflowY = null;
};

const cartReducer = (items, action) => {
  const copyOfItems = [...items];
  const targetItemIndex = copyOfItems.findIndex(
    (item) => item.id === action.id
  );

  switch (action.type) {
    case "ADD":
      return copyOfItems.concat(action.item);
    case "REMOVE":
      return copyOfItems.filter((item) => item.id !== action.id);
    case "INCREASE":
      copyOfItems[targetItemIndex].qty++;
      return copyOfItems;
    case "DECREASE":
      copyOfItems[targetItemIndex].qty--;
      return copyOfItems;
    default:
      return [];
  }
};

export default function MenuContextProvider({ children }) {
  const [menuItems, setMenuItems] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [orderPageIsOpen, setOrderPageIsOpen] = useState(false);
  const [cartPageIsOpen, setCartPageIsOpen] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState({});
  const [cartItems, dispatchCartAction] = useReducer(cartReducer, []);
  const [deliveryInfo, setDeliveryInfo] = useState({
    delivery: false,
    pickup: false,
    deliveryFee: 3,
    pickupFee: 0,
  });
  const [tip, setTip] = useState("0.00");
  const [total, setTotal] = useState(0);

  // Open and close the order page
  const openOrderPage = (item) => {
    setCurrentMenuItem(item); // When page is open, we much know what the current menu item is
    setOrderPageIsOpen(true);
    freezeScrolling();
  };
  const closeOrderPage = () => {
    setCurrentMenuItem({}); // Set currentItem back to empty just in case
    setOrderPageIsOpen(false);
    unfreezeScrolling();
  };

  // Open and close the cart page
  const openCartPage = () => {
    setCartPageIsOpen(true);
    freezeScrolling();
  };
  const closeCartPage = () => {
    setCartPageIsOpen(false);
    unfreezeScrolling();
  };

  useEffect(() => {
    fetch(
      "https://turtle-s-menu-default-rtdb.firebaseio.com/TurtlesMenuData.json"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Something went wrong!");
        return response.json();
      })
      .then((data) => {
        setMenuItems(data.menuItems);
        setDeliveryFee(data.otherInfo.deliveryFee);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const increaseItemQty = (id) => {
    dispatchCartAction({ type: "INCREASE", id });
  };

  const decreaseItemQty = (id) => {
    dispatchCartAction({ type: "DECREASE", id });
  };

  const makeDeliveryChoice = (choice) => {
    switch (choice) {
      case "delivery":
        setDeliveryInfo((prevState) => {
          return { ...prevState, delivery: true, pickup: false };
        });
        break;
      case "pickup":
        setDeliveryInfo((prevState) => {
          return { ...prevState, delivery: false, pickup: true };
        });
        break;
      case "reset":
        setDeliveryInfo((prevState) => {
          return { ...prevState, delivery: false, pickup: false };
        });
        break;
    }
  };

  const handleTip = (value) => {
    setTip(value);
  };

  const handleTotal = (amount) => {
    setTotal(amount);
  };

  const menuContext = {
    menuItems,
    deliveryFee,
    currentMenuItem,

    orderPageIsOpen,
    openOrderPage,
    closeOrderPage,

    cartPageIsOpen,
    openCartPage,
    closeCartPage,

    cartItems,
    addItemToCart,
    removeItemFromCart,
    increaseItemQty,
    decreaseItemQty,

    deliveryInfo,
    makeDeliveryChoice,

    tip,
    handleTip,

    total,
    handleTotal,
  };

  return (
    <MenuContext.Provider value={menuContext}>{children}</MenuContext.Provider>
  );
}
