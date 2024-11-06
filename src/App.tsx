import { useState } from "react";
import "./App.css";
import classes from "./Test.module.css";
import Loader from "./loader/loader";
import Button from "./button/button";
function App() {
  const [isPulsing, setIsPulsing] = useState(false);

  const handleClick = () => {
    // Trigger the pulse effect by setting isPulsing to true
    setIsPulsing(true);

    // Remove the pulse effect after the animation duration (1 second here)
    setTimeout(() => {
      setIsPulsing(false);
    }, 1000);
  };
  return (
    <>
      {/* <button
        className={`${classes.button} ${isPulsing ? classes.pulseEffect : ""}`}
        onClick={handleClick}
      >
        <span>
          <Loader />
        </span>
        Click me
      </button> */}
      <Button /><Button variant="solid" size="md">Click Me</Button>
    </>
  );
}

export default App;
