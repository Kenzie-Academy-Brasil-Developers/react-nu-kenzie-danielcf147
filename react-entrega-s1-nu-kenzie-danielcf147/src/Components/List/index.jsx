import { useState } from "react";
import Card from "../Card/Card";
const List = ({ listTransactions, filter, setListTransactions }) => {
  const filterEntrada = listTransactions.filter(
    (item) => item.type === "entrada"
  );

  const filterSaida = listTransactions.filter((item) => item.type === "saída");

  return (
    <div>
      {filter === "todos"
        ? listTransactions.map((item, index) => (
            <Card
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              item={item}
              key={index}
            />
          ))
        : filter === "entrada" || filter === "Entrada"
        ? filterEntrada.map((item, index) => (
            <Card
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              item={item}
              key={index}
            />
          ))
        : filterSaida.map((item, index) => (
            <Card
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              item={item}
              key={index}
            />
          ))}
    </div>
  );
};

export default List;
