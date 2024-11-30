import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const LanderSection = () => {
  return (
    <div className={styles.lander_wrapper}>
      <div className={styles.lander_main}>
        <div className={styles.lander_img}>
          <img src="/assets/land_img.png" alt="" />
        </div>

        <div className={styles.lander_content}>
          <h1>Сервис всевидящего ока</h1>
          <p>
            инструмент который позволит сотрудникам легко ориентироваться в
            иерархии компании, а также быстро находить сотрудника по его роли,
            проекту, должности или городу работы.
          </p>

          <Link href={"/search"}>начать работу</Link>
        </div>
      </div>
    </div>
  );
};

export default LanderSection;
