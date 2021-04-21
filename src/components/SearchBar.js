import React from 'react'

function SearchBar({ searchField, searchChange }) {
    return (
        <div>
            <input 
                type="search"
                placeholder="search contact"
                onChange={searchChange}
            />    
        </div>
    )
}

export default SearchBar
