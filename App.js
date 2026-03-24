import React, { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");

  const moods = [
    { name: "Happy", emoji: "😊", color: "#ffe066" },
    { name: "Sad", emoji: "😢", color: "#74c0fc" },
    { name: "Angry", emoji: "😡", color: "#ff6b6b" },
    { name: "Excited", emoji: "🤩", color: "#b197fc" }
  ];

  return (
    <div className="container" style={{ backgroundColor: mood.color || "#f1f3f5" }}>
      <h1>Mood Tracker</h1>

      <div className="buttons">
        {moods.map((m, index) => (
          <button key={index} onClick={() => setMood(m)}>
            {m.name}
          </button>
        ))}
      </div>

      {mood && (
        <div className="result">
          <h2>You are feeling:</h2>
          <p>{mood.name} {mood.emoji}</p>
        </div>
      )}
    </div>
  );
}

export default App;