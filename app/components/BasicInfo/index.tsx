import React from "react";
import styles from "./index.module.css";
import { FaImage } from "react-icons/fa";
import { PiGenderFemaleBold, PiGenderMaleBold } from "react-icons/pi";

const BasicInfo = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.title}>
        <h5>Basic Information</h5>
        <div className={styles.imgIcon}>
          <FaImage />
        </div>
      </div>

      <form>
        <div className={styles.grid}>
          <div className={styles.gridComponents}>
            <label htmlFor="id" className={styles.labels}>
              Patient ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              className={styles.inputFields}
              placeholder="4362784"
            />
          </div>

          <div className={styles.gridComponents}>
            <label htmlFor="name" className={styles.labels}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.inputFields}
              placeholder="Pabodha Pathirana"
            />
          </div>
          <div className={styles.gridComponents}>
            <div className={styles.gridSubComponents}>
              <div className={styles.inputLine}>
                <label htmlFor="dob" className={styles.labels}>
                  Date of birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className={`${styles.inputFields} ${styles.dateInput}`}
                  placeholder="31/12/2023"
                />
              </div>
              <div className={styles.inputLine}>
                <label htmlFor="age" className={styles.labels}>
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className={`${styles.inputFields} ${styles.dateInput}`}
                  placeholder="20"
                />
              </div>
            </div>
          </div>
          <div className={styles.gridComponents}>
            <label htmlFor="job" className={styles.labels}>
              Occupation
            </label>
            <input
              type="text"
              id="job"
              name="job"
              className={styles.inputFields}
              placeholder="Teacher"
            />
          </div>
          <div className={styles.gridComponents}>
            <label htmlFor="tel" className={styles.labels}>
              Phone Number
            </label>
            <input
              type="text"
              id="tel"
              name="tel"
              className={styles.inputFields}
              placeholder="4362784"
            />
          </div>
          <div className={styles.gridComponents}>
            <label htmlFor="address" className={styles.labels}>
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className={styles.inputFields}
              placeholder="131/1, Burnley road, Colombo"
            />
          </div>
          <div className={styles.gridComponents}>
            <div className={styles.labels}>Gender</div>
            <div className={styles.genderGrp}>
              <label className={styles.genderBtn}>
                <input type="radio" name="male" value="male" />
                <div className={styles.genderCard}>
                  <PiGenderMaleBold className={styles.genderIcon} />

                  <span>Male</span>
                </div>
              </label>
              <label className={styles.genderBtn}>
                <input type="radio" name="female" value="female" />
                <div className={styles.genderCard}>
                  <PiGenderFemaleBold className={styles.genderIcon} />

                  <span>Female</span>
                </div>
              </label>
            </div>
          </div>
          <div className={styles.gridComponents}>
            <div className={styles.rowComponents}>
              <div className={styles.gridSubComponents}>
                <div className={styles.inputLine}>
                  <label htmlFor="height" className={styles.labels}>
                    Height
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    className={styles.inputFields}
                  />
                </div>
                <div className={styles.inputLine}>
                  <label htmlFor="weight" className={styles.labels}>
                    Weight
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    className={styles.inputFields}
                  />
                </div>
              </div>
              <div className={styles.rowComponents}>
                <div className={styles.bmiVal}>BMI</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
