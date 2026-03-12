import React from 'react'
import '../src/PracticeJsx.css'

const Practice = () => {
  return (
    <div>
    <Person></Person>
    <Person></Person>
    <Sports></Sports>
    <Developer></Developer>
    <Developer></Developer>
    </div>
  )
}

const Person = ()=>{
  const personStyle ={
    color: 'red',
    border: '2px solid blue'
  }
  const age = 20
  return(
    <div style={personStyle}>
      <p>Lorem ipsum dolor sit amet. {age}</p>
    </div>
  )
}

const Developer=()=>{
  return(
    <div style={{
      color: 'green',
      font: 'bold',
      border: '1px solid red',
      margin: '10px'
    }}>
    <h2>Developer</h2>
    <h3>Technology</h3>
    </div>
  )
}

const Sports = ()=> {
  const age = 22
return(
  <div>
    <p>Hey I am Jadu {age}</p>
    <ul>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
    </ul>
  </div>
)
}

export default Practice  