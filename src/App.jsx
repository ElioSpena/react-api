import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [actresses, setActresses] = useState([]);
  console.log(actresses);

  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
      setActresses(resp.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {actresses.map((curActress) => (
          <div key={curActress.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <img
                src={curActress.image}
                className="img-fluid rounded-top h-100"
                alt={curActress.name}
              />
              <div className="card-body">
                <h5 className="card-title">{curActress.name}</h5>
                <p className="card-text">{curActress.biography}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{`Birthday: ${curActress.birth_year}`}</li>
                <li className="list-group-item">{`Nationality: ${curActress.nationality}`}</li>
                <li className="list-group-item">{`Awards: ${curActress.awards}`}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
