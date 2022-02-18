require('dotenv').config();

// question - what does require do here
const express = require('express');
const articles = require("./routes/article.routes");
const bodyParser =  require("body-parser");

const app = express();
const port = 8000;

//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb+srv://soheekim:soheepassword@cluster0.dw1md.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// mongoose.connect(process.env.mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
//     .then(res => console.log(`Connection Successful ${res}`))
//     .catch(err => console.log(`Error in DB connection ${err}`));

//body-parser config;
// question - what does use do here
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(`<h1>Hello!</h1>`)
});

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});

//register the enpoints
app.use("/api/v1/articles", articles);