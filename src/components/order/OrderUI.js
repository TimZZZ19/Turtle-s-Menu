import React, { useCallback, useState, useMemo } from "react";
import FoodImage from "./orderUI_components/FoodImage";
import NameAndDescription from "./orderUI_components/NameAndDescription";
import OrderUIContainer from "./orderUI_components/OrderUIContainer";
import OrderControl from "./orderUI_components/OrderControl";
import SizeOptions from "./orderUI_components/SizeOptions";

export default function OrderUI({ closeCart, currentMenuItem }) {
  const [qty, setQty] = useState(0);
  const [sizePrice, setSizePrice] = useState(0); // price for the chozen size

  let { name, description, price, prices, substitutes, extras } =
    currentMenuItem;

  // get different sizes from the prices object
  const availableSizes = useMemo(
    () => (prices ? Object.keys(prices).reverse() : []),
    []
  );

  // In case an item doesn't have one regular price,
  // instead, its price depends on the chozen size

  price = prices ? sizePrice : price;
  // Set item size
  const handleSize = useCallback((e) => {
    const chozenSize = e.target.getAttribute("id");
    const sizePrice = prices[chozenSize];
    setSizePrice(sizePrice);
  }, []);

  // Set item quantity
  const addQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const removeQty = () => {
    setQty((prevQty) => (prevQty > 0 ? prevQty - 1 : 0));
  };

  return (
    <OrderUIContainer closeCart={closeCart}>
      <FoodImage name={name} />
      <NameAndDescription name={name} description={description} />
      <SizeOptions availableSizes={availableSizes} handleSize={handleSize} />
      <OrderControl
        qty={qty}
        price={price}
        addQty={addQty}
        removeQty={removeQty}
      />
    </OrderUIContainer>
  );
}
