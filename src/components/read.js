import Books from './books';//Importing the book template format
import { useEffect, useState } from "react";
import axios from "axios";

function Read(){

  const [data, setData] = useState([]);
  

  //synchronize the book array using "useEffect"
    useEffect(
      ()=>{
        //Using axios, access the API and retrieve the book data from it
        axios.get("http://localhost:4000/api/books")
        //If we get data
        .then(
          (response)=>{//Then....
            setData(response.data);
          }
        )
        .catch(
          (error)=>{
            console.log(error);
          }
        )
      },[]
    );


      //First h3 tagged HTML line is from 2(a)
      //The second essentially is "Fill in the blanks from the Books template with every entry in the Book List array"
    return(
        <div>
            <h3>Read Component</h3>
            <Books booksDetails={data}></Books>
        </div>
    );
}
export default Read;