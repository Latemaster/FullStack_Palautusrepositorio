import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: "040-1231244",  
  }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

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

  const handelNumChange = (event) => {
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value = {newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value =  {newNum} onChange={handelNumChange}/>
        </div>
        <div>
          <button  type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key = {person.name}> {person.name} {person.number}</div>)}
    </div>
  )

}

export default App