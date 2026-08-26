import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increamet, increametbyvalue } from "./feature/counterSlice";

const App = () => {
  const [number, setNumber] = useState(0)
let dispatch = useDispatch();
   let { count } = useSelector((store) => store.count);
  return (
    <div>
      <h1>hello</h1>
      <h1>count -- {count}</h1>
      <input onChange={(e) => setNumber(e.target.value)  } type="text" placeholder="Enter the number" />
      <button onClick={() => dispatch(increametbyvalue(number))}>Add</button>
      <button onClick={() => dispatch(increamet())}>Increament</button>
      <button onClick={() => dispatch(decrement())}>Decreament</button>
    </div>
  );
};

export default App;
