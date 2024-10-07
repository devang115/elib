import React from 'react'
import { Book } from '../types'
import { X, Edit, Trash2, BookOpen, BookX, Calendar, User, BookIcon, Tag } from 'lucide-react'

interface BookDetailProps {
  book: Book
  onClose: () => void
  onBorrow: (id: number) => void
  onReturn: (id: number) => void
  onEdit: (book: Book) => void
  onDelete: (id: number) => void
}

const BookDetail: React.FC<BookDetailProps> = ({ book, onClose, onBorrow, onReturn, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-3xl font-bold text-blue-600">{book.title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center mb-2">
            <User size={20} className="text-gray-500 mr-2" />
            <p className="text-lg"><span className="font-semibold">Author:</span> {book.author}</p>
          </div>
          <div className="flex items-center mb-2">
            <Tag size={20} className="text-gray-500 mr-2" />
            <p className="text-lg"><span className="font-semibold">Genre:</span> {book.genre}</p>
          </div>
          <div className="flex items-center mb-2">
            <Calendar size={20} className="text-gray-500 mr-2" />
            <p className="text-lg"><span className="font-semibold">Published:</span> {book.publicationDate}</p>
          </div>
          <div className="flex items-center mb-2">
            <BookIcon size={20} className="text-gray-500 mr-2" />
            <p className="text-lg">
              <span className="font-semibold">Status:</span> 
              <span className={`ml-2 px-2 py-1 rounded-full text-sm ${book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {book.available ? 'Available' : 'Borrowed'}
              </span>
            </p>
          </div>
        </div>
        
        <div className="col-span-2 md:col-span-1">
          <img 
            src={`https://source.unsplash.com/random/400x300?book,${encodeURIComponent(book.title)}`} 
            alt={book.title}
            className="w-full h-48 object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700">
          {book.description || "No description available for this book."}
        </p>
      </div>
      
      <div className="flex flex-wrap justify-end space-x-2 mt-6">
        {book.available ? (
          <button
            onClick={() => onBorrow(book.id)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
          >
            <BookX size={20} className="mr-2" /> Borrow
          </button>
        ) : (
          <button
            onClick={() => onReturn(book.id)}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center"
          >
            <BookOpen size={20} className="mr-2" /> Return
          </button>
        )}
        <button
          onClick={() => onEdit(book)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 flex items-center"
        >
          <Edit size={20} className="mr-2" /> Edit
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center"
        >
          <Trash2 size={20} className="mr-2" /> Delete
        </button>
      </div>
    </div>
  )
}

export default BookDetail