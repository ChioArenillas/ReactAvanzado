import React from 'react'
import { useRef } from 'react';

export default function FocusComponent() {
    const inputRef = useRef(null);
    const divRef = useRef(null)

    const handleFocus = () => {
        let inputElement = inputRef.current;
        inputElement.value = 'hola';
    };

    const handlerOnChange = (e) => {
        let divElement = divRef.current;
        let texto = e.target.value
        if(texto === 'chio'){
            divElement.style.cssText = 'background-color: red';
        }
    }
  return (
    <div>
        <div ref={divRef}>
            <input type="text" ref={inputRef} onChange={handlerOnChange} />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    </div>
  )
}
