import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Nav = props => {
  return (
    <div> <nav class="navbar navbar-expand-lg bg-dark" style={{height:100}}>
    <div class="container-fluid">
    <img src="https://avatars.githubusercontent.com/u/2918581?s=280&v=4" width="50" height="50" alt=""/>
 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to='/search' class="nav-link active" aria-current="page" ><b>SEARCH</b></Link>
          </li>
          <li class="nav-item">
            <Link to='/' class="nav-link" ><b>ADD</b></Link>
          </li>
          <li class="nav-item">
            <Link to='/view' class="nav-link" ><b>VIEW</b></Link>
          </li>
        
        </ul>
     
      </div>
    </div>
  </nav></div>
  )
}

Nav.propTypes = {}

export default Nav