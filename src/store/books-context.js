import React, { useCallback, useEffect, useState } from 'react';
import * as  BooksAPI from '../BooksAPI';

const BooksContext = React.createContext({
    books: [],
    loading: false,
    dropDownChanged: (shelf, id) => {}
});

export const BooksContextProvider = props => {

    const [bookListData, setBookListData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAllBooks = useCallback(() => {
        setIsLoading(true);
        BooksAPI.getAll()
            .then(data => {
                setIsLoading(false);
                setBookListData(data);
            });
    }, []);
    
    useEffect(() => {
        fetchAllBooks();
    }, [fetchAllBooks]);

    const dropDownChanged = (shelf, id) => {
        BooksAPI.update({
          id
        }, shelf)
            .then(() => {
                fetchAllBooks();
            });
    };

    return (
        <BooksContext.Provider 
            value={{
                books: bookListData,
                loading: isLoading,
                dropDownChanged
            }}>
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksContext;