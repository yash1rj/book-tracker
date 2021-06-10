import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import * as  BooksAPI from '../../BooksAPI';
import Book from '../Book/Book';
import BooksContext from '../../store/books-context';

const Search = props => {

    const { books } = useContext(BooksContext);

    let timeout = 0;
    const [matchedBooks, setMatchedBooks] = useState();
    const [errorFlag, setErrorFlag] = useState(0);

    let searchResultsRendered;

    const searchHandler = (event) => {
        let searchText = event.target.value;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            // console.log(searchText);
            if(searchText) {
                BooksAPI.search(searchText)
                    .then(data => {
                        if(data.error) {
                            setErrorFlag(1);
                        }
                        else {
                            setMatchedBooks(data);
                            setErrorFlag(0);
                        }
                    });
            }
            else {
                setMatchedBooks(null);
                setErrorFlag(0);
            }
        }, 300);
    };

    if(!matchedBooks) {
        searchResultsRendered = <h3>Waiting for input.</h3>;
    }

    if(errorFlag) {
        searchResultsRendered = <h3>No results found !</h3>;
    }

    if(matchedBooks && !errorFlag) {
        searchResultsRendered = matchedBooks.map(matchedBook => {
            let shelf ='none';

            books.forEach(book => {
                if(book.id === matchedBook.id) {
                    shelf = book.shelf;
                }
            });

            return (<Book
                key={matchedBook.id}
                id={matchedBook.id}
                title={matchedBook.title}
                authors={matchedBook.authors}
                shelf={shelf}
                imageLink={matchedBook.imageLinks || ""} />
            );
        });
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here: SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input type="text" placeholder="Search by title or author" onChange={searchHandler} />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchResultsRendered}
                </ol>
            </div>
        </div>
    );
};

export default Search;