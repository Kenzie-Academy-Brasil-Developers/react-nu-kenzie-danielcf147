const Filter = ({ filter, setFilter }) => {
  return (
    <div className="container-filter">
      <div className="resumo-financeiro">
        <p>Resumo financeiro</p>
      </div>
      <div className="container-filterBtn">
        <button
          className="filterBtn"
          onClick={() => setFilter("todos")}
          style={
            filter === "todos"
              ? { backgroundColor: "#FD377E", color: "white" }
              : { backgroundColor: "#e9ecef" }
          }
        >
          Todos
        </button>
        <button
          className="filterBtn"
          onClick={() => setFilter("entrada")}
          style={
            filter === "entrada"
              ? { backgroundColor: "#FD377E", color: "white" }
              : { backgroundColor: "#e9ecef" }
          }
        >
          Entrada
        </button>
        <button
          className="filterBtn"
          onClick={() => setFilter("saida")}
          style={
            filter === "saida"
              ? { backgroundColor: "#FD377E", color: "white" }
              : { backgroundColor: "#e9ecef" }
          }
        >
          Saida
        </button>
      </div>
    </div>
  );
};
export default Filter;
