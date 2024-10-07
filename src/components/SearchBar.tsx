import React from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
  setFilters: (filters: { genre: string; author: string; publicationDate: string }) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ setFilters }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }))
  }

  return (
    <div className="flex space-x-4 items-center bg-gray-100 p-4 rounded-md">
      <Search size={24} className="text-gray-500" />
      <input
        type="text"
        name="genre"
        placeholder="Filter by genre"
        onChange={handleChange}
        className="flex-1 p-2 rounded-md border"
      />
      <input
        type="text"
        name="author"
        placeholder="Filter by author"
        onChange={handleChange}
        className="flex-1 p-2 rounded-md border"
      />
      <input
        type="date"
        name="publicationDate"
        onChange={handleChange}
        className="p-2 rounded-md border"
      />
    </div>
  )
}

export default SearchBar