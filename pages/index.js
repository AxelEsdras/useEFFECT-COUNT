import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Contador() {
  const [count, setCount] = useState(0);

  // useEffect para ejecutar algo cuando cambie el contador
  useEffect(() => {
    console.log('COUNT has been changed:', count);
    return () => {
      console.log('cleaning the previous effect...');
    };
  }, [count]); // Se ejecutará cada vez que `count` cambie

  return (
    <div>
      <h1>Counter with useEffect</h1>
      <p>Counter value: {count}</p>

      <div >
        {/* Botón para incrementar el contador */}
        <button onClick={() => setCount(count + 1)}>Increment</button>

        {/* Botón para decrementar el contador */}
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>

    </div>
  );
}
