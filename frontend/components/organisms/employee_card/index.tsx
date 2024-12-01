import React from "react";
import styles from "./styles.module.css";
import { FaChevronRight } from "react-icons/fa";

interface EmployeeCardProps {
  name: string;
  position: string;
  subdivisions2: string;
  subdivisions1: string;
  on_sick: boolean;
  on_leave: boolean;
  missing_until: string | null;
}
const EmployeeCard = ({ ...props }: EmployeeCardProps) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_main}>
        <div className={styles.left}>
          <p className={styles.department}>{props.subdivisions2}</p>
          <p className={styles.region}>{props.subdivisions1}</p>

          <div className={styles.profile}>
            <div className={styles.profile_img}>
              <img src="/assets/profile.png" alt="" />
            </div>

            <div className={styles.profile_content}>
              <div className={styles.name_status}>
                <p className={styles.name}>{props.name}</p>

                <div
                  className={styles.status_circle}
                  title={
                    props.on_leave
                      ? `Пляж с морем и пальма До ${props.missing_until}`
                      : props.on_sick
                      ? "Человек в кровати"
                      : "Человечек за компам"
                  }
                  // style={{
                  //   backgroundColor: props.on_leave? "" : props.on_sick? "" : ""
                  // }}
                >

                  <img src={props.on_leave? "/assets/leave.png" : props.on_sick? "/assets/sick.png" : "/assets/work.png"} alt="" />
                </div>
              </div>
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
