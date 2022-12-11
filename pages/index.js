import Head from "next/head";

import mongoConnect from "../utils/mongoConnect";

import MeetupList from "../components/meetup-list/MeetupList";

const Meetups = ({ meetups }) => {
  return (
    <div>
      <Head>
        <meta name="description" content="A list of meetups" />
        <title>Meetups</title>
      </Head>
      <MeetupList meetups={meetups} />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const { meetupsCollection, client } = await mongoConnect();

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
