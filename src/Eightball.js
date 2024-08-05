import React, { useState } from "react";
import "./EightBall.css";

const allAnswers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

function getRand(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

function EightBall() {
  const [answer, setAnswer] = useState({
    msg: "Think of a Question",
    color: "black",
  });

  const restart = () => {
    setAnswer({
      msg: "Think of a Question",
      color: "black",
    });
  };

  return (
    <div>
      <div
        className="EightBall"
        onClick={() => setAnswer(getRand(allAnswers))}
        style={{ backgroundColor: answer.color }}
      >
        <p className="EightBall-msg">{answer.msg}</p>
      </div>
      <button onClick={restart} className="EightBall-reset-btn">
        Reset
      </button>
    </div>
  );
}

export default EightBall;
