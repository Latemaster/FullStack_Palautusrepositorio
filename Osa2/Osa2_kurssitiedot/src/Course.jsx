const Course = ({course}) => {

    const Header = ({name}) => {
      return (
          <h1>{name}</h1>
      )
    }
    
    const Content = ({parts}) => {
      return (
    parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)
      )
    }
    
    const Total = ({exercises}) => {
      console.log(exercises)
      const total = exercises.reduce( (s, p) => 
      s + p)
      return (<p>total of {total} exercises </p>)
    }
    
    return (
      <div>
      <Header name = {course.name}/>
      <ul> 
      <Content parts = {course.parts}/>
      </ul>
      <Total exercises={course.parts.map(exercise => exercise.exercises)}/>
      </div>
    )
    }

    export default Course