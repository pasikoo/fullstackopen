import React from 'react'

export default ({ persons, newSearch, deletePersonHandler }) => {
  return (
    <div>
      {persons
        .filter(person => person.name)
        .filter(person =>
          person.name
            .toLowerCase()
            .includes(newSearch))
        .map(person =>
          <div key={person.name}>
            {person.name} {person.number}
            <button onClick={(event) => deletePersonHandler(event, person)}>delete</button>
          </div>
        )}
    </div>
  )
}
