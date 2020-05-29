import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, dark, light } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Book List</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Content</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
