import React, { useState } from 'react'

const Textarea = (props) => {
 
    const handleUpClick=()=>{
console.log("clicked here"+ text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText]= useState("Enter text here")
  return (
    <div>
<div className="container">
    <h1>{props.heading}</h1>

  
  <div className="mb-3">
     <input type="textarea" className="form-control" value={text} onChange={handleOnChange}id="exampleInputPassword1" />
  </div>




<button className='btn btn-primary' onClick={handleUpClick}>Convert to upercase</button>
</div>

    </div>
  )
}

export default Textarea