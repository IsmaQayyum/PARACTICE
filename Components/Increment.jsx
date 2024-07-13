import React, { useState } from 'react'

const Increment = () => {
    const [num, setNum]=useState();
    
    const addvalue=()=>{
setNum(num+1);
    }
    const removevalue=()=>{
      setNum(num-1);
          }
  return (
    <div>
<div className="main d-flex mt-5  ">
    <button className='btn btn-primary' onClick={addvalue}>Increment</button>
<button  className='btn btn-primary mx-5' onClick={removevalue}>Decrement</button></div>


    </div>
  )
}

export default Increment