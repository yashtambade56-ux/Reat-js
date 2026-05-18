import { useState } from 'react'

function SearchBox() {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    alert("You searched: " + query)
  }

  return (
    <form onSubmit={handleSearch} className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBox