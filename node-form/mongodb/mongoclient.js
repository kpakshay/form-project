// mongoclient.js
// import { MongoClient } from 'mongodb';
// const mongoose = require('mongoose')

import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()


const connect= async () => {
  try {
    
    await mongoose.connect(`${process.env.DATABASE_URL}`);
    // await client.connect();
    console.log("Connected successfully");
    // return client;
  } catch (e) {
    console.error("Connection failed:", e);
  }
}
export default connect;

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected successfully");

//     const db = client.db('crud_db');
//     // You can interact with `db` here, e.g., insert a document or create a collection
//     // Create a collection and insert a document
//     const result = await db.collection('users').insertMany({});

//     console.log("Document inserted:", result.insertedId);
//   } catch (e) {
//     console.error("Connection failed:", e);
//   } finally {
//     await client.close();
//   }
// }

// run();
