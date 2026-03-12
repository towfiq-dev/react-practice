import React from 'react'
import '../src/PracticeJsx.css'

const PracticeJsx = () => {
  return (
    <div>
    <Student></Student>
    
    </div>
  )
}

const Student=()=>{
  return(
    <div className='student'>
    <p>Name:</p>
    <p>Dept:</p>
  </div>
  )
}

export default PracticeJsx