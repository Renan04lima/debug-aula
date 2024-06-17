"use client";
import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    debugger;
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Count:", count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
