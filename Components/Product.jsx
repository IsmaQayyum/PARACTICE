import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
  const [data,setData]=useState([]);
const getData= async()=>{
const res=await axios.get("https://fakestoreapi.com/products").then((res)=>{
  setData(res.data) 
})
}
useEffect(()=>{
  getData();
},[])



  return (
    <div className='justify-content-between mz'>
       <div className="row  d-flex">
{data.map((e)=>{
 
  return(
    <div className="col-md-3  " key={e.id}>
      <div className="card mt-5 " style={{height:"350px", width:"250px"}}>
       <Link to={`/product/${e.id}`}> <img src={e.image} className="card-img mt-3 mx-3" alt="..." style={{height:"200px", width:"200px"}}/></Link>
        <div className="card-body text-center">
          <h5 className="card-title">{e.name}</h5>
          <p className="card-text">{e.description.slice(0,50)}...</p>
        </div>
      </div>
    </div>
  )
})}
</div>





    </div>
  )
}

export default Product