import Home from '@/pages';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

export default function NuevoComponente() {

  const[nuevaVariable, setNuevaVariable] = useState(0)
  const counter = useRef(0);

  const addCounter= () => {
    counter.current = counter.current + 1;
    console.log ('Valor de cunter  ' + counter.current);
  }
  const nuevaVariableHandler= (e) => {
    setNuevaVariable(e.target.value)
  }
  useEffect(() => {
    console.log('el componente se renderiza')
  })

  return (
    <div>
      <button onClick={addCounter}>Click aquí</button>
      <br/>
      <input value={nuevaVariable} onChange={nuevaVariableHandler}></input>
      <br />
      <button>Go Home</button>
    </div>
  )
}
