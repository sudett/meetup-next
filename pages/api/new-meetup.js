import mongoConnect from "../../utils/mongoConnect";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      const { meetupsCollection, client } = await mongoConnect();

      const createdMeetup = await meetupsCollection.insertOne(data);

      client.close();

      res.status(201).json(createdMeetup);
    } catch (err) {
      console.log(err);
    }
  }
}

export default handler;
