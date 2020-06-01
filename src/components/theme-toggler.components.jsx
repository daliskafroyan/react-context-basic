import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// export class ThemeToggle extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {(context) => {
//           const { toggleTheme } = context;
//           return <button onClick={toggleTheme}>Change The Theme</button>;
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={toggleTheme}>Change The Theme</button>;
    </>
  );
};

export default ThemeToggle;
