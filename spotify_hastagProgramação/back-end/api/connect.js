import {MongoClient} from "mongodb";

const URI = "mongodb+srv://LuizaHelenaMoz:Lena.2023@cluster0.m4zyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
console.log(db)