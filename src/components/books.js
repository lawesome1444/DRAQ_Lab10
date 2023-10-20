//Since the layout is now in bookItems, it is imported so data can be passed to it
import BookItems from "./bookItems";
function Books(props) {
  /*
  Gives bookItems.js the data so it can parse and add book entries and the html code.
  Then it gives it Book.js, which then returns it back to read.js to print the book list to the page
  */
  return props.booksDetails.map(
      (book)=>{
          return <BookItems booksDetails={book}></BookItems>
      }
  );
}
  
  export default Books;

  //Old way, this is before the card overhaul & mapping being done in bookItems.js
  /* Full details code copied for safe keeping and later reference
            <li key={index}>
              <h4>Title: {book.title}</h4>
              <p>ISBN: {book.isbn}</p>
              <p>Authors: {book.authors}</p>
              <p>Status: {book.status}</p>
              <img src={book.imageURL} alt={book.title} />
            </li>
  */