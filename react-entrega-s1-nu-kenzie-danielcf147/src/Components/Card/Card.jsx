const Card = ({ item }) => {
  return (
    <div className="asd">
      <div className="container-card">
        <div>
          <div className="color-type"></div>
        </div>

        <div className="outter-container-card">
          <div className="inner-container-card">
            <p className="description">{item.description}</p>
            <div className="container-trash">
              <p className="value">R$ {item.value}</p>
              <img className="trash" src="./icons/trash.png" alt="" />
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
