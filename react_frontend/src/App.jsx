import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(5);
  const [message, setMessage] = useState("Default message");

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("http://localhost:5000/");
      console.log(data.data.message);
      setMessage(data.data.message);
    }
    fetchData()
  }, []);

  return (
    <>
      {Array(10)
        .fill(0)
        .map((a) => {
          return (
            <>
              <div>{count}</div>
              <div>{message}</div>
            </>
          );
        })}
    </>
  );
}

export default App;
