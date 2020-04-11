import React from 'react'

export default ({ createPersonHandler, setNewNameHandler, setNewNumberHandler }) => {
  return (
    <form onSubmit={createPersonHandler}>
      <div>
        <div>name: <input onChange={setNewNameHandler} /></div>
        <div>number: <input onChange={setNewNumberHandler} /></div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
