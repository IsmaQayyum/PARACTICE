import React from 'react'
import '../Style/Card.css'
import Image from '../Data/Image.json'
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <div>
<div className="container">
    <div className="row">
   {
    Image.map((e)=>{
      return(
        <div className="col-md-3  bg"><Link to={`/card/${e.id}`}><img src={e.img} alt="" style={{height:"270px", width:"180px"}} className='pt-2'/></Link>
        <p className='txt'>{e.title}</p></div>
      )
    })
   }
    
       
      
    </div>

</div>

</div>

   
  )
}

export default Card