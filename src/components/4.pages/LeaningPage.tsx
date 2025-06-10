import LearningCard from "../1.molecules/LearningCard";
import styles from "./LearningPage.module.scss";
const LeaningPage = () => {
  return (
    <div className={styles.cardContainer}>
      <LearningCard />
      <LearningCard />
      <LearningCard />
      <LearningCard />
      <LearningCard />
      <LearningCard />
      <LearningCard />
    </div>
  );
};

export default LeaningPage;
