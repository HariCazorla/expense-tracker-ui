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
    <div>
      <h1>Categories</h1>
    </div>
  );
}

export default Categories;
