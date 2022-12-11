import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      const client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tkxgncb.mongodb.net/?retryWrites=true&w=majority`
      );

      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const createdMeetup = await meetupsCollection.insertOne(data);

      client.close();

      res.status(201).json(createdMeetup);
    } catch (err) {
      console.log(err);
    }
  }
}

export default handler;
