
const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
      <h2>Filtrar: </h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Todas as tarefas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
      </div>
      <p>Ordem alfabética</p>
      <button onClick={() => setSort("Asc")}>Asc</button>
      <button onClick={() => setSort("Desc")}>Desc</button>
    </div>
  )
}

export default Filter
