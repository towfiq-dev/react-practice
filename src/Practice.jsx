import React from 'react'

const Practice = () => {
  return (
    <div>
    <Person></Person>
    <Person></Person>
    <Sports></Sports>
    </div>
  )
}

const Person = ()=>{
  const age = 20
  return(
    <p>Lorem ipsum dolor sit amet. {age}</p>
  )
}

const Sports = ()=> {
  const age = 22
return(
  <div>
    <p>Hey I am Jadu {age}</p>
  </div>
)
}

export default Practice  