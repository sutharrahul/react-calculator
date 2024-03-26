import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(expression);
        setDisplay(result);
        setExpression(result.toString());
      } catch (error) {
        setDisplay("Error");
        setExpression("");
      }
    } else if (value === "C") {
      setDisplay("0");
      setExpression("");
    } else {
      const newExpression = expression + value;
      setDisplay(newExpression);
      setExpression(newExpression);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="calculator border-2 ">
        <div className="p-5 border-2 ">{display}</div>
        <div className="buttons">
          <div className="flex flex-row gap-2 p-2 text-x">
            <button
              className="btn btn-secondary text-xl"
              onClick={() => handleButtonClick("C")}
            >
              C
            </button>
            <button
              className="btn btn-accent text-xl"
              onClick={() => handleButtonClick("/")}
            >
              /
            </button>
            <button
              className="btn btn-accent text-xl"
              onClick={() => handleButtonClick("*")}
            >
              *
            </button>
          </div>
          <div className="flex flex-row gap-2 p-2">
            <button
              className="btn btn-neutral text-xl"
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>
            <button
              className="btn btn-neutral text-xl"
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>
            <button
              className="btn btn-neutral text-xl"
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>
            <button
              className="btn btn-accent text-xl"
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
          </div>
          <div className="flex flex-row gap-2 p-2">
            <button
              className="btn btn-neutral text-xl"
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>
            <button
              className="btn btn-neutral text-xl"
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>
            <button
              className="btn btn-neutral text-xl"
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>
            <button
              className="btn btn-accent text-xl"
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
          </div>
          <div className="flex flex-row gap-2 p-2">
            <button
              className="btn btn-neutral text-xl"
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>
            <button
              className="btn btn-neutral text-xl"
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>
            <button
              className="btn btn-neutral text-xl"
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>
            <button
              className="btn btn-accent text-xl"
              onClick={() => handleButtonClick("=")}
            >
              =
            </button>
          </div>
          <div className="flex flex-row gap-2 p-2">
            <button
              className="btn btn-neutral text-xl"
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>
            <button
              className="btn btn-neutral text-xl"
              onClick={() => handleButtonClick(".")}
            >
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
