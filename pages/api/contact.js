import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid data" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://ConnorTwo:ConnorPass@authcluster.jdoeb.mongodb.net/contact-messages?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    const db = client.db();
    let result;
    try {
      result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;

    } catch(error) {
      client.close();
      res.status(500).json({ message: error.message });
      return;
    };

    client.close();
    res.status(201).json({message: "success", message: newMessage});




    res
      .status(201)
      .json({ message: "sweeet sweet backend success", message: newMessage });
  }
}

export default handler;