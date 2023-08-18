import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [music, setMusic] = useState({ title: "", singer: "" });

  // OpenAI API 호출
  const fetchOpenApi = useCallback(() => {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_KEY,
    });

    const testPrompt = "recommend me one female indie song";

    new OpenAIApi(configuration)
      .createCompletion({
        model: "text-davinci-003",
        prompt: testPrompt,
        temperature: 0,
        max_tokens: 150,
      })
      .then((res) => {
        const { choices } = res.data;
        const [title, singer] = choices[0].text.split("by");

        setMusic({ title, singer }); // 음악의 제목, 가수 데이터 저장
      });
  }, []);

  useEffect(() => {
    fetchOpenApi(); // Mount 시 호출한다.
  }, []);

  const { title, singer } = music;
  return (
    <div className="App">
      {title} - {singer}
    </div>
  );
}

export default App;
