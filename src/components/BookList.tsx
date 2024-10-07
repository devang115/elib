import React from 'react'
import { Book } from '../types'
import { PlusCircle } from 'lucide-react'

interface BookListProps {
  books: Book[]
  onSelectBook: (book: Book) => void
  onAddBook: () => void
}

const BookList: React.FC<BookListProps> = ({ books, onSelectBook, onAddBook }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Book Listing</h2>
        <button
          onClick={onAddBook}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center"
        >
          <PlusCircle size={20} className="mr-2" /> Add Book
        </button>
      </div>
      <ul className="space-y-2">
        {books.map((book) => (
          <li
            key={book.id}
            onClick={() => onSelectBook(book)}
            className="p-3 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
          >
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600">by {book.author}</p>
            <p className="text-xs text-gray-500">{book.genre} • {book.publicationDate}</p>
            <span className={`text-xs ${book.available ? 'text-green-600' : 'text-red-600'}`}>
              {book.available ? 'Available' : 'Borrowed'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList