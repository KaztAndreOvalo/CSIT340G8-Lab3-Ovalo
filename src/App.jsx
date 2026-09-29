const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of units {props.total}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.name} - {props.code} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'Project Management for IT'
  const part1 = {
    name: 'Industry Elective 1',
    exercises: 3
  }
  const part2 = {
    name: 'Data Analytics 1',
    exercises: 3
  }
  const part3 = {
    name: 'Information Management 2',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer name="Kazt Andre S. Ovalo" code="CSIT340" section="G8" />
    </div>
  )
}

export default App