
import React from 'react'


const SearchField = () => {
    return (
        <div class="wrap">
    <div class="search">
      <input type="text" class="searchTerm"  placeholder="Search for employee">
          
      </input>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
    )
}

export default SearchField
