import styles from "./LeanBtn.module.scss";

type LearningCardProps = {
  onLearnClick?: () => void;
  onStatusClick?: () => void;
};

const LearnBtn = ({ onLearnClick }: LearningCardProps) => {
  return (
    <>
      <button className={styles.learnBtn} onClick={onLearnClick}>
        학습하기
      </button>
    </>
  );
};

export default LearnBtn;
