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

  return <></>;
}

export default App;
