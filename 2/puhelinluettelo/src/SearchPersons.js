import React from 'react'

export default ({ setNewSearchHandler }) => {
  return (
    <div>
      filter shown with <input onChange={setNewSearchHandler} />
    </div>
  )
}
