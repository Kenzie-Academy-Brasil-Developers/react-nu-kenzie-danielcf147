import { useState } from "react";

const Form = ({ setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(1);
  const [type, setType] = useState("entrada");
  console.log(value);
  function transactionList() {
    if (description !== "" && value !== "") {
      setListTransactions((oldListTransaction) => [
        ...oldListTransaction,
        { description: description, type: type, value: value },
      ]);
    }
  }
  return (
    <div className="container-left-inner">
      <form
        className="form"
        onSubmit={(event) => transactionList(event.preventDefault())}
      >
        <div>
          <p className="p-description">Descrição</p>
          <input
            className="text-input"
            type="text"
            placeholder="Digite aqui sua descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <p className="p-exemple">Ex: Compra de roupas</p>
        </div>
        <div className="container-number-select">
          <div>
            <input
              className="text-input-number"
              type="text"
              placeholder="1"
              value={value}
              onChange={(event) => {
                setValue(parseInt(event.target.value));
              }}
            />
            <img src="./icons/R$.png" alt="" />
          </div>

          <select
            className="text-input-number"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value={"entrada"}>entrada</option>
            <option value={"saída"}>saida</option>
          </select>
        </div>
        <button className="submitBtn" type="submit">
          Inserir valor
        </button>
      </form>
    </div>
  );
};
export default Form;
