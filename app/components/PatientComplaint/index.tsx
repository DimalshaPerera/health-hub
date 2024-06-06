"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
import { FaPlus } from "react-icons/fa";

const PatientComplaint = () => {
  //initialize the val of complainsAmount as 5 and then updating it using setComplaintsAmount function
  const [complaintsAmount, setComplaintsAmount] = useState(5);

  return (
    <div className={styles.mainBox}>
      <h4>Patient Complain</h4>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Symptom</div>
        <div className={styles.title}>Duration</div>
      </div>
      {Array.from(Array(complaintsAmount)).map((_, i) => (
        <div key={i} className={styles.complain}>
          <input type="text" className={styles.inputFields} />
          <hr className={styles.hLine} />
          <input
            type="text"
            className={`${styles.inputFields} ${styles.durationInput}`}
          />
        </div>
      ))}
      <div
        className={`${styles.inputFields} ${styles.add}`}
        onClick={() => setComplaintsAmount(complaintsAmount + 1)}
      >
        <FaPlus />
      </div>
    </div>
  );
};

export default PatientComplaint;
