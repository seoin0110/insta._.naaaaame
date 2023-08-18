import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [resultText, setResultText] = useState("");
  const [isReady, setIsReady] = useState(false);

  // const api_key=""
  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "서강대에 대해서 설명해줘" },
  ];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_OPENAI_KEY,
  };
  const data = {
    model: "gpt-3.5-turbo",
    temperature: 0.5,
    n: 1,
    messages: messages,
  };

  const handleSubmit = (e) => {
    axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        JSON.stringify({
          messages: messages,
          model: "gpt-3.5-turbo",
        }),
        { headers }
      )
      .then((res) => {
        setIsReady(true);
        setResultText(res.data.choices[0].message.content);
        // console.log(res.data.choices[0].message.content)
      })
      .catch((err) => {
        console.log(err);
        // alert("error: "+ err.response.data.error)
      });
  };

  handleSubmit();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
