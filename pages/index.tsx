import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Inicio } from "./components/inicio";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Students DataBase</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Inicio />
      </main>

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;
