import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import * as  BooksAPI from '../../BooksAPI';
import Book from '../Book/Book';

const Search = props => {

    let timeout = 0;
    const [searchData, setSearchData] = useState();
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
                            setSearchData(data);
                            setErrorFlag(0);
                        }
                    });
            }
            else {
                setSearchData(null);
                setErrorFlag(0);
            }
        }, 300);
    };

    if(!searchData) {
        searchResultsRendered = <h3>Waiting for input.</h3>;
    }

    if(errorFlag) {
        searchResultsRendered = <h3>No results found !</h3>;
    }

    if(searchData && !errorFlag) {
        searchResultsRendered = searchData.map(book => (<Book
            key={book.id}
            id={book.id}
            title={book.title}
            changer={props.changer}
            authors={book.authors}
            shelf={book.shelf}
            imageLink={book.imageLinks || ""} />)
        );
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