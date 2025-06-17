import styles from "./App.module.scss";
import Header from "./components/3.templates/Header";
import LeaningPage from "./components/4.pages/LeaningPage";
import Sidebar from "./components/3.templates/Sidebar";

function App() {
  return (
    <>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <Header />
          </header>
          <main className={styles.content}>
            <LeaningPage />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
