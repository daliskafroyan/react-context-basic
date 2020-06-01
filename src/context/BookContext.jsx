import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books] = useState([
    { title: 'lotrs', id: 1 },
    { title: 'babi', id: 2 },
    { title: 'kki 4', id: 3 },
    { title: 'melata', id: 4 },
  ]);
  return (
    <div>
      <BookContext.Provider value={{ books }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
};

export default BookContextProvider;
