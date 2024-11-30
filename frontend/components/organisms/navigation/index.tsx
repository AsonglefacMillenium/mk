import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";


interface NavProp {
  bgColor?: string;
  color?: string;
  langColor?: string;
  menuColor?: string
}
const NavBar = ({ ...props }: NavProp) => {
 

 
  return (
    <div
      className={styles.header_wrapper}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <div className={styles.header_main}>
        <Link href="/" className={styles.header_logo}>
          <img src="/assets/logo.png" alt="" />
        </Link>

        <div className={styles.nav_links}>
          <Link
            href="/"
            style={{
              color: props.color,
            }}
          >
            Главная
          </Link>
          <Link
            href=""
            style={{
              color: props.color,
            }}
          >
            Иерархия
          </Link>
          <Link
            href=""
            style={{
              color: props.color,
            }}
          >
            Контакты
          </Link>
        </div>

        {/* <div className={styles.btn_items}>
          <div
            className={styles.nav_lang}
            style={{ color: props.langColor }}
            onClick={() => setLangShow(!langshow)}
          >
            <MdLanguage className={styles.lang_icon} />

            <div className={styles.langs}>
              <p>{localActive}</p>
            </div>
            {langshow && (
              <div className={styles.lang_changer}>
                <div
                  className={styles.lang_item}
                  onClick={() => onSelectChange("en")}
                >
                  en
                </div>
                <div
                  className={styles.lang_item}
                  // onClick={() => router.replace("/sv")}
                  onClick={() => onSelectChange("sv")}
                >
                  sv
                </div>
              </div>
            )}
          </div>

          <Link href={""} className={styles.join_btn}>
            {t("btn")}
          </Link>
        </div> */}

        {/* <div className={styles.nav_mobile_icon}>
          {mobile ? (
            <MdOutlineCancel onClick={() => setMobile(false)} className={styles.cancel_menu} style={{
              color: props.menuColor? props.menuColor : "#fff"
            }}/>
          ) : (
            <MdOutlineMenu onClick={() => setMobile(true)} style={{
              color: props.menuColor? props.menuColor : "#fff"
            }}/>
          )}
        </div> */}
      </div>

      {/* {mobile && (
        <div className={styles.mobile_navs}>
          <div className={styles.nav_links_mobile}>
            <Link href={`/${localActive}/how_it_works`}>{t("how")}</Link>
            <Link href={`/${localActive}/who_it_is_for`}> {t("who")}</Link>

            <Link href={`/${localActive}/learning_center`}>
              {t("resources")}
            </Link>
          </div>

          <div className={styles.btn_items_mobile}>
            <div
              className={styles.nav_lang_mobile}
              onClick={() => setLangShow(!langshow)}
            >
              <MdLanguage className={styles.lang_icon} />

              <div className={styles.langs}>
                <p>{localActive}</p>
              </div>

              {langshow && (
                <div className={styles.lang_changer}>
                  <div
                    className={styles.lang_item}
                    onClick={() => onSelectChange("en")}
                  >
                    en
                  </div>
                  <div
                    className={styles.lang_item}
                    // onClick={() => router.replace("/sv")}
                    onClick={() => onSelectChange("sv")}
                  >
                    sv
                  </div>
                </div>
              )}
            </div>

            <Link href={""} className={styles.join_btn}>
              JOIN US
            </Link>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default NavBar;
