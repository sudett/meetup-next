import Link from "next/link";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1>Meetups</h1>
        <ul className={styles.list}>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
