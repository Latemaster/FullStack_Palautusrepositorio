import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (!persons.map(person => person.name).includes(newName)){
    const personObject = {
      name: newName,
      number: newNum,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNum('')
    }
    else {
      alert(`${newName} is already added to the phonebook`)
    }
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      filter shown with: <input value = {newFilter} onChange = {handleFilterChange}/> 
      </div>
      <h2>Add Name</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value = {newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value =  {newNum} onChange={handleNumChange}/>
        </div>
        <div>
          <button  type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {namesToShow.map(person => <div key = {person.name}> {person.name} {person.number}</div>)}
    </div>
  )
}
export default App