import { useRouter } from "next/router";

import { useMeetupContext } from "../../contexts/MeetupContext";

import styles from "./index.module.css";

const MeetupDetail = () => {
  const {
    query: { meetupId },
  } = useRouter();

  const { meetups } = useMeetupContext();

  const targetMeetup = meetups.find((meetup) => meetup.id === +meetupId);
  console.log(targetMeetup);

  return (
    <>
      {targetMeetup && (
        <div>
          {" "}
          <img
            className={styles.img}
            src={targetMeetup.img}
            alt={targetMeetup.title}
          />
          <div className={styles.content}>
            <h2 className={styles.title}>{targetMeetup.title}</h2>
            <address>{targetMeetup.address}</address>
          </div>
        </div>
      )}
    </>
  );
};

export default MeetupDetail;
