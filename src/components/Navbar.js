import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link ></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link  to="/" class="nav-link active" >Addbooks</Link>
        </li>
        <li class="nav-item">
          <Link to="/search" class="nav-link" >Search</Link>
        </li>
        <li class="nav-item">
          <Link to="/view" class="nav-link" >view books</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>    
    </div>
  )
}

export default Navbar