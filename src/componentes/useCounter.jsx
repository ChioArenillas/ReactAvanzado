import React, { useState } from 'react'

export default function useCounter(initialiteCounter) {
    const [count, setCounter] = useState(initialiteCounter)

    const handleIncrement = () => {
        let countAux = count +1
        setCounter(countAux)
    }
    const handleDecrement = () => {
        let countAux = count -1
        setCounter(countAux)
    }
  return ( count, handleIncrement, handleDecrement)
}
