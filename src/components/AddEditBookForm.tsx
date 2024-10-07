import React, { useState } from 'react'
import { Book } from '../types'
import { Save, X } from 'lucide-react'

interface AddEditBookFormProps {
  book?: Book
  onSubmit: (book: Book) => void
  onCancel: () => void
}

const AddEditBookForm: React.FC<AddEditBookFormProps> = ({ book, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(book?.title || '')
  const [author, setAuthor] = useState(book?.author || '')
  const [genre, setGenre] = useState(book?.genre || '')
  const [publicationDate, setPublicationDate] = useState(book?.publicationDate || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      id: book?.id || 0,
      title,
      author,
      genre,
      publicationDate,
      available: book?.available ?? true,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{book ? 'Edit Book' : 'Add New Book'}</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="genre" className="block text-gray-700 font-bold mb-2">Genre</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="publicationDate" className="block text-gray-700 font-bold mb-2">Publication Date</label>
        <input
          type="date"
          id="publicationDate"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 flex items-center"
        >
          <X size={20} className="mr-2" /> Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
        >
          <Save size={20} className="mr-2" /> {book ? 'Update' : 'Add'} Book
        </button>
      </div>
    </form>
  )
}

export default AddEditBookForm