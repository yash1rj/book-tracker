import React from 'react';
import Book from '../Book/Book';
import './BookShelf.css';

const BookShelf = props => {

    const { bookData, id } = props;

    let filteredBookData = bookData.filter(book => book.shelf === id);

    let filteredBooks = filteredBookData.map(book => {
        return <Book
            key={book.id}
            id={book.id}
            changer={props.changer}
            title={book.title}
            authors={book.authors}
            shelf={book.shelf}
            imageLink={book.imageLinks || ""} />;
    });

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {(!filteredBooks || !filteredBooks.length) ? <h3>Loading...</h3> : filteredBooks}
                </ol>
            </div>
        </div>
    );
};

export default BookShelf;