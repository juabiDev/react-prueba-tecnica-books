import { Book } from "./Book"

export function ListBooks({ books, updateBooks, addToLecture }) {

    const handleClick = (event) => {
        const newBooks = books.filter(element => {
            return element.book.ISBN !== event.target.id
        })

        const book = books.find(element => {
            return element.book.ISBN === event.target.id
        })

        updateBooks(newBooks)
        addToLecture(prevState => ([
            ...prevState, book
        ]))
    }

    return (
        <ul>
            {books.map(element => (
                <li key={element.book.ISBN}>
                    <Book 
                        title={element.book.title}
                        cover={element.book.cover}
                        pages={element.book.pages}
                        year={element.book.year}
                        author={element.book.author}
                        genre={element.book.genre}
                        id={element.book.ISBN}
                        handleClick={handleClick}
                        typeButton={"Agregar"}
                    />
                </li>
            ))}            
        </ul>
    )
}