import Books from './books';//Importing the book template format

function Read(){
    //Adding 3 book entries into this book list array
    //Each line assigns a value to each of the HTML lines in the Books template
    const bookList = [
        {
          "title": "Learn Git in a Month of Lunches",
          "isbn": "1617292419",
          "pageCount": 0,
          "imageURL": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
          "status": "MEAP",
          "authors": ["Rick Umali"],
          "categories": []
        },
        {
          "title": "MongoDB in Action, Second Edition",
          "isbn": "1617291609",
          "pageCount": 0,
          "imageURL": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
          "status": "MEAP",
          "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
          ],
          "categories": []
        },
        {
          "title": "Getting MEAN with Mongo, Express, Angular, and Node",
          "isbn": "1617292036",
          "pageCount": 0,
          "imageURL": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
          "status": "MEAP",
          "authors": ["Simon Holmes"],
          "categories": []
        }
      ];
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