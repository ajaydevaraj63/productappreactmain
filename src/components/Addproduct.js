import React, { useState } from 'react'
import Nav from './Nav'
import Navbar from './Navbar'

const Addproduct = () => {
  var [name,setname]=useState("")
  var [price,setprice]=useState("")
  var [description,setdec]=useState("")
  const addData=()=>{
    const data={"name":name,"price":price,"description":description }
    console.log(data)
  }
  
  return (
    <div> 
      <Nav/>
          
          <div class="container">  <div class="row">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div class="row g-3">
  <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
      <label for="" class="form-label">name</label>
      <input type="text" class="form-control"onChange={setname}/>
  </div>
  <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label for="" class="form-label">price</label>
    <input type="text" class="form-control"onChange={setprice}/>
  </div>
  <div class="col col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10"> <label for="" class="form-label">description</label>
   <textarea name="" id="" cols="30" rows="10"class="form-control"onChange={setdec}></textarea></div>
  <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><input type="button" value="submit" class="btn btn-dark" onClick={addData}/></div>
</div>

    </div>
</div>
 
</div></div>
  )
}

export default Addproduct