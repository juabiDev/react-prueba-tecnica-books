export function Book({ title, pages, genre, cover, year, author, handleClick, typeButton, id }) {
    return (
        <article>
            <img src={cover} alt={title} />
            <h3>Title: {title}</h3>
            <p>Pages: {pages}</p>
            <p>Genre: {genre}</p>
            <p>Year: {year}</p>
            <p>Author: {author.name}</p>
            <button id={id} onClick={handleClick}>{typeButton}</button>
        </article>
    )
}