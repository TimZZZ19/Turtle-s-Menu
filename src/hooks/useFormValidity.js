import React, { useState, useEffect } from "react";

export default function useFormValidity(
  qty,
  category,
  chozenDressing,
  chozenPasta,
  chozenToppings
) {
  const [qtyIsValid, setQtyIsValid] = useState(false);
  const [dressingIsValid, setDressingIsValid] = useState(false);
  const [pastaIsValid, setPastaIsValid] = useState(false);
  const [toppingsAreValid, setToppingsAreValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (qty !== 0) {
      setQtyIsValid(true);
    } else {
      setQtyIsValid(false);
    }

    if (chozenDressing !== "--- ---") {
      setDressingIsValid(true);
    } else {
      setDressingIsValid(false);
    }

    if (chozenPasta !== "--- ---") {
      setPastaIsValid(true);
    } else {
      setPastaIsValid(false);
    }

    if (Object.keys(chozenToppings).length !== 0) {
      setToppingsAreValid(true);
    } else {
      setToppingsAreValid(false);
    }
  }, [qty, chozenDressing, chozenPasta, chozenToppings]);

  useEffect(() => {
    if (category === "APPETIZERS" || category === "SANDWICHES") {
      changeFormValidity(qtyIsValid);
    }

    if (category === "ENTRÉE SALADS") {
      changeFormValidity(qtyIsValid && dressingIsValid);
    }

    if (category === "PASTA") {
      changeFormValidity(qtyIsValid && pastaIsValid);
    }

    if (category === "PIZZA") {
      changeFormValidity(qtyIsValid && toppingsAreValid);
    }
  }, [qtyIsValid, dressingIsValid, pastaIsValid, toppingsAreValid]);

  function changeFormValidity(conditionsAreMet) {
    if (conditionsAreMet) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }

  return [
    qtyIsValid,
    dressingIsValid,
    pastaIsValid,
    toppingsAreValid,
    formIsValid,
  ];
}
