import { useRouter } from "next/router";

import { ObjectId } from "mongodb";

import mongoConnect from "../../utils/mongoConnect";

import { useMeetupContext } from "../../contexts/MeetupContext";

import styles from "./index.module.css";

const MeetupDetail = ({ targetMeetup }) => {
  // const {
  //   query: { meetupId },
  // } = useRouter();

  // const { meetups } = useMeetupContext();

  // const targetMeetup = meetups.find((meetup) => meetup.id === +meetupId);

  return (
    <>
      {targetMeetup && (
        <div className={styles.card}>
          {" "}
          <img
            className={styles.img}
            src={targetMeetup.img}
            alt={targetMeetup.title}
          />
          <div className={styles.content}>
            <h2 className={styles.title}>{targetMeetup.title}</h2>
            <address>{targetMeetup.address}</address>
            <p>{targetMeetup.desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export async function getStaticPaths() {
  try {
    const { meetupsCollection, client } = await mongoConnect();

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();
    return {
      fallback: false,
      paths: meetups.map((meetup) => ({
        params: {
          meetupId: meetup._id.toString(),
        },
      })),
    };
  } catch (err) {
    return {
      paths: [],
    };
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  try {
    const { meetupsCollection, client } = await mongoConnect();

    const meetup = await meetupsCollection.findOne({
      _id: ObjectId(meetupId),
    });

    client.close();

    return {
      props: {
        targetMeetup: {
          title: meetup.title,
          img: meetup.img,
          address: meetup.address,
          desc: meetup.desc,
        },
      },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
}

export default MeetupDetail;
