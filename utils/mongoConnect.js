import { MongoClient } from "mongodb";

const mongoConnect = async () => {
  try {
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tkxgncb.mongodb.net/?retryWrites=true&w=majority`
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    return { meetupsCollection, client };
  } catch (err) {
    throw err;
  }
};

export default mongoConnect;
