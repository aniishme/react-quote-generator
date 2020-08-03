import React from "react";

function QuoteCard({ randomQuote, showQuote }) {
  return (
    <div>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text center">
          <span className="card-title">Random Quote Generator</span>
          <p>&nbsp;&nbsp;</p>
          <a className="waves-effect waves-light btn" onClick={showQuote}>
            Get Quote
          </a>
        </div>
      </div>
      {randomQuote.text ? (
        <div className="card blue-grey darken-1">
          <div className="card-content white-text center">
            <p className="color-red">"{randomQuote.text}"</p>
            <p>&nbsp;&nbsp;</p>
            {randomQuote.author ? <p>-{randomQuote.author}</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default QuoteCard;
