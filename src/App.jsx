import { useState } from 'react'
import './App.css'
import initialBooks from "./mocks/books.json"

function App() {
  const [books, setBooks] = useState(initialBooks.library)
  const [lectureBooks, setLectureBooks] = useState([]) 

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

  return (
    <>
      <h1>Bookshop</h1>
      <main>
        <section>
          <h2>Libros Disponibles</h2>
          <ul>
            {books && books.map((item) => (
                <li key={item.book.ISBN}>
                  <img src={item.book.cover} alt={`Book ${item.book.title}`}/>
                  <h3>{item.book.title}</h3>
                  <p>Year: {item.book.year}</p>
                  <p>Autor: {item.book.author.name}</p>
                  <p>Pages: {item.book.pages}</p>
                  <strong>Genre: {item.book.genre} </strong>
                  <button id={item.book.ISBN} onClick={handleClick}>Agregar</button>
                </li> 
              ))}
          </ul>
        </section>

        <section>
          <h2>Lista de Lectura</h2>
          <ul>
              {lectureBooks && lectureBooks.map((item) => (
                <li key={item.book.ISBN}>
                  <img src={item.book.cover} alt={`Book ${item.book.title}`}/>
                  <h3>{item.book.title}</h3>
                  <p>Year: {item.book.year}</p>
                  <p>Autor: {item.book.author.name}</p>
                  <p>Pages: {item.book.pages}</p>
                  <strong>Genre: {item.book.genre} </strong>
                  <button id={item.book.ISBN} onClick={handleDrop}>Eliminar</button>
                </li> 
              ))}
          </ul>
        </section>
      </main>


    </>
  )
}

export default App
