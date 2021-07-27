import Head from "next/head";
import Menu from "./Menu";
import styles from "../styles/Home.module.css";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Paletas de hielo Maoli</title>
        <meta name="description" content="Paletas de hielo en Santa Fe, Xochitepec, Morelos" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu home={props.home}/>
      <>{props.children}</>
      <footer className={styles.footer}>
        <a
          href="https://maoli.ws"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hecho con ❤️ {" "}
          {" "} por maoli.ws
        </a>
      </footer>
    </>
  );
}