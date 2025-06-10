import styles from "./StatusBtn.module.scss";
import statusIcon from "../../../public/images/readingGlass.png";

type StatusBtnProps = {
  onStatusClick?: () => void;
};

const StatusBtn = ({ onStatusClick }: StatusBtnProps) => (
  <button className={styles.statusBtn} onClick={onStatusClick}>
    <div className={styles.statusBtnContainer}>
      <img
        style={{ width: "1.125rem", height: "1.125rem" }}
        src={statusIcon}
        alt="statusIcon"
      />
      <div className={styles.statusBtnText}>학습 현황</div>
    </div>
  </button>
);

export default StatusBtn;
