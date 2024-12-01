import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Employee } from "@/types/types";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";


const DetailsPage = () => {
  const [employee, setEmployee] = useState<Employee>();
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`http://localhost:8000/api/employees/${id}`);
      setEmployee(res.data);
    };

    getUser()
  });
  return (
    <div className={styles.details_wrapper}>
      <div className={styles.top}>
        <img src="/assets/logo.png" alt="" />
      </div>

      <div className={styles.bottom_section}>
        <div className={styles.left}>
          <div className={styles.right_top}>
            <div className={styles.age}>
              <h3>Стаж работы</h3>
              <p>35 лет</p>
            </div>

            <div className={styles.rating}>
              <h3>Рейтинг</h3>
              <div className={styles.stars}>
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </div>
            </div>
          </div>

          <div className={styles.education}>
            <h3>Образование</h3>
            <p>
              1990-1994 гг. — Государственный университет управления
              (бакалавриат, направление «Финансовый контроль и аудит») 1999-2001
              гг. — Московский государственный технический университет им. В.Э.
              Баумана (магистратура, направление «Юриспруденция»)
            </p>
          </div>

          <div className={styles.projects}>
            <h4>Проекты</h4>
            <p>Проект 1 Проект 2 Проект 3 Проект 4 Проект 5</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.img_wrapper}>
            {/* <Image src="/assets/profile.png" alt="" /> */}
            <img src="/assets/pro.png" alt="" />
          </div>

          <div className={styles.user_name}>
            <p className={styles.name}>
              {employee?.name} {employee?.surname}
            </p>
            <p className={styles.date}>18.09.1973</p>
            <p className={styles.position}>{employee?.position.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
