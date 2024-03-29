import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const randomInteger = (length) => {
  const randomInt = Math.floor(Math.random()*length)
  return randomInt 
}

const Anecdote = (props) => {
  return (
    <div>
    <p>{props.anecdotes} </p>
    <p>has {props.points} votes </p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
   
  const [selected, setSelected] = useState(0)

  const [mostpoints, setMostPoints] = useState(0)


  const handleAnecdoteClick = () => { 
    setSelected(randomInteger(anecdotes.length))
  }

  const handleVoteClick = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
    for (let i = 0; i < newPoints.length; i ++)
    {
      if (newPoints[i] > newPoints[mostpoints])
      {
        setMostPoints(i)
      }
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes = {anecdotes[selected]} points ={points[selected]} />
      <Button handleClick = {() => handleVoteClick()}  text = {"vote"}/>
      <Button handleClick = {() => handleAnecdoteClick()} text = {"next anecdote"}/>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes = {anecdotes[mostpoints]} points ={points[mostpoints]} />
    </div>
  )
}

export default App