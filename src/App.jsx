import { useState } from 'react'
import './App.css'
import books from "./mocks/books.json"

function App() {
  const hasBooks = books.library.length > 0 
  const [listBooks, setListBooks] = useState([]) 

  const handleClick = (event) => {
    const findBook = books.library.find(element => element.book.ISBN === event.target.id)
    if(!findBook) return;
    setListBooks([...listBooks,findBook])
  }

  return (
    <>
      <h1>Bookshop</h1>
      <main>
        <section>
          <h2>Libros Disponibles</h2>
          <ul>
            {hasBooks && books.library.map((item) => (
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
              {listBooks && listBooks.map((item, index) => {
                console.log(item)
              })}
          </ul>
        </section>
      </main>


    </>
  )
}

export default App
