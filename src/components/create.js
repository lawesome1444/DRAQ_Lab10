import { useState } from "react";
import axios from "axios";

function Create(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [frontURL, setFrontURL] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Title: "+title+
        " Cover: "+author+
        "Front Cover URL: "+frontURL);

        const book = ({
            title:title,
            frontURL:frontURL,
            author:author
        });
        //Post the user created book to the api
        axios.post("http://localhost:4000/api/books", book)
        .then()
        .catch();
    }
    //Created along with the read component. Yet to be used.
    return(
        <div>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    {/* Book title creation field */}
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                {/* Author */}
                <div className="form-group">
                    <label>Add Book Author: </label>
                    {/* Book title creation field */}
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                {/* URL */}
                <div className="form-group">
                    <label>Add Front Page URL: </label>
                    {/* Book title creation field */}
                    <input type="text"
                        className="form-control"
                        value={frontURL}
                        onChange={(e) => { setFrontURL(e.target.value) }}
                    />
                </div>
                <br/>
                <div>
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;