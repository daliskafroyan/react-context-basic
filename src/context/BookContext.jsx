import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books] = useState([
    { title: 'lotrs', id: 1 },
    { title: 'harry puter', id: 2 },
    { title: 'spring of mine', id: 3 },
    { title: 'drown deep', id: 4 },
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
