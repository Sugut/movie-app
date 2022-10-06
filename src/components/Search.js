import React from 'react'

function Search({search, onSearchChange}) {
  return (
      <header className='header'>
          <input
            className="search"
            type="text"
            value={search}
            placeholder="Searching..."
            onClick={onSearchChange}
          />
        </header>
  )
}

export default Search