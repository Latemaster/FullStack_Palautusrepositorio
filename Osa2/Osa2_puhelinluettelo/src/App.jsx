import { useState } from 'react'


const PersonForm = ({newName, newNum, handleNameChange, handleNumChange, addName}) => {
  return (
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
  )
}

const FilterNames = ({newFilter, handleFilterChange}) => {
  return (
    <div>
    filter shown with: <input value = {newFilter} onChange = {handleFilterChange}/> 
    </div>
  )
}

const ShowPersons = ({persons, newFilter})=>{
  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  return (
    namesToShow.map(person => <div key = {person.name}> {person.name} {person.number}</div>)
  )
}

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

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterNames newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>Add Name</h2>
      <PersonForm handleNameChange={handleNameChange} handleNumChange={handleNumChange} newName={newName} newNum={newNum} addName={addName}/>
      <h3>Numbers</h3>
      <ShowPersons persons={persons} newFilter={newFilter}/>
    </div>
  )
}
export default App