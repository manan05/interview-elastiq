import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setSentiment(data.sentiment);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Sentiment Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Analyze
        </button>
      </form>
      {sentiment && <h2>Sentiment: {sentiment}</h2>}
    </div>
  );
}

export default App;
