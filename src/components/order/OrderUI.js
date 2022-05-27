import React, { useCallback, useState, useMemo } from "react";
import FoodImage from "./orderUI_components/FoodImage";
import NameAndDescription from "./orderUI_components/NameAndDescription";
import OrderUIContainer from "./orderUI_components/OrderUIContainer";
import OrderControl from "./orderUI_components/OrderControl";
import SizeOptions from "./orderUI_components/SizeOptions";
import OrderAddOns from "./orderUI_components/OrderAddOns";
import useAddOns from "../../hooks/useAddOns";
import PrimaryIngredient from "./orderUI_components/PrimaryIngredient";
import Toppings from "./orderUI_components/Toppings";
import useFormValidity from "../../hooks/useFormValidity";

export default function OrderUI({
  closeOrderUI,
  currentMenuItem,
  addItemToCart,
  displayAddedMsg,
  hideAddedMsg,
}) {
  const {
    name,
    description,
    category,
    price,
    prices,
    categoryDressings,
    categoryPastas,
    substitutes,
    categorySubstitutes,
    extras,
    categoryExtras,
    categoryToppings,
    toppingPrice,
  } = currentMenuItem;

  //************* */
  // SIZE OPTIONS
  //************* */
  const [sizePrice, setSizePrice] = useState(0); // price for the chozen size
  const [chozenSize, setChozenSize] = useState("");

  // get different sizes from the prices object
  const availableSizes = useMemo(
    () => (prices ? Object.keys(prices).reverse() : []),
    []
  );

  // Set item size
  const handleSize = useCallback((e) => {
    const chozenSize = e.target.getAttribute("id");
    const sizePrice = prices[chozenSize];
    setChozenSize(chozenSize);
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
  // TOPPPINGS
  //************* */
  const [chozenToppings, setChozenToppings] = useState({});
  const handleChozenToppings = useCallback((topping, qty) => {
    if (qty === 0) {
      setChozenToppings((prevState) => {
        const copy = { ...prevState };
        delete copy[topping];
        return copy;
      });
    } else {
      setChozenToppings((prevState) => {
        const currentToppingInfo = {};
        currentToppingInfo[topping] = qty;
        return { ...prevState, ...currentToppingInfo };
      });
    }
  }, []);

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

    // toppings
    const chozenToppingsKeys = Object.keys(chozenToppings);
    if (chozenToppingsKeys.length) {
      chozenToppingsKeys.forEach((key) => {
        result += chozenToppings[key] * toppingPrice;
      });
    }

    return result;
  }, [sizePrice, chozenSubstitutes, chozenExtras, chozenToppings]);

  //************* */
  // FORM VALIDITY
  //************* */
  const [addHasBeenClicked, setAddHasBeenClicked] = useState(false);
  const changeAddClickStatus = () => {
    setAddHasBeenClicked(true);
  };

  const [
    qtyIsValid,
    dressingIsValid,
    pastaIsValid,
    toppingsAreValid,
    formIsValid,
  ] = useFormValidity(
    qty,
    category,
    chozenDressing,
    chozenPasta,
    chozenToppings
  );

  //******************** */
  // ADDD ORDER TO CART
  //******************** */

  const addToCart = () => {
    closeOrderUI();

    const newItem = { name, qty, unitPrice };

    if (chozenSize) newItem.chozenSize = chozenSize;

    if (chozenDressing !== "--- ---") newItem.chozenDressing = chozenDressing;

    if (chozenPasta !== "--- ---") newItem.chozenPasta = chozenPasta;

    if (chozenSubstitutes.length !== 0)
      newItem.chozenSubstitutes = chozenSubstitutes;

    if (chozenExtras.length !== 0) newItem.chozenExtras = chozenExtras;

    if (Object.keys(chozenToppings).length !== 0)
      newItem.chozenToppings = chozenToppings;

    addItemToCart(newItem);
    setTimeout(() => {
      displayAddedMsg();
      setTimeout(() => {
        hideAddedMsg();
      }, 800);
    }, 500);
  };

  return (
    <OrderUIContainer closeOrderUI={closeOrderUI}>
      <FoodImage name={name} />
      <NameAndDescription name={name} description={description} />
      <SizeOptions availableSizes={availableSizes} handleSize={handleSize} />
      {/* <Dressings /> */}
      <PrimaryIngredient
        type={"dressing"}
        primaryIngredients={categoryDressings}
        handleInputIngredient={handleInputDressing}
        chozenPrimaryIngredient={chozenDressing}
        inputIsValid={dressingIsValid}
        addHasBeenClicked={addHasBeenClicked}
      />
      {/* <Pastas /> */}
      <PrimaryIngredient
        type={"pasta"}
        primaryIngredients={categoryPastas}
        handleInputIngredient={handleInputPasta}
        chozenPrimaryIngredient={chozenPasta}
        inputIsValid={pastaIsValid}
        addHasBeenClicked={addHasBeenClicked}
      />
      {/* Substitutes */}
      <OrderAddOns
        headingText={"Substitute options"}
        addOns={mergedSubstitutes}
        handleAddOns={handleSubstitutes}
      />
      {/* Extras */}
      <OrderAddOns
        headingText={"Add extra"}
        addOns={mergedExtras}
        handleAddOns={handleExtras}
      />
      {/* Toppings */}
      {categoryToppings && (
        <Toppings
          toppings={categoryToppings}
          handleChozenToppings={handleChozenToppings}
          toppingsAreValid={toppingsAreValid}
          addHasBeenClicked={addHasBeenClicked}
        />
      )}
      <OrderControl
        qty={qty}
        category={category}
        qtyIsValid={qtyIsValid}
        formIsValid={formIsValid}
        addHasBeenClicked={addHasBeenClicked}
        changeAddClickStatus={changeAddClickStatus}
        addToCart={addToCart}
        unitPrice={unitPrice}
        handleQty={handleQty}
      />
    </OrderUIContainer>
  );
}
