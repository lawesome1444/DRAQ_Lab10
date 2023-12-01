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


  //Configuring Body-Parser to be used as middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

//Used when interacting with the database
const bookModel = mongoose.model('books', bookSchema);

//Importing CORS
const cors = require('cors');
app.use(cors());

//Unwanted HTTP request protection
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

  //Server will listen to HTTP put method so we can edit book details and upload them to mongoDB
  app.put('/api/book/:id', async(req, res)=>{
    console.log("Update: "+req.params.id);
    //Use the book at ID and replace the details with the ones filled on the body of edit.js
    let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(book);
  })
//Book API HTTP request
app.get('/api/books', async(req, res) => {
  //Find all records in the Mongo database
  let books = await bookModel.find({});
  //Return them to read.js
  res.json(books);
 
})

//Get details for a single book via the id typed after /api/book/
  app.get('/api/book/:id', async(req, res)=>{
    //Log the id typed by the user (../id)
    console.log(req.params.id);

    //find the book details by ID
      //There was a semi-colon put at the end of this.
    let book = await bookModel.findById({_id:req.params.id})
    //Send book details to server console
    res.send(book);
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

  // This is an Express route for handling a POST request to the '/name' endpoint
  app.post('/api/books', (req, res) => {
    console.log(req.body);

    //Create a new book in the database with the following:
    bookModel.create({
      title:req.body.title,
      frontURL:req.body.frontURL,
      author:req.body.author
    })
    //If the data is successfully sent, notify the user
    .then(()=>{res.send("Data Received")})
    //Ditto in case data fails to be sent to the Mongo DataBase
    .catch(()=>{res.send("Data Not Received")})

    
  })


//The server will constantly listen for HTTP requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})