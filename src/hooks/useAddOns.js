import React, { useState, useMemo, useCallback } from "react";

export default function useAddOns(addOns, categoryAddOns) {
  const [chozenAddOns, setChozenAddOns] = useState([]);

  const mergedAddOns = useMemo(() => {
    return categoryAddOns ? { ...addOns, ...categoryAddOns } : { ...addOns };
  }, [addOns, categoryAddOns]);

  const handleAddOns = useCallback((e) => {
    const clickedAddOn = e.target.getAttribute("identifier");

    if (e.target.checked) {
      setChozenAddOns((prevState) => {
        return [...prevState, clickedAddOn];
      });
    } else {
      setChozenAddOns((prevState) => {
        return prevState.filter((el) => el !== clickedAddOn);
      });
    }
  }, []);

  return [mergedAddOns, chozenAddOns, handleAddOns];
}
