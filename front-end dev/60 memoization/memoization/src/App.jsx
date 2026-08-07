import React, { useCallback, useMemo, useState } from 'react'
import About from './About';

const App = () => {
  console.log("app rendering......");
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState({
    name: "rahul",
    id: "1"
  })


  let heavyCalc = useMemo(() => {
    console.log("heavy calculation running...");
    for (let i = 0; i < 1000000000; i++) { }
  }, []);

  let greet = useCallback(() => {
    console.log("hey good evening bhaiyo...");
  }, []);


  return <div>

    <p>count  {count} </p>
    <button className='border-2'
      onClick={() => setCount(count + 1)}>
      click me
    </button>

    <About count={count} first={first} greet={greet} />

  </div>;
};

export default App