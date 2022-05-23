import React, { useCallback, useState, useMemo, useEffect } from "react";
import FoodImage from "./orderUI_components/FoodImage";
import NameAndDescription from "./orderUI_components/NameAndDescription";
import OrderUIContainer from "./orderUI_components/OrderUIContainer";
import OrderControl from "./orderUI_components/OrderControl";
import SizeOptions from "./orderUI_components/SizeOptions";
import OrderAddOns from "./orderUI_components/OrderAddOns";
import useAddOns from "../../hooks/useAddOns";
import PrimaryIngredient from "./orderUI_components/PrimaryIngredient";

export default function OrderUI({ closeCart, currentMenuItem }) {
  const {
    name,
    description,
    price,
    prices,
    categoryDressings,
    categoryPastas,
    substitutes,
    categorySubstitutes,
    extras,
    categoryExtras,
  } = currentMenuItem;

  //************* */
  // SIZE OPTIONS
  //************* */
  const [sizePrice, setSizePrice] = useState(0); // price for the chozen size

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
  // DRESSINGS
  //************* */
  const [chozenDressing, setChozenDressing] = useState("--- ---");
  const handleInputDressing = useCallback(
    (e) => setChozenDressing(e.target.value),
    []
  );

  //************* */
  //  PASTAS
  //************* */
  const [chozenPasta, setChozenPasta] = useState("--- ---");
  const handleInputPasta = useCallback(
    (e) => setChozenPasta(e.target.value),
    []
  );

  console.log(chozenDressing, chozenPasta);

  //************* */
  // SUBSTITUTES
  //************* */
  const [mergedSubstitutes, chozenSubstitutes, handleSubstitutes] = useAddOns(
    substitutes,
    categorySubstitutes
  );

  //************* */
  // EXTRAS
  //************* */
  const [mergedExtras, chozenExtras, handleExtras] = useAddOns(
    extras,
    categoryExtras
  );

  //************* */
  // ORDER CONTROL
  //************* */
  const [qty, setQty] = useState(0);

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

  //************* */
  // FINAL UNIT PRICE
  //************* */
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

    // extras
    if (chozenExtras.length) {
      chozenExtras.forEach((key) => {
        result += mergedExtras[key];
      });
    }

    return result;
  }, [sizePrice, chozenSubstitutes, chozenExtras]);

  return (
    <OrderUIContainer closeCart={closeCart}>
      <FoodImage name={name} />
      <NameAndDescription name={name} description={description} />
      <SizeOptions availableSizes={availableSizes} handleSize={handleSize} />
      {/* <Dressings /> */}
      <PrimaryIngredient
        type={"dressings"}
        primaryIngredients={categoryDressings}
        handleInputIngredient={handleInputDressing}
      />
      {/* <Pastas /> */}
      <PrimaryIngredient
        primaryIngredients={categoryPastas}
        handleInputIngredient={handleInputPasta}
      />
      {/* substitutes */}
      <OrderAddOns
        headingText={"Substitute options"}
        addOns={mergedSubstitutes}
        handleAddOns={handleSubstitutes}
      />
      {/* extras */}
      <OrderAddOns
        headingText={"Add extra"}
        addOns={mergedExtras}
        handleAddOns={handleExtras}
      />
      <OrderControl qty={qty} unitPrice={unitPrice} handleQty={handleQty} />
    </OrderUIContainer>
  );
}
