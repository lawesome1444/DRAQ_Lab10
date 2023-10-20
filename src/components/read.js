import Books from './books';//Importing the book template format
import { useEffect } from "react";
import axios from "axios";

function Read(){

  //synchronize the book array using "useEffect"
    useEffect(
      ()=>{
        //Using axios, access the API and retrieve the book data from it
        axios.get("https://jsonblob.com/api/jsonblob/1161593332966481920")
        .then()
        .catch()
      },[]
    );


      //First h3 tagged HTML line is from 2(a)
      //The second essentially is "Fill in the blanks from the Books template with every entry in the Book List array"
    return(
        <div>
            <h3>Read Component</h3>
            <Books booksDetails={bookList} />
        </div>
    );
}
export default Read;