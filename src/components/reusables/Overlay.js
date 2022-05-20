import React, { useContext } from "react";
import MenuContext from "../../store/MenuContext";
import styles from "./Overlay.module.css";

export default function Overlay() {
  const menuContext = useContext(MenuContext);
  return (
    <div onClick={menuContext.closeOrderPage} className={styles.overlay}></div>
  );
}
