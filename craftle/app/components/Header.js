import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src={require("../../public/logo.png")}
        style={{
          width: 150,
          height: "auto",
          marginTop: -20,
        }}
      ></Image>
      <div className={styles.logo}>
        <Image
          src={require("../../public/logo_txt.png")}
          style={{
            width: 250,
            height: "auto",
          }}
        ></Image>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
