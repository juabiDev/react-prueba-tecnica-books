import { useState, useId } from "react";

export function Filters({ updateFilters }) {
    const [pages, setPages] = useState(0)
    const IdGenre = useId();
    const idPages = useId();

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
        <>
            <div>
                <label htmlFor={IdGenre}>Género</label>
                <select onChange={handleChangeGenre} name={IdGenre} id={IdGenre}>
                    <option value="all">Todos</option>
                    <option value="Fantasía">Fantasía</option>
                    <option value="Zombies">Zombies</option>
                    <option value="Ciencia ficción">Ciencia ficción</option>
                    <option value="Terror">Terror</option>
                </select>
            </div>
            <div>
                <label htmlFor={idPages}>Páginas</label>
                <div style={{ display: "flex", alignItems: "center", gap: "20px"}}>
                    <input id={idPages} onChange={handleChangePages} type="range" min="0" max="1000" value={pages} />
                    <span>{pages}</span>
                </div>
            </div>
        </>
    )
}