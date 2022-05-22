import React from "react";
import MenuItemContainer from "../../reusables/MenuItemContainer";
import styles from "./Substitutes.module.css";

export default React.memo(function Substitutes({
  substitutes,
  handleSubstitutes,
}) {
  if (!Object.keys(substitutes).length) return;

  const substituteNames = Object.keys(substitutes);

  const concatenateName = (name) => name.split(" ").join("");

  const substituteContent = substituteNames.map((name) => (
    <div className={styles["substitute-item"]} key={Math.random()}>
      <span>
        <input
          onClick={handleSubstitutes}
          type="checkbox"
          className={styles["substitute-checkbox"]}
          id={concatenateName(name)}
          name={concatenateName(name)}
          identifier={name}
        />
        <label>{name}</label>
      </span>
      <span>{`+$ ${substitutes[name].toFixed(2)}`}</span>
    </div>
  ));

  return (
    <MenuItemContainer>
      <p>Choose your substitutes :</p>
      <div className={styles.substitutes}>{substituteContent}</div>
    </MenuItemContainer>
  );
});
