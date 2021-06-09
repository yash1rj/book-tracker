import React, { useContext } from 'react';
import BooksContext from '../../store/books-context';
import './Book.css';

const Book = props => {

    const { fetchAllBooks, dropDownChanged } = useContext(BooksContext);

    const selectionChangedHandler = (event) => {
        dropDownChanged(event.target.value, props.id);
        fetchAllBooks();
    };

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 170, backgroundImage: `url("${props.imageLink.thumbnail}")`, backgroundColor: '#cccccc' }}></div>
                    <div className="book-shelf-changer">
                        <select value={props.shelf || "none"} onChange={selectionChangedHandler}>
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