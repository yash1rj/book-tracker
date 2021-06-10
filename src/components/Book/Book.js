import React from 'react';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
import './Book.css';

const Book = props => {

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 170, backgroundImage: `url("${props.imageLink.thumbnail}")`, backgroundColor: '#cccccc' }}></div>
                    <ShelfChanger id={props.id} shelf={props.shelf} />
                </div>
                <div className="book-title">{props.title || ''}</div>
                <div className="book-authors">{props.authors || ''}</div>
            </div>
        </li>
    );
};

export default Book;