const Header = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} excercises = {props.excercises1}/>
      <Part part = {props.part2} excercises = {props.excercises2}/>
      <Part part = {props.part3} excercises = {props.excercises3}/>
    </div>
  )
}

const Part = (props) => {
  return (
  <p>{props.part}, {props.excercises}</p>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 +  props.excercises2 + props.exercises3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course} /> 
      <Content part1 = {part1} part2 = {part2} part3 = {part3} excercises1 = {exercises1} excercises2 = {exercises2} excercises3 = {exercises3} />
      < Total exercises1 = {exercises1} excercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
}

export default App
