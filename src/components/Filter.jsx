export function Filter({ handleChange }) {
    return (
        <div className="filter-genre">
        <h3>Filtrar por Genero</h3>
        <select onChange={handleChange} name="genre" id="genre">
          <option value="Todas">Todas</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Zombies">Zombies</option>
          <option value="Terror">Terror</option>
        </select>
      </div>
    )
}