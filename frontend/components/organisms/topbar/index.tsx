"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.css";

import AvatarImage from "../../../assets/avatar.jpg";
import { HiOutlineSearch } from "react-icons/hi";

// import { selectAuth, setUser } from "@/redux/slices/auth/signInSlice"

const TopBar = () => {
  //const user = useSelector(selectAuth);

  // console.log("user email is", user?.email);

  // useEffect(() => {
  //   if (!user) {
  //     const storedUserData = localStorage.getItem("user");
  //     if (storedUserData) {
  //       dispatch(setUser(JSON.parse(storedUserData)));
  //     } else {
  //       console.log("User not authenticated and no stored data");
  //     }
  //   }
  // }, [dispatch, user]);

  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem("user", JSON.stringify(user));
  //   }
  // }, [user]);
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
