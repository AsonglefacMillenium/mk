"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";


import { HiOutlineSearch } from "react-icons/hi";


interface TopBarProps{
  searchparam: any;
  setSearchQuery: (query: string) => void;
}
const TopBar = ({...props}: TopBarProps) => {
 // const [searchQuery, setSearchQuery] = useState(props.searchparam);
 

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchQuery(e.target.value);
  };
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_main}>
        <div className={styles.search_bar}>
          <HiOutlineSearch className={styles.search_icon} />
          <input
            type="text"
            placeholder="ФИО, роль, проект, должность, отдел, город работы"
            value={props.searchparam}
            onChange={handleSearchChange}
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
