import React from 'react';
import Navbar from './components/navbar.components';
import BookList from './components/booklist.component';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/theme-toggler.components';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
