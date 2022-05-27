import React, { useContext } from "react";
import MenuContext from "../../store/MenuContext";
import styles from "./Overlay.module.css";

export default function Overlay({ closeOverlaypage }) {
  return <div onClick={closeOverlaypage} className={styles.overlay}></div>;
}
