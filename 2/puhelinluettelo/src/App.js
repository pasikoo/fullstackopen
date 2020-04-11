import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import FormAddPerson from './FormAddPerson'
import ListPersons from './ListPersons'
import SearchPersons from './SearchPersons'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    (async () => {
      const persons = await personService.readPersons()
      setPersons(persons)
    })()
  }, []);

  const updatePerson = async ({ id, newPerson }) => {
    const updatedPerson = await personService.updatePerson({ id, newPerson })
    if (updatedPerson) {
      setNotification({ type: 'success', message: `Updated ${updatedPerson.name} succesfully` })
      setTimeout(() => setNotification(null), 5000)
      const updatedPersons = persons.map(person =>
        person.id === updatedPerson.id ? updatedPerson : person
      )
      setPersons(updatedPersons)
    } else {
      setNotification({ type: 'error', message: `Updating ${newPerson.name} failed` })
      setTimeout(() => setNotification(null), 5000)
    }
  }

  const createPersonHandler = async (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber }
    const existingPerson = persons.find(person => person.name && person.name.toLowerCase() === newName.toLowerCase())
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        updatePerson({ id: existingPerson.id, newPerson: newPerson });
      }
    } else {
      setNotification({ type: 'success', message: `Created ${newPerson.name}` })
      setTimeout(() => setNotification(null), 5000)
      const newPersonWithId = await personService.createPerson(newPerson)
      if (newPersonWithId) {
        setPersons([...persons, newPersonWithId])
      }
    }
  }

  const deletePersonHandler = async (event, deletePerson) => {
    event.preventDefault()
    if (!window.confirm(`Delete ${deletePerson.name}?`)) {
      return
    }
    const deletedPerson = await personService.deletePerson({ id: deletePerson.id })
    if (deletedPerson) {
      setNotification({ type: 'success', message: `Deleted ${deletePerson.name}` })
      setTimeout(() => setNotification(null), 5000)
      const newPersons = persons.filter(person => person.id !== deletePerson.id)
      setPersons(newPersons)
    }
  }

  const setNewNameHandler = (event) => {
    const newName = event.target.value
    setNewName(newName)
  }

  const setNewNumberHandler = (event) => {
    setNewNumber(event.target.value)
  }

  const setNewSearchHandler = (event) => {
    setNewSearch(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <SearchPersons setNewSearchHandler={setNewSearchHandler} />
      <h2>Add a new</h2>
      <FormAddPerson createPersonHandler={createPersonHandler} setNewNameHandler={setNewNameHandler} setNewNumberHandler={setNewNumberHandler} />
      <h2>Numbers</h2>
      <ListPersons deletePersonHandler={deletePersonHandler} newSearch={newSearch} persons={persons} />
    </div>
  )
}

export default App
