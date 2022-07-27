import { useState } from "react";

import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import TotalMoney from "./Components/TotalMoney";
import Filter from "./Components/Filter/Filter";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  const [filter, setFilter] = useState("todos");

  return (
    <div className="container">
      <div className="header">
        <img className="img" src="./icons/Kenzie.png" alt="" />
        <button className="btn">Inicio</button>
      </div>
      <div className="product-container">
        <div>
          <div className="container-left">
            <Form setListTransactions={setListTransactions} />
            <TotalMoney listTransactions={listTransactions} />
          </div>
        </div>
        <div className="container-right">
          <Filter filter={filter} setFilter={setFilter} />
          <List listTransactions={listTransactions} filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default App;
