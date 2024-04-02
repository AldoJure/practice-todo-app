import React, { useState } from 'react'

function TodoApp() {
  const [task, setTask] = useState(null)
  const [taskList, setTaskList] = useState([])

  function handleChange(event) {
    setTask(event.target.value)
  }

  function handleClick() {
    setTaskList(prevTasks => {
      return [...prevTasks, task]
    })
  }
  return (
    <section>
      <div>
        <h1>Ingrese su tarea:</h1>
        <input 
        placeholder='Aprender React.js'
        onChange={handleChange} />
        <button onClick={handleClick}>Guardar</button>
      </div>
      <div>
        <h3>Tareas:</h3>
        <div>
          <input type='checkbox' />
          <p>{taskList}</p>
          <button>Borrar</button>
        </div>
      </div>
      <div>
        <h3>Completadas:</h3>
      </div>
    </section>
  )
}

export default TodoApp