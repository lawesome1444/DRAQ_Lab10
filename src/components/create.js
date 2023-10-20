import { useState } from "react";

function Create(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [frontURL, setFrontURl] = useState('');

    //Created along with the read component. Yet to be used.
    return(
        <div>
            <form>
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
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                {/* URL */}
                <div className="form-group">
                    <label>Add Front Page URL: </label>
                    {/* Book title creation field */}
                    <input type="text"
                        className="form-control"
                        value={frontURL}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
            </form>
        </div>
    );
}
export default Create;