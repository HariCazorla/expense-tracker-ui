import React from "react";

function Expenses() {
  const [expenses, setExpenses] = React.useState([]);
  React.useEffect(() => {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Authorization", "Basic " + window.btoa("admin:admin"));
    const url = "http://localhost:8080/api/v1/expenses";
    fetch(url, { headers: headers })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExpenses(data);
      });
  }, []);
  return (
    <React.Fragment>
      <ul className="item">
        {expenses.map((expense) => {
          const { expenseId, name, amount, creationDate, comments } = expense;
          return (
            <li key={expenseId}>
              <div>
                <h2>{name}</h2>
                <p>
                  {comments}, Amount: {amount}, created: {creationDate}{" "}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default Expenses;
