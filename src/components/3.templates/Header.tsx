import styles from "./Header.module.scss";
import settingIcon from "../../../public/images/settings-icon-container.png";
import notificationIcon from "../../../public/images/notification-icon-container.png";
import moreIcon from "./../../../public/images/more.png";

function Header() {
  return (
    <>
      <div className={styles.nameContainer}>
        <div className={styles.name}>홍길동</div>
        <div className={styles.admin}>Admin</div>
      </div>
      <img src={moreIcon} alt="moreIcon" />
      <img src={notificationIcon} alt="notificationIcon" />
      <img
        src={settingIcon}
        alt="settingIcon"
        style={{ marginRight: "20px" }}
      />
    </>
  );
}

export default Header;
