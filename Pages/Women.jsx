import React, { useEffect, useState } from 'react'

const Women = () => {
  const [data , setData]=useState([]);
  const fetchdata= async()=>{
   await fetch('https://fakestoreapi.com/products').then((response)=>response.json()).then((result)=>setData(result))
  }

useEffect(()=>{
  fetchdata();
},[data]);

  
  return (
    <div>
<div className="container-fluid">
  <div className="row">
    {data.map((a)=>{
      return(
        <div className="col-md-3" key={a.id}>

<div className="card art" style={{width: '14rem', height:'25rem'}}>
  <img src={a.image} className="card-img-top" alt="..." style={{height:'15rem'}} />
  <div className="card-body">
    <h5 className="card-title">{a.title.slice(0,15)}..</h5>
    <p className="card-text">{a.description.slice(0,40)}....</p>
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

export default Women