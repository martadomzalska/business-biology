import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <div className="p-8">
            <h1 className="text-2xl font-bold">Witaj na stronie głównej!</h1>
            <p>still in progress...</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
