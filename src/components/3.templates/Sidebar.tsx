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
  const [active, setActive] = useState(false); // 버튼 비활성 상태

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
          {/* 대시보드: /dashboard */}
          <li className={styles.menuItem}>
            <img
              src={active ? dashboardIconActive : dashboardIcon}
              alt="dashboardIcon"
            />
            <div className={styles.menuText}>대시보드</div>
          </li>
          {/* AI Q&A Chat: /chat */}
          <li className={styles.menuItem}>
            <img src={active ? chatIconActive : chatIcon} alt="chatIcon" />
            <div className={styles.menuText}>AI Q&A Chat</div>
          </li>
          {/* 교육: /education */}
          <li className={styles.menuItem}>
            <img
              src={active ? educationIconActive : educationIcon}
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
