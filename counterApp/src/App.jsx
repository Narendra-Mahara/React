import "./App.css";
import { useState } from "react";
function App() {
  let [count, setCount] = useState(0);

  let increaseValue = () => {
    // if (count === 10) {
    //   alert("You have reached the maximum limit");   // stop the counter at 10
    //   return;
    // }
    setCount(count + 1);
  };

  let decreaseValue = () => {
    // if (count == 0) {
    //   alert("You have reached the minimum limit");  // stop the counter at 0
    //   return;
    // }
    setCount(count - 1);
  };
  return (
    <>
      <h1>Counter App</h1>

      <div className="container">
        <h3>Count : {count}</h3>
        <button type="button" onClick={increaseValue}>
          increase value
        </button>
        <button type="button" onClick={decreaseValue}>
          decrease value
        </button>
      </div>
    </>
  );
}

export default App;
