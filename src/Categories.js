import React from "react";

function Categories() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Authorization", "Basic " + window.btoa("admin:admin"));
    const url = "http://localhost:8080/api/v1/category";
    fetch(url, { headers: headers })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);
  return (
    <React.Fragment>
      <ul className="item">
        {categories.map((category) => {
          const { id, name, description } = category;
          return (
            <li key={id}>
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </li>
          );
        })}
        <li>
          <button type="button" onClick={() => alert("coming soon!")}>
            Add new catergoy
          </button>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Categories;
