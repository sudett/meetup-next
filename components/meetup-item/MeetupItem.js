import { useRouter } from "next/router";

import styles from "./MeetupItem.module.css";

const MeetupItem = ({ img, id, title, address, desc }) => {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="london" />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <address>{address}</address>
        <p>{desc}</p>
        <button className={styles.btn} onClick={() => router.push(`/${id}`)}>
          Show Details
        </button>
      </div>
    </div>
  );
};

export default MeetupItem;
