import React, { useContext } from 'react'
import "../styles/component-styles/searchfilter.css"
import {FaFilter, FaSearch} from "react-icons/fa"
import { DataContext } from '../context/DataContext'
const SearchFilter = () => {
  const {searchTerm, setSearchTerm, handleSearch} = useContext(DataContext);
  return (
    <div className='search-filter'>
      <div className="search-cont">
        <input 
        type="text" 
        className="search-input" 
        placeholder='search...' 
        value={searchTerm} 
        onChange={(e) => 
          setSearchTerm(e.target.value)}          
        />
        <FaSearch 
          className='search-icon' 
          size={20} 
          color='black'
          onClick={handleSearch}
        />
      </div>
      <div className="filter-cont">
        <button className="filter-btn">
          <FaFilter size={18} color='black'/>
          <h5 id="filter-name">Filter</h5>
        </button>
      </div>
    </div>
  )
}

export default SearchFilter
