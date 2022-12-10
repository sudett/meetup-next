import Image from "next/image";
import Link from "next/link";

import styles from "./MeetupItem.module.css";

const MeetupItem = ({ img, id, title, address }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="london" />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <address>{address}</address>
        <button className={styles.btn}>
          <Link href={`/meetups/${id}`}>Show Details</Link>
        </button>
      </div>
    </div>
  );
};

export default MeetupItem;
