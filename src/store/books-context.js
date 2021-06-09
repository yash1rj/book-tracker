import React, { useState } from 'react';
import * as  BooksAPI from '../BooksAPI';

const BooksContext = React.createContext({
    books: [],
    fetchAllBooks: () => {},
    dropDownChanged: () => {}
});

export const BooksContextProvider = props => {

    const [bookListData, setBookListData] = useState([]);

    const fetchAllBooks = () => {
        BooksAPI.getAll()
            .then(data => {
                setBookListData(data);
            });
    };

    const dropDownChanged = (value, id) => {
        BooksAPI.update({
          id
        }, value);
      };

    return (
        <BooksContext.Provider 
            value={{
                books: bookListData,
                fetchAllBooks,
                dropDownChanged
            }}>
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksContext;