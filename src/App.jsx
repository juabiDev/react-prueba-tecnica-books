import { useEffect, useState } from 'react'
import './App.css'
import initialBooks from "./mocks/books.json"
import { Book, LectureBooks, ListBooks } from './components/Book'
import { Filter } from './components/Filter'

function App() {
  const [books, setBooks] = useState(initialBooks.library)
  const [lectureBooks, setLectureBooks] = useState([])
  const [lectureBooksGenre, setLectureBooksGenre] = useState([]) 
  const [genre, setGenre] = useState("Todas")

  const handleClick = (event) => {
    const findBook = books.find(element => element.book.ISBN === event.target.id)
    if(!findBook) return;
    const newBooks = books.filter(element => element.book.ISBN !== event.target.id)
    setBooks(newBooks)
    const newLectureBooks = structuredClone(lectureBooks)
    setLectureBooks([...newLectureBooks,findBook])
  }

  const handleDrop = (event) => {
    const findBook = lectureBooks.find(element => element.book.ISBN === event.target.id)
    if(!findBook) return;
    const newlectureBooks = lectureBooks.filter(element => element.book.ISBN !== event.target.id)
    setBooks(prevState => [...prevState, findBook])
    setLectureBooks(newlectureBooks)
  }

  const handleChange = (event) => {
    const newBooks = initialBooks.library.filter(element => element.book.genre === event.target.value || event.target.value === "Todas")
    const newLectureBooks = lectureBooks.filter(element => element.book.genre === event.target.value || event.target.value === "Todas")
    setGenre(event.target.value)
    setBooks(newBooks)
    if(!newLectureBooks.length) {
      setLectureBooksGenre([])
    }
    setLectureBooksGenre(newLectureBooks) 
  }

  useEffect(() => {
    setLectureBooksGenre([...lectureBooks])
  },[lectureBooks])

  return (
    <>
      <h1>Bookshop</h1>
      <main>
        <section>
          <h2>Libros Disponibles</h2>
          <Filter handleChange={handleChange} />
          <ListBooks books={books} onclick={handleClick} />
        </section>

        <section>
          <h2>Lista de Lectura</h2>
            <LectureBooks books={lectureBooksGenre} onclick={handleDrop} />
        </section>
      </main>


    </>
  )
}

export default App
