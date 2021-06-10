import React, { useContext } from 'react';
import './Main.css';

import BookShelf from '../BookShelf/BookShelf';
import { Link } from 'react-router-dom';
import BooksContext from '../../store/books-context';
import Spinner from '../Spinner/Spinner';

const Main = props => {

    const { books, loading } = useContext(BooksContext);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>Book-Tracker</h1>
            </div>
            <div className="list-books-content">
                {loading && <Spinner />}
                {books && !loading && (<div>
                    <BookShelf id="currentlyReading" title="Currently Reading" bookData={books} />
                    <BookShelf id="wantToRead" title="Want to Read" bookData={books} />
                    <BookShelf id="read" title="Read" bookData={books} />
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