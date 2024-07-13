import React from 'react'
import '../Style/Productdetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Productdetail = () => {
  const {id}=useParams();
  const getData=axios.get("https://fakestoreapi.com/products" ,{id})
  return (
    <div>
<div className="row  det">
    <div className="col-lg-6">
<div className="card1"></div>
<img src={getData.image} alt="" className='mt-4' style={{width:"350px", height:"350px"}}/>
    </div>
    <div className="col-lg-6">
        <div className="detl mt-4">
<h5 className=''>{getData.title}
</h5>
<p>{getData.rating}</p>
  <input type="checkbox"  style={{height:"60px", width:"33px"}}/>
    <input type="checkbox" className="mx-2" style={{height:"60px", width:"33px"}}/>
    <input type="checkbox" style={{height:"60px", width:"33px"}} />
    <input type="checkbox" className="mx-2"style={{height:"60px", width:"33px"}}/>
    <input type="checkbox"   style={{height:"60px", width:"33px"}}/>

<h5>Productive Details _____</h5>
<p>A-Line Shirt<br></br>
Stand out with your festive style in our bright pink EMBROIDERED A-Line feature round neckline with shirt</p>
      <div className="main"> <button className='btn btn-secondary'>+</button>
       <button className='btn btn-secondary mx-3'>-</button>
       </div>
       
       
       
        </div>
    </div>
</div>
<div className="row">
    <div className="col-lg-4">

    </div>
    <div className="col-lg-4">

    </div>
    <div className="col-lg-4">

    </div>
</div>




    </div>
  )
}

export default Productdetail