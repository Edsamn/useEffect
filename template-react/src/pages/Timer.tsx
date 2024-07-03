import DefaultPage from '../config/layout/DefaultPage';
import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);
  });

  return (
    <>
      <DefaultPage>
        <h1>Timer</h1>
        <h1>I've rendered {count} times!</h1>
      </DefaultPage>
    </>
  );
}

export default Timer;
