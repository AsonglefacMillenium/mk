"use client";
import React from "react";
import styles from "./styles.module.css";
import NavBar from "@/components/organisms/navigation";
import LanderSection from "@/components/organisms/lander_section";

const HomePage = () => {
  return (
    <div className={styles.home_wrapper}>
      <NavBar bgColor="#D9D9D9" color="#1E1E1E" />
      <LanderSection />
    </div>
  );
};

export default HomePage;
