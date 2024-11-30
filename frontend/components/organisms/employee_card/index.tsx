import React from "react";
import styles from "./styles.module.css";
import { FaChevronRight } from "react-icons/fa";

const EmployeeCard = () => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_main}>
        <div className={styles.left}>
          <p className={styles.department}>
            Управление ипотечного кредитования
          </p>
          <p className={styles.region}>Филиал в Волгоградской области</p>

          <div className={styles.profile}>
            <div className={styles.profile_img}>
              <img src="/assets/profile.png" alt="" />
            </div>

            <div className={styles.profile_content}>
              <p className={styles.name}>Зинаида Пахомова</p>
              <p className={styles.role}>начальник управления</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
        <FaChevronRight className={styles.arrow_right} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
