const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
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
  const part1 = 'Industry Elective 1'
  const exercises1 = 3
  const part2 = 'Data Analytics 1'
  const exercises2 = 3
  const part3 = 'Information Management 2'
  const exercises3 = 3

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Footer name="Kazt Andre S. Ovalo" code="CSIT340" section="G8" />
    </div>
  )
}

export default App