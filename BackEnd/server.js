const express = require('express')
const app = express()
const port = 4000
//Error handling
const path = require('path');
//Importing body parser
const bodyParser = require("body-parser");


//Importing Mongoose
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://draqlab7:admin@conorcluster.9mvkxp3.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Mongoose Schema
const bookSchema = new mongoose.Schema({
  title:String,
  frontURL:String,
  author:String
});

//Used when interacting with the database
const bookModel = mongoose.model('books', bookSchema);

//Importing CORS, unwanted HTTP request protection
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next()
});

//Waiting for a HTTP request with a get
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

//Configuring Body-Parser as middleware for name request


app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello '+req.params.name);
  })

//Book API HTTP request
app.get('/api/books', async(req, res) => {
    //Find all records in the Mongo database
    let books = await bookModel.find({});
    res.json(books);
   
  })

  //Listen for localhost:4000/test
  app.get('/test', (req, res) => {
    //Go to the same file directory as server.js and open index.html
    //(They are in the same folder so this is works)
    res.sendFile(__dirname + '/index.html');
  })

  //Routed from /test with fname and lname data
  app.get('/name', (req, res) => {
    res.send("Hello "+req.query.fname+" "+req.query.lname);
  })

  //Configuring Body-Parser to be used as middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // This is an Express route for handling a POST request to the '/name' endpoint
  app.post('/api/books', (req, res) => {
    console.log(req.body);

    bookModel.create({
      title:req.body.title,
      frontURL:req.body.frontURL,
      author:req.body.author
    })
    .then(()=>{res.send("Data Received")})
    .catch(()=>{res.send("Data Not Received")})

    
  })


//The server will constantly listen for HTTP requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})