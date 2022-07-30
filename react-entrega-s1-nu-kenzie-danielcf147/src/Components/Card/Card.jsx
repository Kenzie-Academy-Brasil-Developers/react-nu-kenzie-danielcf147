const Card = ({ item, listTransactions, setListTransactions }) => {
  return (
    <div className="asd">
      <div className="container-card">
        <div>
          <div
            className="color-type"
            style={
              item.type === "entrada"
                ? { background: "#03b898" }
                : { background: "#E9ECEF" }
            }
          ></div>
        </div>

        <div className="outter-container-card">
          <div className="inner-container-card">
            <p className="description">{item.description}</p>
            <div className="container-trash">
              <p className="value">R$ {item.value}</p>
              <button
                onClick={() => {
                  const filtered = listTransactions.filter(
                    (value) => value.id !== item.id
                  );
                  console.log(filtered);
                  setListTransactions(filtered);
                }}
              >
                <img className="trash" src="./icons/trash.png" alt="" />
              </button>
            </div>
          </div>
          <div className="container-inner-value">
            <p className="type">{item.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
