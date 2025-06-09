import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Sexting</title>
        <meta name="description" content="Sex chat" />
        <meta
          name="keywords"
          content="Sexting, Sex chat, Adult Chat, Sexy chat"
        />
        <meta name="author" content="Sexting.lol" />
      </Head>
      <main className={styles.main}>
        <ol>
          <h1>Comming Soon!</h1>
        </ol>
      </main>
    </div>
  );
}
