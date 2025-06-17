import LearningCard from "../1.molecules/LearningCard";
import styles from "./LearningPage.module.scss";
const LeaningPage = () => {
  return (
    <article className={styles.cardContainer}>
      <LearningCard />
      <LearningCard />
      <LearningCard />
      <LearningCard />
      <LearningCard />
      <LearningCard />
      <LearningCard />
    </article>
  );
};

export default LeaningPage;
