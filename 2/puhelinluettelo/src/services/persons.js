import axios from 'axios'
const urlPersons = 'http://localhost:3001/persons/'

async function createPerson(person) {
  const url = urlPersons
  return await axios
    .post(url, person)
    .then(response => response.data)
    .catch(err => alert(err))
}

async function readPerson(id) {
  const url = urlPersons + id
  return await axios
    .get(url)
    .then(response => response.data)
}

async function readPersons() {
  const url = urlPersons
  return await axios
    .get(url)
    .then(response => response.data)
}

async function updatePerson({ id, newPerson }) {
  const url = urlPersons + id
  return await axios
    .put(url, newPerson)
    .then(response => response.data)
    .catch(err => console.log(err))
}

async function deletePerson({ id }) {
  const url = urlPersons + id
  return await axios
    .delete(url)
    .then(response => response.data)
    .catch(err => alert(err))
}

export default { createPerson, readPerson, readPersons, updatePerson, deletePerson }
