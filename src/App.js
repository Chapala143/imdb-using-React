import logo from './logo.svg';
import './App.css';
import StopWatch from './Components/Stopwatch';
import Counter from './Components/Counter';
import { useState } from 'react';

function App() {
  const [isVisible, setVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility((prevState) => !prevState);
  };
  return (
    <div className="App">
      <input type='checkbox' onChange={toggleVisibility} /> Toggle Visibility
      { isVisible ? <StopWatch /> : null } 
      {/* // This will not useful because your stopwatch will start from zero if you toggle. */}

      {/* <div style={{
          display: isVisible ? 'block' : 'none',
          fontSize: '20px'
        }}>
        <StopWatch />
      </div> */}
     
     {/* <Counter /> */}
    </div>
  );
}

export default App;

// Style properties are object in the react.
// If you see - then you make the camel case the letter after hyphen.

// Method 3: You can toggle the class to make visible and invisible.
