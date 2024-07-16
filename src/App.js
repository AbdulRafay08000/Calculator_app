import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculation = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('error');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`Calculator ${darkMode ? 'dark' : 'light'}`}>
      <input className="value" type='text' value={input} readOnly />
      <button className="numclear" onClick={handleClear}>C</button>
      <button className="numclear" onClick={handleBackspace}>Back</button>
      <button className="num" onClick={() => handleClick('7')}>7</button>
      <button className="num" onClick={() => handleClick('8')}>8</button>
      <button className="num" onClick={() => handleClick('/')}>/</button>
      <button className="num" onClick={() => handleClick('9')}>9</button>
      <button className="num" onClick={() => handleClick('-')}>-</button>
      <button className="num" onClick={() => handleClick('4')}>4</button>
      <button className="num" onClick={() => handleClick('5')}>5</button>
      <button className="num" onClick={() => handleClick('6')}>6</button>
      <button className="num" onClick={() => handleClick('*')}>*</button>
      <button className="plus" onClick={() => handleClick('+')}>+</button>
      <button className="num" onClick={() => handleClick('3')}>3</button>
      <button className="num" onClick={() => handleClick('2')}>2</button>
      <button className="num" onClick={() => handleClick('1')}>1</button>
      <button className="num" onClick={() => handleClick('0')}>0</button>
      <button className="num" onClick={() => handleClick('00')}>00</button>
      <button className="equal" onClick={calculation}>=</button>
      <button className="mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default App;
