import React from "react";
import styles from "./styles.module.css";






const SideBar = () => {
  return (
    <div className={styles.sidebar_wrapper}>
      <div className={styles.title}>
       <img src="/assets/logo.png" alt="" />
      </div>

      {/* <svg
  dangerouslySetInnerHTML={{
    __html: devIcon,
  }}
  style={{ width: 60, height: 60, fill: 'red' }}
/> */}

      <div className={styles.sidebar_link}>
        {/* {navLinkdata.map((data) => (
          <NavBarLink
            key={data.text}
            text={data.text}
            icon={data.icon}
            link={data.link}
            isActive
          />
        ))} */}

        <div className={styles.setting_nav}>
          {/* {accountData.map((data) => (
            <NavBarLink
              key={data.text}
              text={data.text}
              icon={data.icon}
              link={data.link}
              isActive
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
