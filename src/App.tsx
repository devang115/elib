import React, { useState, useEffect } from 'react'
import BookList from './components/BookList'
import BookDetail from './components/BookDetail'
import AddEditBookForm from './components/AddEditBookForm'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Book } from './types'
import { Library } from 'lucide-react'

const initialBooks: Book[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publicationDate: "1960-07-11",
    available: true,
    description: "The story of racial injustice and the loss of innocence in the American South during the Great Depression."
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publicationDate: "1949-06-08",
    available: false,
    description: "A dystopian social science fiction novel and cautionary tale set in a totalitarian society."
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publicationDate: "1813-01-28",
    available: true,
    description: "A romantic novel of manners that follows the character development of Elizabeth Bennet."
  }
]

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [isAddingBook, setIsAddingBook] = useState(false)
  const [isEditingBook, setIsEditingBook] = useState(false)
  const [filters, setFilters] = useState({ genre: '', author: '', publicationDate: '' })

  const filteredBooks = books.filter(book => {
    return (
      book.genre.toLowerCase().includes(filters.genre.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      book.publicationDate.includes(filters.publicationDate)
    )
  })

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book)
    setIsAddingBook(false)
    setIsEditingBook(false)
  }

  const handleAddBook = () => {
    setSelectedBook(null)
    setIsAddingBook(true)
    setIsEditingBook(false)
  }

  const handleEditBook = (book: Book) => {
    setSelectedBook(book)
    setIsAddingBook(false)
    setIsEditingBook(true)
  }

  const handleDeleteBook = (id: number) => {
    setBooks(books.filter(book => book.id !== id))
    setSelectedBook(null)
  }

  const handleSubmitBook = (book: Book) => {
    if (isEditingBook) {
      setBooks(books.map(b => b.id === book.id ? book : b))
    } else {
      setBooks([...books, { ...book, id: books.length + 1 }])
    }
    setIsAddingBook(false)
    setIsEditingBook(false)
    setSelectedBook(null)
  }

  const handleBorrowBook = (id: number) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, available: false } : book
    ))
  }

  const handleReturnBook = (id: number) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, available: true } : book
    ))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-blue-600 flex items-center">
              <Library className="mr-2" /> E-Library Management
            </h1>
          </header>
          <SearchBar setFilters={setFilters} />
          <div className="flex flex-col md:flex-row mt-6">
            <div className="w-full md:w-1/3 pr-4">
              <BookList 
                books={filteredBooks} 
                onSelectBook={handleSelectBook}
                onAddBook={handleAddBook}
              />
            </div>
            <div className="w-full md:w-2/3 mt-6 md:mt-0">
              {selectedBook && !isAddingBook && !isEditingBook && (
                <BookDetail 
                  book={selectedBook}
                  onClose={() => setSelectedBook(null)}
                  onBorrow={handleBorrowBook}
                  onReturn={handleReturnBook}
                  onEdit={handleEditBook}
                  onDelete={handleDeleteBook}
                />
              )}
              {(isAddingBook || isEditingBook) && (
                <AddEditBookForm 
                  book={isEditingBook ? selectedBook : undefined}
                  onSubmit={handleSubmitBook}
                  onCancel={() => {
                    setIsAddingBook(false)
                    setIsEditingBook(false)
                    setSelectedBook(null)
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App