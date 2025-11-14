import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [selected, setSelected] = useState("actresses");

  console.log(actresses, actors);

  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
      setActresses(resp.data);
    });
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
      setActors(resp.data);
    });
  }, []);

  return (
    <>
      <Header
        onActorsClick={() => setSelected("actors")}
        onActressesClick={() => setSelected("actresses")}
      />
      <Main actresses={actresses} actors={actors} selected={selected} />
    </>
  );
}

export default App;
