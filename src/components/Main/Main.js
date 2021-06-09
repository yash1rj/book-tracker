import React, { useContext, useEffect} from 'react';
import './Main.css';

import BookShelf from '../BookShelf/BookShelf';
import { Link } from 'react-router-dom';
import BooksContext from '../../store/books-context';

const Main = props => {

    const { books, fetchAllBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchAllBooks();
    }, [fetchAllBooks]);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {books && (<div>
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