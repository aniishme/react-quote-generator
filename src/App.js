import React, { useState } from "react";
import Api from "./api/Api";
import QuoteCard from "./component/QuoteCard";

function App() {
  const [quote, setQuote] = useState([]);
  const [random, setRandom] = useState({});

  function getApi(data) {
    setQuote(data);
  }
  function showQuote() {
    const randomQuote = quote[Math.floor(Math.random() * quote.length)];
    if (randomQuote) {
      setRandom(randomQuote);
    }
  }

  return (
    <div className="App container">
      <Api getApi={getApi} />
      <QuoteCard randomQuote={random} showQuote={showQuote} />
    </div>
  );
}

export default App;
