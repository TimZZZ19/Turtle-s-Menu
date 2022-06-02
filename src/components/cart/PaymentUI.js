import React, { useRef } from "react";
import styles from "./PaymentUI.module.css";
import Button from "../reusables/Button";

export default function PaymentUI({ goBack }) {
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const addressInputRef = useRef(null);

  const cardInputRef = useRef(null);
  const expirationInputRef = useRef(null);
  const cvcInputRef = useRef(null);
  const zipInputRef = useRef(null);

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <main>
      <div className={styles["payment-heading"]}>
        <p>Payment</p>
      </div>
      <form onSubmit={handleSubmission}>
        <div className={styles["payment-section"]}>
          <h4>Contact</h4>
          <div className={styles["inputs-area"]}>
            <div className={styles["input-item"]}>
              <label htmlFor="name">Name</label>
              <input required id="name" name="name" ref={nameInputRef} />
            </div>
            <div className={styles["input-item"]}>
              <label htmlFor="phone">Phone </label>
              <input
                required
                type="tel"
                id="phone"
                name="phone"
                ref={phoneInputRef}
              />
            </div>
            <div className={styles["input-item"]}>
              <label htmlFor="address">Address </label>
              <input
                required
                id="address"
                name="address"
                ref={addressInputRef}
              />
            </div>
          </div>
        </div>

        <div className={styles["payment-section"]}>
          <h4>Payment Information</h4>
          <div className={styles["inputs-area"]}>
            <div className={styles["input-item"]}>
              <label htmlFor="card">Card</label>
              <input required id="card" name="card" ref={cardInputRef} />
            </div>
            <div className={styles["input-item"]}>
              <label htmlFor="expiry">Expiration date </label>
              <input
                required
                type="date"
                id="expiry"
                name="expiry"
                ref={expirationInputRef}
              />
            </div>
            <span className={styles["input-row"]}>
              <div className={styles["input-item"]}>
                <label htmlFor="cvc">CVC </label>
                <input required id="cvc" name="cvc" ref={cvcInputRef} />
              </div>
              <div className={styles["input-item"]}>
                <label htmlFor="zip">Zip code</label>
                <input required id="zip" name="zip" ref={zipInputRef} />
              </div>
            </span>
          </div>
        </div>
        <div className={styles["payment-control"]}>
          <Button
            onClick={goBack}
            type="button"
            privateClass={styles["go-back"]}
          >
            Go Back
          </Button>
          <Button type="submit" privateClass={styles["confirm"]}>
            CONFIRM
          </Button>
        </div>
      </form>
    </main>
  );
}
