import React, { useContext } from 'react';
import './ShelfChanger.css';
import BooksContext from '../../store/books-context';

const ShelfChanger = props => {

    const { dropDownChanged } = useContext(BooksContext);

    const selectionChangedHandler = (event) => {
        dropDownChanged(event.target.value, props.id);
    };

    return (
        <div className="book-shelf-changer">
            <select value={props.shelf || "none"} onChange={selectionChangedHandler}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
};

export default ShelfChanger;