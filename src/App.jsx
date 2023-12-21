import { useContext, useEffect, useState } from 'react'
import './App.css'
import initialBooks from "./mocks/books.json"
import { ListBooks } from './components/ListBooks'
import { ListLecture } from './components/ListLecture'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'


function App() {
  const [books] = useState(initialBooks.library)
  const availableBooksStorage = JSON.parse(window.localStorage.getItem("generalBooks")) ?? books
  const lectureBooksStorage = JSON.parse(window.localStorage.getItem("lectureBooks")) ?? []
  const [availableBooks, setAvailableBooks] = useState(availableBooksStorage)
  const [lectureBooks, setLectureBooks] = useState(lectureBooksStorage)
  const { filterBooks } = useFilters();

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
          <Header />
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
