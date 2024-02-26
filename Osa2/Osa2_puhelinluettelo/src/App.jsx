import { useState, useEffect } from 'react'
import axios from 'axios'

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
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  
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