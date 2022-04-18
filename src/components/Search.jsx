import { useState } from 'react'

function Search({ query, setQuery }) {

  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setQuery(search);
    setSearch('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex rounded overflow-hidden">
        <input 
          type="text" 
          className="p-2 flex-grow" 
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="bg-green-300 text-white p-2">
          GO
        </button>
    </form>
  )
}

export default Search