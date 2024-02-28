import { useState, useEffect } from 'react'
import personService from './services/persons'
import './index.css'

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
          <button type="submit">add</button>
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

const ShowPersons = ({persons, newFilter, deletePerson})=>{
  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  return (
    namesToShow.map(person => <div key = {person.name}> {person.name} {person.number} 
    <button onClick={() => deletePerson(person.id, person.name)}> delete </button>
    </div>)
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [actionMessage, setActionMessage] = useState("")
  
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

  const Notification = ({message}) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="message">
        {message}
      </div>
    )
  }

  
  const addName = (event) => {
    event.preventDefault()
    if (!persons.map(person => person.name).includes(newName)){
    const personObject = {
      name: newName,
      number: newNum,
    }
    personService.create(personObject).then(returnedPerson =>
      setPersons(persons.concat(returnedPerson))
      )
    setActionMessage(`Added ${newName}`)
    setTimeout(() => {
      setActionMessage(null)
    }, 5000)
    setNewName('')
    setNewNum('')
    }
    else {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        updatePerson(newName, newNum)
      }
    }
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}`))
    {
      console.log(id)
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    setActionMessage(`Deleted ${name}`)
    setTimeout(() => {
      setActionMessage(null)
    }, 5000)
    }
  }

const updatePerson = (name, num) => {
  const personToUpdate = persons.find(p => p.name === name)
  const changedPerson = { ...personToUpdate, number: num}

  personService.update(personToUpdate.id, changedPerson).then(returnedPerson => {
    setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson))
  })
  setActionMessage(`Updated ${personToUpdate.name}`)
    setTimeout(() => {
      setActionMessage(null)
    }, 5000)
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
      <Notification message = {actionMessage}/>
      <FilterNames newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>Add Name</h2>
      <PersonForm handleNameChange={handleNameChange} handleNumChange={handleNumChange} newName={newName} newNum={newNum} addName={addName}/>
      <h3>Numbers</h3>
      <ShowPersons persons={persons} newFilter={newFilter} deletePerson={deletePerson}/>
    </div>
  )
}
export default App