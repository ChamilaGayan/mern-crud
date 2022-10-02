const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoute = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoute);

const PORT = 8000;
const DB_URL = 'mongodb+srv://chamila:chamila123@merncrud.kytcnre.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() => {
    console.log('Db connected');
})
.catch((err) => console.log('DB connection error', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
});