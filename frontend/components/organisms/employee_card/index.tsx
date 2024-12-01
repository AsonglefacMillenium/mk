import React from "react";
import styles from "./styles.module.css";
import { FaChevronRight } from "react-icons/fa";


interface EmployeeCardProps{
  name: string
  position: string
  subdivisions2: string
  subdivisions1: string
}
const EmployeeCard = ({...props}: EmployeeCardProps) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_main}>
        <div className={styles.left}>
          <p className={styles.department}>
            {props.subdivisions2}
          </p>
          <p className={styles.region}>{props.subdivisions1}</p>

          <div className={styles.profile}>
            <div className={styles.profile_img}>
              <img src="/assets/profile.png" alt="" />
            </div>

            <div className={styles.profile_content}>
              <p className={styles.name}>{props.name}</p>
              <p className={styles.role}>{props.position}</p>
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
