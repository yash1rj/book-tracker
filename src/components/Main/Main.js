import React, { useEffect, useState } from 'react';
import './Main.css';

import BookShelf from '../BookShelf/BookShelf';

import * as  BooksAPI from '../../BooksAPI';
import { Link } from 'react-router-dom';

const Main = props => {

    const [bookListData, setBookListData] = useState([]);

    const fetchAllBooks = () => {
        BooksAPI.getAll()
            .then(data => {
                setBookListData(data);
            });
    };

    useEffect(() => {
        fetchAllBooks();
    }, []);

    const selectionChangedHandler = (value, id) => {
        props.changer(value, id);
        fetchAllBooks();
    };

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {bookListData && (<div>
                    <BookShelf changer={selectionChangedHandler} id="currentlyReading" title="Currently Reading" bookData={bookListData} />
                    <BookShelf changer={selectionChangedHandler} id="wantToRead" title="Want to Read" bookData={bookListData} />
                    <BookShelf changer={selectionChangedHandler} id="read" title="Read" bookData={bookListData} />
                </div>)}
            </div>
            <div className="open-search">
                <Link to="/search">
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    );
};

export default Main;