import React from 'react';
import './Book.css';
// import * as  BooksAPI from '../../BooksAPI';

const Book = props => {

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 170, backgroundImage: `url("${props.imageLink.thumbnail}")`, backgroundColor: '#cccccc' }}></div>
                    <div className="book-shelf-changer">
                        <select value={props.shelf || "none"} onChange={(event) => props.changer(event.target.value, props.id)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.title || ''}</div>
                <div className="book-authors">{props.authors || ''}</div>
            </div>
        </li>
    );
};

export default Book;