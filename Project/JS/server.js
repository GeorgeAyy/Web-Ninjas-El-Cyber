import express from 'express';
import bodyParser from 'body-parser';
import mongo from 'mongodb';

const app = express();
app.use(bodyParser.json());

// Replace the connection string with your own MongoDB Atlas connection string or a local MongoDB instance.
const uri = 'mongodb+srv://zeinahesham2022:ONYaWxy0Sr3x8wSf@frntr.o0ijor9.mongodb.net/';

const client = new mongo.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const users = [
    { name: 'John Doe', age: 28, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 35, email: 'jane.smith@example.com' },
    { name: 'Alice Johnson', age: 24, email: 'alice.johnson@example.com' },
    { name: 'Bob Brown', age: 42, email: 'bob.brown@example.com' }
  ];
  mongo.users.insertMany(users)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/users', async (req, res) => {
  try {
    const user = req.body;

    const result = await client
      .db('test')
      .collection('users')
      .insertOne(user);

    res.status(201).json({ message: 'User created', userId: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await client.connect();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
  }
}

startServer();
