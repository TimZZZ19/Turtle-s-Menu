import React from "react";
import styles from "./AddedMsg.module.css";
import { useTransition, animated } from "react-spring";

export default function AddedMsg({ addedMsgIsDisplayed }) {
  const transition = useTransition(addedMsgIsDisplayed, {
    // config: { duration: 5000 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div
            style={style}
            className={`${styles["added-container"]} `}
          >
            <p>Added</p>
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
}
