import styles from "./index.module.css";
import { BsHeartPulse, BsPeople } from "react-icons/bs";
import { MdOutlineChevronRight } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";

import React from "react";

const Layout = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.title}>HealthHub</div>
      <div className={styles.menuContainer}>
        <div className={styles.menuTitles}>Main menu</div>
        <div className={styles.mainMenuBox}>
          <div className={styles.menuBox}>
            <BsHeartPulse />
            <span>Dashboard</span>
          </div>
          <div className={styles.menuBox}>
            <BsPeople />
            <span>Patients</span>
          </div>
          <div className={styles.chevronBox}>
            <div className={styles.chevrons}>
              <MdOutlineChevronRight />
              <span>Add patients</span>
            </div>
            <div className={styles.chevrons}>
              <MdOutlineChevronRight />
              <span>Add Clinic patient</span>
            </div>
            <div className={styles.chevrons}>
              <MdOutlineChevronRight />
              <span>All patients</span>
            </div>
          </div>
          <div className={styles.menuBox}>
            <RiMentalHealthLine />
            <span>Drugs</span>
          </div>
          <div className={styles.chevronBox}>
            <div className={styles.chevrons}>
              <MdOutlineChevronRight />
              <span>Add Drugs</span>
            </div>
            <div className={styles.chevrons}>
              <MdOutlineChevronRight />
              <span>Inventory</span>
            </div>
          </div>
        </div>

        <div className={styles.menuTitles}>Other</div>
        <div className={styles.mainMenuBox}>
          <div className={styles.menuBox}>
            <CiSettings />
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
