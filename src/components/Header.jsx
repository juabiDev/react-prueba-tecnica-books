import { useState } from "react"

export function Header({ updateFilters }) {
    const [pages, setPages] = useState(0)

    const handleChangeGenre = (event) => {
        const genre = event.target.value 
        updateFilters(prevState => ({
            ...prevState, genre: genre
        }))
    }

    const handleChangePages = (event) => {
        const pages = event.target.value;
        setPages(pages)
        updateFilters(prevState => ({
            ...prevState, pages: pages
        }))
    }

    return (
        <header>
            <div>
                <label htmlFor="genre">Género</label>
                <select onChange={handleChangeGenre} name="genre" id="genre">
                    <option value="all">Todos</option>
                    <option value="Fantasía">Fantasía</option>
                    <option value="Zombies">Zombies</option>
                    <option value="Ciencia ficción">Ciencia ficción</option>
                    <option value="Terror">Terror</option>
                </select>
            </div>
            <div>
                <label htmlFor="pages">Páginas</label>
                <div style={{ display: "flex", alignItems: "center", gap: "20px"}}>
                    <input id="pages" onChange={handleChangePages} type="range" min="0" max="1000" value={pages} />
                    <span>{pages}</span>
                </div>
            </div>
        </header>
    )
}