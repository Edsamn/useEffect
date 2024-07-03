import { useState, useEffect } from 'react';
import DefaultPage from '../config/layout/DefaultPage';
import ButtonDefault from '../components/button-default/ButtonDefault';

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <DefaultPage>
        <h1>Count: {count}</h1>
        <ButtonDefault label="+" action={() => setCount(c => c + 1)}></ButtonDefault>
        <h1>Calculation: {calculation}</h1>
      </DefaultPage>
    </>
  );
}

export default Counter;
