import React, { useState } from 'react'

function TodoApp() {
  const [task, setTask] = useState(null)
  const [taskList, setTaskList] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  function handleChange(event) {
    setTask(event.target.value)
  }

  function handleClick() {
    setTaskList(prevTasks => {
      return [...prevTasks, task]
    })
  }

  function handleCompleteTask(event) {
    const { target } = event
    const index = target.getAttribute('dataindex')
    //console.log(`El evento se ejecuto desde un checkbox y la tarea es: ${taskList[index]}`);
    setCompletedTasks(prevCompletedTasks => {
      return [...prevCompletedTasks, taskList[index]]
    })
    setTaskList(taskList.filter(task => task !== taskList[index]))
  }

  function handleRemoveTask(event) {
    const { target } = event
    const index = target.getAttribute('dataindex')
    console.log(`El elemento seleccionado es: ${taskList[index]}`);
    setTaskList(taskList.filter(task => task !== taskList[index]))
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
          {taskList.map((task, index) => {
            return (
              <>
                <input 
                dataindex={index}
                type='checkbox' 
                onChange={handleCompleteTask} 
                checked={false}
                />
                <p>{task}</p>
                <button
                dataindex={index} 
                onClick={handleRemoveTask}>Borrar</button>
              </>
            )
          })
          }
        </div>
      </div>
      <div>
        <h3>Completadas:</h3>
        {completedTasks.map(task => {
          return <p>{task}</p>
        })}
      </div>
    </section>
  )
}

export default TodoApp