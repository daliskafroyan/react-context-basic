import React from 'react';
import Navbar from './components/navbar.components';
import BookList from './components/booklist.component';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/theme-toggler.components';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
