import React from 'react'

const SearchForm = ({ searchInput, handleSearchInput, handleSearch }) => {
  return (
    <form className='search-form' onSubmit={handleSearch}>
      <label htmlFor='searchInput' name='searchInput'>
        <input
          type='text'
          name='searchInput'
          placeholder='search'
          value={searchInput}
          onChange={e => handleSearchInput(e.target.value)}
        />
      </label>

      <button className='button' onClick={handleSearch}>
        Search
      </button>
    </form>
  )
}

export default SearchForm
