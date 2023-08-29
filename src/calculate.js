import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  
  const handleCalculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      switch (operation) {
        case 'add':
          setResult(n1 + n2);
          break;
        case 'subtract':
          setResult(n1 - n2);
          break;
        case 'multiply':
          setResult(n1 * n2);
          break;
        case 'divide':
          setResult(n1 / n2);
          break;
        default:
          setResult('Invalid operation');
      }
    } else {
      setResult('Invalid numbers');
    }
  };

  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="num1" className="form-label">Number 1</label>
          <input type="text" className="form-control" id="num1" value={num1} onChange={(e) => setNum1(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="num2" className="form-label">Number 2</label>
          <input type="text" className="form-control" id="num2" value={num2} onChange={(e) => setNum2(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary me-2" onClick={() => handleCalculate('add')}>Add</button>
        <button type="button" className="btn btn-primary me-2" onClick={() => handleCalculate('subtract')}>Subtract</button>
        <button type="button" className="btn btn-primary me-2" onClick={() => handleCalculate('multiply')}>Multiply</button>
        <button type="button" className="btn btn-primary me-2" onClick={() => handleCalculate('divide')}>Divide</button>
      </form>
      <div className="mt-3">
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
};

export default Calculator;
