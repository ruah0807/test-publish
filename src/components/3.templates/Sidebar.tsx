import { useState } from "react";
import styles from "./Sidebar.module.scss";
import dashboardIcon from "../../../public/images/dashboard.svg";
import dashboardIconActive from "../../../public/images/dashboard_active.svg";
import chatIcon from "../../../public/images/chatbot.svg";
import chatIconActive from "../../../public/images/chatbot_active.svg";
import educationIcon from "../../../public/images/education.svg";
import educationIconActive from "../../../public/images/education_active.svg";
import hamburgerIcon from "../../../public/images/hamburger.png";

const Sidebar = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className={styles.menuName}>
        <h2 className={styles.menuText}>LOGO</h2>
        <img
          src={hamburgerIcon}
          alt="hamburgerIcon"
          className={styles.hamburgerIcon}
        />
      </div>
      <nav>
        <ul className={styles.menuContainer}>
          <li onClick={() => setActive(0)} className={styles.menuItem}>
            <img
              src={active === 0 ? dashboardIconActive : dashboardIcon}
              alt="dashboardIcon"
            />
            <div className={styles.menuText}>대시보드</div>
          </li>
          <li className={styles.menuItem} onClick={() => setActive(1)}>
            <img
              src={active === 1 ? chatIconActive : chatIcon}
              alt="chatIcon"
            />
            <div className={styles.menuText}>AI Q&A Chat</div>
          </li>
          <li className={styles.menuItem} onClick={() => setActive(2)}>
            <img
              src={active === 2 ? educationIconActive : educationIcon}
              alt="educationIcon"
            />
            <div className={styles.menuText}>교육</div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
