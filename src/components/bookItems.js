import Card from 'react-bootstrap/Card';
function BookItems(props) {
    //Creates a div, puts a card in it then fills that card with the book details
    //It does this for every entry, then returns them to book.js
    //Which then returns the finished HTML code to read.js which finally
    //returns the HTML code to App.js so it can be displayed on the page
    return (
        <div className="App">
            <Card style={{ width: '120rem' }}></Card>
            <Card.Title>{props.booksDetails.title}</Card.Title>
            <img src={props.booksDetails.imageURL}></img>
            <p>{props.booksDetails.authors}</p>
        </div>
    );
}
export default BookItems;