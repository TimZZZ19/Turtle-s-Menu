import React, { useCallback, useState, useMemo } from "react";
import FoodImage from "./orderUI_components/FoodImage";
import NameAndDescription from "./orderUI_components/NameAndDescription";
import OrderUIContainer from "./orderUI_components/OrderUIContainer";
import OrderControl from "./orderUI_components/OrderControl";
import SizeOptions from "./orderUI_components/SizeOptions";
import Substitutes from "./orderUI_components/Substitutes";
import useAddOns from "../../hooks/useAddOns";

export default function OrderUI({ closeCart, currentMenuItem }) {
  const {
    name,
    description,
    price,
    prices,
    substitutes,
    categorySubstitutes,
    extras,
  } = currentMenuItem;

  const [qty, setQty] = useState(0);
  const [sizePrice, setSizePrice] = useState(0); // price for the chozen size

  //************* */
  // SIZE OPTIONS
  //************* */
  // get different sizes from the prices object
  const availableSizes = useMemo(
    () => (prices ? Object.keys(prices).reverse() : []),
    []
  );

  // Set item size
  const handleSize = useCallback((e) => {
    const chozenSize = e.target.getAttribute("id");
    const sizePrice = prices[chozenSize];
    setSizePrice(sizePrice);
  }, []);

  //************* */
  // SUBSTITUTES
  //************* */
  const [mergedSubstitutes, chozenSubstitutes, handleSubstitutes] = useAddOns(
    substitutes,
    categorySubstitutes
  );

  //************* */
  // ORDER CONTROL
  //************* */

  // Set item quantity
  const handleQty = useCallback((e) => {
    const clickedId = e.target.getAttribute("id");

    switch (clickedId) {
      case "add":
        setQty((prevQty) => prevQty + 1);
        break;
      case "remove":
        setQty((prevQty) => (prevQty > 0 ? prevQty - 1 : 0));
        break;
    }
  }, []);

  // Calculate unit price by taking all factors into consideration
  const unitPrice = useMemo(() => {
    // size options
    let result = prices ? sizePrice : price;

    // substitutes
    if (chozenSubstitutes.length) {
      chozenSubstitutes.forEach((key) => {
        result += mergedSubstitutes[key];
      });
    }

    return result;
  }, [sizePrice, chozenSubstitutes]);

  return (
    <OrderUIContainer closeCart={closeCart}>
      <FoodImage name={name} />
      <NameAndDescription name={name} description={description} />
      <SizeOptions availableSizes={availableSizes} handleSize={handleSize} />
      <Substitutes
        substitutes={mergedSubstitutes}
        handleSubstitutes={handleSubstitutes}
      />
      <OrderControl qty={qty} unitPrice={unitPrice} handleQty={handleQty} />
    </OrderUIContainer>
  );
}
