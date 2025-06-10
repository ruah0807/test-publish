import styles from "./Sidebar.module.scss";
import dashboardIcon from "../../../public/images/dashboard-icon.png";
import chatIcon from "../../../public/images/chatbot.png";
import educationIcon from "../../../public/images/education.svg";
import hamburgerIcon from "../../../public/images/hamburger.png";
const Sidebar = () => {
  return (
    <>
      <div className={styles.menuName}>
        <h2>LOGO</h2>
        <img src={hamburgerIcon} alt="hamburgerIcon" />
      </div>
      <ul className={styles.menuContainer}>
        <li className={styles.menuItem}>
          <img src={dashboardIcon} alt="dashboardIcon" />
          <div>대시보드</div>
        </li>
        <li className={styles.menuItem}>
          <img src={chatIcon} alt="chatIcon" />
          <div>AI Q&A Chat</div>
        </li>
        <li className={styles.menuItem}>
          <img src={educationIcon} alt="educationIcon" />
          <div>교육</div>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
