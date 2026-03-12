import React from 'react'
import '../src/PracticeJsx.css'

const PracticeJsx = () => {
  return (
    <div>
    <Student
    name= 'A' dept= 'A+' runs= '5000'
    ></Student>
    <Student
    name= 'B' dept= 'B+' runs= '5000'
    ></Student>
    
    </div>
  )
}

const Student=({name, dept, runs})=>{
  return(
    <div className='student'>
    <p>Name:{name}</p>
    <p>Dept:{dept}</p>
    <p>Runs:{runs}</p>
  </div>
  )
}

export default PracticeJsx