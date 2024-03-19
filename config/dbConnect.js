const mongoose=require('mongoose');
require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URL;
// console.log("URI",uri);
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
const dbConnect=async()=>{
    try{
        // await mongoose.connect("mongodb+srv://nikhilsm930:Nmore@1992@makemymeal.gvf7bw1.mongodb.net/?retryWrites=true&w=majority");
        await client.connect();
        console.log("Db Connected successsfully");
    }
    catch(error){
        console.log("Error connecting database",error);
    }
}
dbConnect();