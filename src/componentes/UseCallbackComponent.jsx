import React, { useCallback, useState } from 'react'
import Todos from './Todos';

export default function UseCallbackComponent() {
    const [ todos, setTodos] = useState([]);

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo}/>
    </div>
  )
}
