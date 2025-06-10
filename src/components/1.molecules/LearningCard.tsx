import styles from "./LearningCard.module.scss";
import LearnBtn from "../0.atoms/LearnBtn";
import StatusBtn from "../0.atoms/StatusBtn";

const LearningCard = () => (
  <div className={styles.card}>
    <div className={styles.title}>부품 위치 및 교체</div>
    <div className={styles.progressBar}>
      {/* 프로그래스 바 - 진행률에 따라 동적으로 변경*/}
      <div className={styles.progressFill} style={{ width: "50%" }} />
      <div className={styles.progressDot} style={{ left: "48%" }} />
    </div>
    <div className={styles.progress}>
      <span>진행중</span> (<span>2</span>/10)
    </div>
    <div className={styles.btnContainer}>
      <StatusBtn onStatusClick={() => {}} />
      <LearnBtn onLearnClick={() => {}} />
    </div>
  </div>
);

export default LearningCard;
