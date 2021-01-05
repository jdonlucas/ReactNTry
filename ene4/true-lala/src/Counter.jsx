import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={() => setCount(count + 1)}>やめてください!!!!</button>
      <p>Llevas {count} picadas</p>
      <p>Esto imprime el numero {props.numbers} y este es otro numero {props.number2}</p>
    </>
  )
}

export default Counter;