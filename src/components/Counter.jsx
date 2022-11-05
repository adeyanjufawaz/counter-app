import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet-async"

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  let countReducer = (state, action) => {
    let inputValue = Number(document.getElementById("input").value);
    switch (action.type) {
      case "inputUpdate":
        return { count: inputValue };
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        if (state.count > 0) {
          return { count: state.count - 1 };
        } else {
          return { count: 0 };
        }
      case "reset":
        return { count: 0 };
      default:
        return state.count;
    }
  };

  let [state, dispatch] = useReducer(countReducer, { count: 0 });

  let updateInput = (e) => {
    setText(e.target.value);
    setCount(Number(e.target.value));
    dispatch({ type: "inputUpdate" });
  };

  let increment = () => dispatch({ type: "increment" });
  let decrement = () => dispatch({ type: "decrement" });
  let reset = () => dispatch({ type: "reset" });

  return (
    <>
      <Helmet>
        <title>Counter App</title>
        <meta name="description" content="Homepage" />
        {/* <link rel="c" href="" /> */}
      </Helmet>
      <div className="App">
        <div className="counter">
          <h1>Count is {state.count.toLocaleString()} </h1>
          <input
            type="number"
            onChange={updateInput}
            placeholder="Enter a number"
            id="input"
            className="input--btn"
          />
          <button onClick={increment} className="btn">
            Increment
          </button>
          <button onClick={decrement} className="btn">
            Decrement
          </button>
          <button onClick={reset} className="btn">
            {" "}
            Reset
          </button>
          <Link to="/errorTester" className="err--link">
            Test Error
          </Link>
        </div>
      </div>
    </>
  );
}

export default Counter;
