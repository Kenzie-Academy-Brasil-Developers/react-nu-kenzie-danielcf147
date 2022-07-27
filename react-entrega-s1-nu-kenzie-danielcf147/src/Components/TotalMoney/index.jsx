const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="total-valor">
      <div className="total-valor-inner">
        <p className="p-total">Valor total:</p>
        <p className="p-total-valor">
          R$
          {listTransactions.reduce(
            (previousValue, { value, type }) =>
              type === "entrada"
                ? previousValue + value
                : previousValue - value,
            0
          )}
        </p>
      </div>
      <div>
        <p className="p-referente-saldo">O valor se refere ao saldo</p>
      </div>
    </div>
  );
};
export default TotalMoney;
