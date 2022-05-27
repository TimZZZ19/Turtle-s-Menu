import React from "react";
import styles from "./AddedMsg.module.css";

export default function AddedMsg() {
  return (
    <div id="added-msg" className={`${styles["added-container"]} `}>
      <p>Added</p>
    </div>
  );
}
