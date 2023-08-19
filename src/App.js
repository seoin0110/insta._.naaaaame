import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [resultText, setResultText] = useState("");
  const [isReady, setIsReady] = useState(false);

  // const api_key=""
  const messages = [{ role: "user", content: "서강대에 대해서 설명해줘" }];
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
          model: "gpt-4",
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

  return (
    <div>
      <button onClick={handleSubmit}>눌러보세요</button>
      {isReady ? resultText : "로딩중..."}
    </div>
  );
}

export default App;
