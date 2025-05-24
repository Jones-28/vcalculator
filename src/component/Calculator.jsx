import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => setInput(input + value);

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const clear = () => setInput('');

  const buttons = ['1','2','3','+','4','5','6','-','7','8','9','*','0','.','=','/'];

  return (
    <div className="calculator">
      <h1>VCalculator</h1>
      <input value={input} readOnly />
      <div className="buttons">
        {buttons.map((val) =>
          val === '=' ? (
            <button key={val} onClick={calculate}>{val}</button>
          ) : (
            <button key={val} onClick={() => handleClick(val)}>{val}</button>
          )
        )}
        <button onClick={clear} className="clear">C</button>
      </div>
    </div>
  );
}

export default Calculator;