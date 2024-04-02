import React from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

function TodoApp() {
  return (
    <section>
      <div>
        <h1>Ingrese su tarea:</h1>
        <Input />
        <Button />
      </div>
      <div>
        <h3>Tareas:</h3>
        <div>
          <Button />
        </div>
      </div>
      <div>
        <h3>Completadas:</h3>
      </div>
    </section>
  )
}

export default TodoApp