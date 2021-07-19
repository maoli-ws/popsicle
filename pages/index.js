import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Learn <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
    </Layout>
  );
}
