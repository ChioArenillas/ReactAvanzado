import React from 'react'
import useCounter from './useCounter'

export default function HookComponent() {
    const {count, handleIncrement, handleDecrement} = useCounter(0)

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={handleIncrement}>Sumar 1</button>
      <button onClick={handleDecrement}>Restar 1</button>
    </div>
  )
}
