const mongoose=require('mongoose');
require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URL;
// console.log("URI",uri);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
