import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>Clicked {count} times</button>;
}

export default Counter;
