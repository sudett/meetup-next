import { MongoClient } from "mongodb";

import MeetupList from "../components/meetup-list/MeetupList";

const Meetups = ({ meetups }) => {
  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tkxgncb.mongodb.net/?retryWrites=true&w=majority`
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          img: meetup.img,
          desc: meetup.desc,
          address: meetup.address,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 10,
    };
  } catch (err) {
    console.log(err);
    return {
      props: { err },
    };
  }
}

export default Meetups;
