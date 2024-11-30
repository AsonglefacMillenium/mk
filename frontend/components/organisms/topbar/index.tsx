"use client";
import React from "react";
import styles from "./styles.module.css";


import { HiOutlineSearch } from "react-icons/hi";



const TopBar = () => {
 
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_main}>
        <div className={styles.search_bar}>
          <HiOutlineSearch className={styles.search_icon} />
          <input
            type="text"
            placeholder="ФИО, роль, проект, должность, отдел, город работы"
          />
        </div>

        <div className={styles.radio_content}>
          <div className={styles.radio_container}>
            <input type="radio" name="" id="" />
            <label htmlFor="cat">по всем сотрудникам</label>
          </div>

          <div className={styles.radio_container}>
            <input type="radio" name="" id="" />
            <label htmlFor="cat">по выбранному отделу</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
