import React from 'react'
import ReactDOM from 'react-dom'
import Content from './Content'
import Total from './Total'
const Header = ({course}) => <h1>{course}</h1>
//**  cons header = ({course}) => {return <h1>{course}</h1>} forma larga */
const App = () => {
  const course = 'Half Stack application development'
  const parts =[
    {name:'Fundamentals of React',exercises: 10},
    {name:'Using props to pass data',exercises: 7},
    {name:'State of a component',exercises: 14}
  ];

  return (
    <div>
      <Header course={course}/>
      
      <Content />
      <Total parts={[parts]}/>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))