import React, { useState } from "react";

export default function AboutPage() {
  const [greeting, setGreeting] = useState("Hello");
  const [count, setCount] = useState(0);
  const [luckyNumber, setLuckyNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const changeGreeting = () => {
    setGreeting((prev) =>
      prev === "Hello" ? "Hi there" : prev === "Hi there" ? "Hola" : "Hello"
    );
  };

  const generateNewLuckyNumber = () => {
    setLuckyNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="container">
      <h1 className="header">WELCOME</h1>

      <section className="card">
        <h2 className="text-display">{greeting}, Visitor!</h2>
        <p>Today's date: {new Date().toLocaleDateString()}</p>
        <button className="btn" onClick={changeGreeting}>
          Change Greeting
        </button>
      </section>

      <section className="card">
        <h2 className="text-display">Click Counter</h2>
        <p>You've clicked {count} time{count !== 1 ? "s" : ""}!</p>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </section>

      <section className="card">
        <h2 className="text-display">Your Lucky Number</h2>
        <p>Your lucky number is: <strong>{luckyNumber}</strong></p>
        <button className="btn" onClick={generateNewLuckyNumber}>
          Generate New Lucky Number
        </button>
      </section>
    </div>
  );
}
