import { useEffect, useState } from 'react'
import './App.css'
import initialBooks from "./mocks/books.json"
import { ListBooks } from './components/ListBooks'
import { ListLecture } from './components/ListLecture'
import { Header } from './components/Header'


function App() {
  const [books] = useState(initialBooks.library)
  const availableBooksStorage = JSON.parse(window.localStorage.getItem("generalBooks")) ?? books
  const lectureBooksStorage = JSON.parse(window.localStorage.getItem("lectureBooks")) ?? []
  const [availableBooks, setAvailableBooks] = useState(availableBooksStorage)
  const [lectureBooks, setLectureBooks] = useState(lectureBooksStorage)
  const [filters, setFilters] = useState({
    genre: "all",
    pages: 0
  })

  const filterBooks = (books) => {
    return books.filter(element => {
      return (
        (element.book.genre == filters.genre || filters.genre === "all")
        &&
        element.book.pages >= filters.pages
      )
      
    })
  }

  const filteredBooks = filterBooks(availableBooks)
  const filteredLectureBooks = filterBooks(lectureBooks)

  useEffect(() => {
    window.localStorage.setItem("generalBooks", JSON.stringify(availableBooks))
    window.localStorage.setItem("lectureBooks", JSON.stringify(lectureBooks))
  },[availableBooks,lectureBooks])

  return (
    <>
      <h1>Bookshop</h1>

      <main>
        <section>
          <h2>Lista de Libros {filteredBooks.length}</h2>
          <Header updateFilters={setFilters}/>
          <ListBooks addToLecture={setLectureBooks} updateBooks={setAvailableBooks} books={filteredBooks} />
        </section>

        <section>
          <h2>Lista de Lectura {filteredLectureBooks.length}</h2>
          <ListLecture updateLectureBooks={setLectureBooks} addToListBooks={setAvailableBooks} books={filteredLectureBooks} />
        </section>
      </main>

    </>
  )
}

export default App
