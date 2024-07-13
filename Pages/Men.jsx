import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Men = () => {
const[num , setNum]= useState([]);
const fake=async()=>{
await  axios.get('https://fakestoreapi.com/products').then((result)=>setNum(result.num.products));
}

useEffect(()=>{
  fake();
},[num])
  
  return (
    <div>

<div className="container">
  <div className="row">
    {num.map((e)=>{
      return(
        <div className="col-md-3" key={e.id}>
          <div className="card art" style={{width: '14rem', height:'25rem'}}>
  <img src={e.image} className="card-img-top" alt="..." style={{height:'15rem'}} />
  <div className="card-body">
    <h5 className="card-title">{e.title.slice(0,15)}..</h5>
    <p className="card-text">{e.description.slice(0,40)}....</p>
    <a href="#" className="btn btn-primary som">Go somewhere</a>
  </div>
</div>
        </div>
      )
    })}
  </div>
</div>




    </div>
  )
}

export default Men