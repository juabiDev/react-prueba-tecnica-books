export function Book({ book, onclick, option }) {
    return (
        <li>
            <img src={book.cover} alt={`Book ${book.title}`} />
            <h3>{book.title}</h3>
            <p>Year: {book.year}</p>
            <p>Autor: {book.author.name}</p>
            <p>Pages: {book.pages}</p>
            <strong>Genre: {book.genre} </strong>
            <button id={book.ISBN} onClick={onclick}>{option}</button>
        </li>
    )
     
}

export function ListBooks ({ books, onclick }) {
    return (
        <ul>
            {books && books.map((item) => (
                <Book key={item.book.ISBN} book={item.book} onclick={onclick} option={"Agregar"} />
            ))}
        </ul>
    )
}

export function LectureBooks ({ books, onclick }) {
    return (
        <ul>
            {books && books.map((item) => (
                <Book key={item.book.ISBN} book={item.book} onclick={onclick} option={"Eliminar"} />
            ))}
        </ul>
    )
}