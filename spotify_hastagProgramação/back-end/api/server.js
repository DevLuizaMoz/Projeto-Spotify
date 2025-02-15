// API significa application programming interface
// requisição: GET, POST, PUT, DELETE
// crud - create read update delete

import express from "express";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

app.get('/', (request, response) => {
    response.send("Endpoints '/artists' e '/songs'")
})

app.get('/artists', async(request, response) => {
    response.send(await db.collection('artist').find({}).toArray());
})

app.get('/songs', async(request, response) => {
    response.send(await db.collection('songs').find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
});


