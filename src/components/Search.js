import React from 'react'
import Nav from './Nav'

const Search = () => {
  return (
    <div>  
          <Nav/>
          <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-8 col-sm-8 col-lg-8 col-xl-8 col-xxl-8"><label for="" class="form-label">product name</label>
               <input type="text" class="form-control"/>
                </div>
                <div class="col col-8 col-sm-8 col-lg-8 col-xl-8 col-xxl-8">
                    <input type="button" value="search" class="btn btn-dark"/>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Search