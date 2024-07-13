import React from 'react'
import '../Style/Text.css'
const Text = () => {
  return (
    <div>
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2 "><p className='sho'>Shopping Options</p>
       </div>
            <div className="col-lg-8 un"><h5>UNSTITCHED</h5>
            <p>Dress to impress<br></br>
Shop 2 piece suits starting at Rs 1,390</p></div>
            
            <div className="col-lg-2 un"><img src="/small img.jpg" alt="" style={{width:"100px", height:"100px"}} /></div>
        </div>
<div className="main">
    <div className="left">
       
        <input type="checkbox" className='pric'/>Up To 1000RS<br></br>
        <input type="checkbox" />From 1000 to 1000RS<br></br>
        <input type="checkbox" />From 1000 to 1000RS<br></br>
        <input type="checkbox" />From 1000 to 1000RS<br></br>
        <input type="checkbox" />From 1000 to 1000RS<br></br>
        <input type="checkbox" />From 1000 to 1000RS<br></br>
        <input type="checkbox" />From 1000 to 1000RS<br></br>
        <input type="checkbox" />Up To 1000RS<br></br>
        <input type="checkbox" />Up To 1000RS<br></br>
        <input type="checkbox" />Uo To 1000RS<br></br>
        <input type="checkbox" />Uo To 1000RS<br></br>
        <input type="checkbox" />Uo To 1000RS<br></br>
        <input type="checkbox" />Uo To 1000RS<br></br>
        <input type="checkbox" />Uo To 1000RS<br></br>
        <input type="checkbox" />Uo To 1000RS<br></br>
        <input type="checkbox" />Uo To 1000RS<br></br>
        <input type="checkbox" />Uo To 1000RS<br></br>
    </div>
    <div className="right">
        <div className="row mt-4">
            <div className="col-lg-3"><img src="/crd1.jpg" alt=""  className='s' style={{width:"190px"}}/></div>
            <div className="col-lg-3">
                <img src="/crd2.jpg" alt="" className='sc'   style={{width:"190px"}}/>
            </div>
            <div className="col-lg-3"><img src="/crd3.jpg" alt="" className='sce' style={{width:"190px"}}/></div>
            <div className="col-lg-3">
                <img src="/crd4.jpg" alt="" className='scs' style={{width:"190px"}}/>
            </div>
        </div>
    </div>
</div>



</div>

    </div>
  )
}

export default Text