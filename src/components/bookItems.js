import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
function BookItems(props) {
    //Creates a div, puts a card in it then fills that card with the book details
    //It does this for every entry, then returns them to book.js
    //Which then returns the finished HTML code to read.js which finally
    //returns the HTML code to App.js so it can be displayed on the page
    return (
        <div className="App">
            <Card style={{ width: '120rem' }}></Card>
            <Card.Title>{props.booksDetails.title}</Card.Title>
            <img src={props.booksDetails.frontURL}></img>
            <p>{props.booksDetails.author}</p>
            <Link to={"/edit/"+props.booksDetails._id} className='btn btn-primary'>Edit</Link>
            <Button variant="danger" onClick={
                (e)=>{
                    axios.delete('http://localhost:4000/api/book/' +props.booksDetails._id)
                    .then(()=>{
                        let reload = props.reload();
                    })
                    .catch();
                }
            }>Delete</Button>
        </div>
    );
}
export default BookItems;