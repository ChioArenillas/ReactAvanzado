import React, { useState } from 'react'

export default function useCounter(initialiteCounter) { //los hook se pone siempre el "use" delante
    const [count, setCounter] = useState(initialiteCounter)

    const handleIncrement = () => {
        let countAux = count +1
        setCounter(countAux)
    }
    const handleDecrement = () => {
        let countAux = count -1
        setCounter(countAux)
    }
  return {count, handleIncrement, handleDecrement}
}
